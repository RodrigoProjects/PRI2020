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
                            <ul>
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
            </body>
        </html>
    </xsl:template>

    <!-- _____________________ Indexation Templates _____________________ -->

    <xsl:template mode="indexation" match="ARQELEM">
        <a name="i{generate-id()}"></a>
        <li style="font-size: 18px; margin-top: 3px;">
            <a href="#c{generate-id()}"><b><xsl:value-of select="IDENTI"/></b> - <xsl:value-of select="CONCEL"/>, <xsl:value-of select="FREGUE"/></a>
        </li>
    </xsl:template>

    <!-- ________________________________________________________________ -->

    <!-- _______________________ Content Templates ______________________ -->

    <xsl:template match="ARQELEM">
        <a name="c{generate-id()}"/>
        <center>
            <h2>
                <xsl:value-of select="IDENTI"/>
            </h2>
            <hr width="40%"/>
        </center>

        <xsl:for-each select="*[name()!='IDENTI' and name()!='TIPO']">
            <p>
                <xsl:value-of select="name()"/>
                <span>
                    <xsl:apply-templates/>
                </span>
            </p>

        </xsl:for-each>

        <hr width="100%"/>
        <hr width="80%"/>
        <hr width="100%"/>

    </xsl:template>
    
    <!-- ________________________________________________________________ -->
</xsl:stylesheet>