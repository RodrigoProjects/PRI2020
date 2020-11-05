<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <xsl:result-document href="server/arqweb/index.html">
            <html>
                <head>
                    <title>
                        Arquiossítios do NW Português
                    </title>
                </head>
                <body>
                    <h3>
                        Índice de arqueossítios
                    </h3>
                    <ul>
                        <xsl:apply-templates select="//ARQELEM[not(CONCEL=preceding::CONCEL)]">
                            <xsl:sort select="normalize-space(CONCEL)"/>
                        </xsl:apply-templates>
                    </ul>
                </body>
            </html>
        </xsl:result-document>

        <xsl:apply-templates mode="individual" select="//ARQELEM"/>
    </xsl:template>

    <xsl:template match="ARQELEM">
        <xsl:variable name="c" select="CONCEL"></xsl:variable>
        <li>
            <xsl:value-of select="CONCEL"/>
            <ul>
                <xsl:apply-templates mode="subindice" select="//ARQELEM[CONCEL=$c]">
                    <xsl:sort select="normalize-space(IDENTI)"/>
                </xsl:apply-templates>
            </ul>
        </li>
    </xsl:template>

    <xsl:template mode="subindice" match="ARQELEM">
        <li>
            <a href="{count(preceding::ARQELEM) + 1}">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>

    <xsl:template mode="individual" match="ARQELEM">
        <xsl:result-document href="server/arqweb/arq{count(preceding::ARQELEM) + 1}.html">
            <html>
                <head>
                </head>
                <body>
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
                            [ <a href=".">Voltar ao Índice</a> ]
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
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

</xsl:stylesheet>