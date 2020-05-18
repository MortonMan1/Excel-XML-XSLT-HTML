function loadXMLDoc(filename)
{
    if (window.ActiveXObject)
    {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else
    {
        xhttp = new XMLHttpRequest();
    }

    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11

    //xhttp.setRequestHeader("Origin", '*');
    //xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult()
{
    xml = loadXMLDoc("T:/Projects/Interview Tasks/CAD IT/cadit-uk-simon-excel-xml-xslt-html-284b5620a21e/Excel-XML-XSLT-HTML/tmp/xml2.xml");
    xsl = loadXMLDoc("T:/Projects/Interview Tasks/CAD IT/cadit-uk-simon-excel-xml-xslt-html-284b5620a21e/Excel-XML-XSLT-HTML/src/transform.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
    }
}

$(document).ready(function () {
    $( "#partsButton" ).click(function() {
        console.log("helklo from jquery");
        //alert( "Handler for .click() called." );
        if($( "#partsTable" ).css('display') === 'none') {

            $( "#partsTable" ).css("display", "table");
            $( "#partsButton" ).html("Hide Parts List");
        }
        else{
            $( "#partsTable" ).css("display", "none");
            $( "#partsButton" ).html("Show Parts List");
        }
    });
});
