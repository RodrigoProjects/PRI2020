module Parser where

import Data.Char

---------------- INFIX PRIORITIES ---------------

infixl 3 <**>
infixl 2 <||>

-------------------------------------------------

---------------- TYPE ANOTATION -----------------
 
type Parser s r = [s] -> [(r,[s])]

-------------------------------------------------

----------------- CORE METHODS ------------------

-- Method that parses a single Char.  
symbol :: Eq s => s -> Parser s s
symbol s [] = []
symbol s (h:t) | s == h = [(s,t)]
               | otherwise = []

-- Method that parses a Char is a predicate is satisfied.
satisfy :: (s -> Bool) -> Parser s s
satisfy p [] = []
satisfy p (h:t) | p h = [(h,t)]
                | otherwise = []

-- Method that parses a String.
token :: Eq s => [s] -> Parser s [s]
token s [] = []
token s l | take (length s) l == s = [(s, drop (length s) l)]
          | otherwise = []

-- Method that always succeds parsing anything.
succed :: r -> Parser i r
succed r inp = [(r, inp)]

-- Parser Alternative operator.
(<||>) :: Parser s a -> Parser s a -> Parser s a 
(p <||> q) inp = p inp ++ q inp

-- Parser Combinator operator.
(<**>) :: Parser s (b -> c) -> Parser s b -> Parser s c
(p <**> q) inp = [(f r, ys) | (f, xs) <- p inp, (r, ys) <- q xs]

-- Function Injector in Parsers.
(<$$>) :: (a -> r) -> Parser s a -> Parser s r
(f <$$> p) inp = [(f r, xs) | (r, xs) <- p inp]

-------------------------------------------------

------------- EXTRA FUNCTIONALITIES -------------

-- RE (Regular Expression) Operator: *
zeroOrMore :: Parser s a -> Parser s [a]
zeroOrMore p = (:) <$$> p <**> zeroOrMore p
             <||> succed []

-- RE (Regular Expression) Operator: +
oneOrMore :: Parser s a -> Parser s [a]
oneOrMore p = (:) <$$> p <**> oneOrMore p
            <||> (:[]) <$$> p

-- Zero or more spaces parser. RE (Regular Expression): [ ]*
spaces :: Parser Char [Char]
spaces = zeroOrMore (satisfy isSpace)

-- Number parser. RE (Regular Expression): [0-9]+
number :: Parser Char [Char]
number = oneOrMore (satisfy isDigit)

-- Number + Spaces. RE (Regular Expression): [0-9]+[ ]*
numberS :: Parser Char [Char]
numberS = const <$$> number <**> spaces

-- Token Parser + Spaces. RE (Regular Expression): [a-zA-Z][a-zA-Z0-9]+[ ]*
tokenS :: [Char] -> Parser Char [Char]
tokenS str = const <$$> token str <**> spaces 

-- Symbol Parser + Spaces. RE (Regular Expression): [a-zA-Z0-9][ ]*
symbolS :: Char -> Parser Char Char
symbolS chr = const <$$> symbol chr <**> spaces 

-- Parser + Separator Parser. RE (Regular Expression): ((PARSER)(SEPARATOR))*
-- Example: separatedBy (oneOrMore (satisfy isDigit)) (symbolS ',') "22, 3" == [(["22","3"],""),(["22"],", 3"),(["2"],"2, 3")]4
-- Input example: 2, 3, 4, 12, 222
separatedBy :: Parser s a -> Parser s b -> Parser s [a]
separatedBy p s = (\ a1 _ a3 -> a1 : a3) <$$> p <**> s <**> separatedBy p s
                <||> (:[]) <$$> p

-- Initial Symbol Parser + Parser + Terminal Symbol Parser. RE (Regular Expression): ((INITIAL_SYMBOL)(PARSER)(TERMINAL_SYMBOL)).
-- Example: enclosedBy (symbolS '{') (tokenS "Haskell") (symbolS '}') "{Haskell}" == 
-- Input Example: {00010001}
enclosedBy :: Parser s a -> Parser s c -> Parser s b -> Parser s c
enclosedBy is p ts = (\ _ a2 _ -> a2) <$$> is <**> p <**> ts  

-- Symbol Parser + Parser + Symbol Parser, both symbols are equal. 
enclosedByEqual :: Parser s b -> Parser s c -> Parser s c
enclosedByEqual s p = (\_ a2 _ -> a2) <$$> s <**> p <**> s

-------------------------------------------------