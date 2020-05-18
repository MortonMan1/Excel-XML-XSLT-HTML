<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:variable name="BodyFont"><xsl:value-of select="data/ColourCodes/BodyFont" /></xsl:variable>                                                                                                   
<xsl:variable name="SubTitle"><xsl:value-of select="data/ColourCodes/SubTitle" /></xsl:variable>                                                                                                   
<xsl:variable name="TableHeaderBackground"><xsl:value-of select="data/ColourCodes/TableHeaderBackground" /></xsl:variable>                                                                                                   
<xsl:variable name="TableBodyEvenRowsBackground"><xsl:value-of select="data/ColourCodes/TableBodyEvenRowsBackground" /></xsl:variable>                                                                                                   
<xsl:variable name="TableBodyRowHoverBackground"><xsl:value-of select="data/ColourCodes/TableBodyRowHoverBackground" /></xsl:variable>                                                                                                   

<head>    
    <title><xsl:value-of select="data/Title"/> - <xsl:value-of select="data/SubTitle"/></title>
    <style>
        /* 
        #partsTable tr:nth-child(even){
            background-color: {$TableBodyEvenRowsBackground};
        }*/
    </style>
</head>
<body>
    <div id="container">
        <img src="assets/images/cadit-uk-logo.png" alt="CAD-IT UK" style="height: 200px;"/>
        <h1>
            <xsl:value-of select="data/Title"/><br />
            <span class="subTitle" style="color: {$SubTitle}"><xsl:value-of select="data/SubTitle"/></span>
        </h1>
        <button id="partsButton">Show Parts List</button>
        <table id="partsTable" style="display: none;">
            <thead>
                <tr style="background: {$TableHeaderBackground}" >
                    <th>Seq.</th>
                    <th>Part Number</th>
                    <th>Part Description</th>
                    <th>Qty.</th>
                </tr>
            </thead>
            
            <tbody>
                <xsl:for-each select="data/parts/part">
                    <tr>
                        <td><xsl:value-of select="Seq"/></td>
                        <td><xsl:value-of select="PartNumber"/></td>
                        <td><xsl:value-of select="PartDescription"/></td>
                        <td><xsl:value-of select="Qty"/></td>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>
        </div>
</body>
</xsl:template>
</xsl:stylesheet>