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
   
    //Didnt fix CORS issue:
    //xhttp.setRequestHeader("Origin", '*');
    //xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult()
{
    xml = loadXMLDoc("T:/Excel-XML-XSLT-HTML/src/xml.xml");
    xsl = loadXMLDoc("T:/Excel-XML-XSLT-HTML/src/transform.xsl");
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
