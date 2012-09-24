PageXmlIndenter= (function(document, xsltprocessor) {

	var $_= document, $p= new DOMParser(), $s= new XMLSerializer();

	var _xsl= $p.parseFromString('<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:output method="xml" encoding="ISO-8859-1"/><xsl:param name="indent-increment" select="\'   \'"/><xsl:template name="newline"><xsl:text disable-output-escaping="yes">\n</xsl:text></xsl:template><xsl:template match="comment() | processing-instruction()"><xsl:param name="indent" select="\'\'"/><xsl:call-template name="newline"/><xsl:value-of select="$indent"/><xsl:copy /></xsl:template><xsl:template match="text()"><xsl:param name="indent" select="\'\'"/><xsl:call-template name="newline"/><xsl:value-of select="$indent"/><xsl:value-of select="normalize-space(.)"/></xsl:template><xsl:template match="text()[normalize-space(.)=\'\']"/><xsl:template match="*"><xsl:param name="indent" select="\'\'"/><xsl:call-template name="newline"/><xsl:value-of select="$indent"/><xsl:choose><xsl:when test="count(child::*) > 0"><xsl:copy><xsl:copy-of select="@*"/><xsl:apply-templates select="*|text()"><xsl:with-param name="indent" select="concat ($indent, $indent-increment)"/></xsl:apply-templates><xsl:call-template name="newline"/><xsl:value-of select="$indent"/></xsl:copy></xsl:when><xsl:otherwise><xsl:copy-of select="."/></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>', "text/xml");
	xsltprocessor.importStylesheet(_xsl);
	return {
		transform: function(inputId, outputId) {
			var input= $_.getElementById(inputId);
			if (input) {
				var output= $_.getElementById(outputId);
				if (output) {
					output.innerHTML= $s.serializeToString(
										xsltprocessor.transformToFragment(
											$p.parseFromString(
												input.value.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">")
												, "text/xml")
											, $_)
										).replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
				}
			}
		}
	};
});
