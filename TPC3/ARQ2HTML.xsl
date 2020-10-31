<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">

    <!-- Output format, encoding and identation -->
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <!-- Root element match -->
    <xsl:template match="/">
        <html>
            <head>
                <title>ARQSITS</title>
            </head>
            <body>
                <table width="100%" border="1">
                    <tr>
                        <th><h1>Índice</h1></th>
                        <th><h1>Conteúdo</h1></th>
                    </tr>
                    <tr>
                        <td valign="top" width="30%">
                            <a name="indice"/>
                            <div style="text-align: center;">
                                <input id="index-search" type="text" placeholder="Index Search" style="height: 35px; width: 50%;margin-top: 7px;"/>
                            </div>
                            
                            <ul id="index">
                                <xsl:apply-templates mode="indexation" select="//ARQELEM">
                                    <xsl:sort select="IDENTI"/>
                                    <xsl:sort select="CONCEL"/>
                                    <xsl:sort select="FREGUE"/>
                                </xsl:apply-templates>
                            </ul>                            
                        </td>
                        <td>
                            <xsl:apply-templates select="//ARQELEM">
                                <xsl:sort select="IDENTI"/>
                                <xsl:sort select="CONCEL"/>
                                <xsl:sort select="FREGUE"/>
                            </xsl:apply-templates>
                        </td>
                    </tr>
                </table>

                <script src="script.js" ></script>
            </body>
        </html>
    </xsl:template>

    <!-- _____________________ Indexation Templates _____________________ -->

    <!-- Generate Index Elements -->
    <xsl:template mode="indexation" match="ARQELEM">
        <li name="indice-elem" style="font-size: 18px; margin-top: 3px;">
            <a href="#c{generate-id()}"><b><xsl:value-of select="IDENTI"/></b> - <xsl:value-of select="CONCEL"/>, <xsl:value-of select="FREGUE"/></a>
        </li>
    </xsl:template>

    <!-- ________________________________________________________________ -->

    <!-- _______________________ Content Templates ______________________ -->


    <!-- Generate a Card for each ARQELEM -->
    <xsl:template match="ARQELEM">
        <a name="c{generate-id()}"/>

        <center>
            <h2>
                <xsl:value-of select="IDENTI"/>
            </h2>
            <hr width="40%"/>
        </center>

        <div style="display:flex; align-items: center; justify-content: space-around; flex-wrap: wrap;">
            <xsl:for-each select="*[name()!='IDENTI' and name()!='TIPO' and name()!='BIBLIO' and name()!='AUTOR' and name()!='DATA']">
                <p style="display:flex; align-items: center; justify-content: center;flex-direction: column;">
                    <b><xsl:value-of select="name()"/></b>

                    <span style="text-align: center;margin: 14px;">
                        <xsl:apply-templates/>
                    </span>

                </p>

            </xsl:for-each>

        </div>

        <xsl:if test="BIBLIO">
            <div style="display:flex; flex-direction: column; align-items: center; justify-content: center;">
                <b>BIBLIO</b>

                <ul>
                    <xsl:for-each select="BIBLIO">
                        <li>
                            <xsl:value-of select="text()"/>
                        </li>
                    </xsl:for-each>
                </ul>

            </div>
        </xsl:if>

        <div style="font-size: 19px; margin-top: 5%; display:flex; justify-content: space-around; align-items: center; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column;align-items: center; justify-content: center;">
                <b>
                    Autor
                </b>
                <div style="margin: 14px;">
                    <u><xsl:value-of select="AUTOR/text()"/></u>
                </div>
            </div>

            <div>
                [ <a href="#indice">Voltar ao Índice</a> ]
            </div>

            <div style="display: flex; flex-direction: column;align-items: center; justify-content: center;">
                <b>
                    Data
                </b>
                <div style="margin: 14px;">
                    <u><xsl:value-of select="DATA/text()"/></u>
                </div>
            </div>
        </div>
        
        <hr width="100%"/>
        <hr width="80%"/>
        <hr width="100%"/>

    </xsl:template>


    <!-- Adding Special formating for LIGA elements -->
    <xsl:template match="LIGA">
        <span>
            <i>
                <u>
                    <xsl:value-of select="text()"/>
                </u>
            </i> 
        </span>
    </xsl:template>
    
    <!-- ________________________________________________________________ -->
</xsl:stylesheet>