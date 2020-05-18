var xlsx = require('xlsx');
var js2xmlparser = require("js2xmlparser");
var jsonxml = require('jsontoxml');
const fs = require('fs');

var read_opts = {
    type: "file",
}
var excelfile = xlsx.readFile("./src/input.xlsx", read_opts);
var result = {};
var counter = 0;

excelfile.SheetNames.forEach(function(sheetName) {
    var roa = xlsx.utils.sheet_to_json(excelfile.Sheets[sheetName], {header:1});
    //var roa = xlsx.utils.sheet_to_json(excelfile.Sheets[sheetName], {header:1});
    if(roa.length) result[counter] = roa;
    counter++;
});
var noOfSheets = Object.keys(result).length;
var xmlArray = [];

//foreach sheet
var sheetIndex;
for(sheetIndex = 0; sheetIndex < noOfSheets; sheetIndex++){
    //first sheet
    if(sheetIndex == 0){
        var jsonSheet = removeEmptyRows(result[sheetIndex]);
        var noOfRows = Object.keys(jsonSheet).length;
        for(let rowIndex = 0; rowIndex < noOfRows; rowIndex++){
            checkRow(jsonSheet[rowIndex], rowIndex);
        }
    }
    else{
        //TODO x axis headers sheet
    }
}

function removeEmptyRows(sheet){
    var rowCounter = 0;
    var noOfRows = Object.keys(sheet).length;
    var simplifiedSheet = {};
    for(let i = 0; i < noOfRows; i++){
        if(sheet[i].length){
            simplifiedSheet[rowCounter] = sheet[i];
            rowCounter++;
        }
    }

    return simplifiedSheet;
}

var innerRow = false;
var innerRowParentNo = null;
function checkRow(row, rowNumber){
    var k;
    var noOfElements = Object.keys(row).length;

    //if first element not empty
    if(row[0]){
        innerRow = false;
        console.log("row", row[0]);
        //push as new element (if first part not null)
        addRow(row, noOfElements);
    }
    else{
        if(!innerRow){
            innerRowParentNo = rowNumber - 1;
            innerRow = true;
        }
        addRow(row, noOfElements);
    }
}

var checkEnd = false;
function addRow(row, noOfElements, rowNumber){
    if(!innerRow){
        //foreach element
        //recursively put in order of { ele1: { ele2: { ele3 }}}
        var tempObj = [];
        if(noOfElements == 1){
            tempObj[replaceText(String(row))] = [];
        }
        else{
            for (let index = 1; index < noOfElements; index++) {
                if(noOfElements == 1){
                    tempObj[row] = [];
                    break;
                }
                if(index == 1){
                    var secondLast = replaceText(row[noOfElements-2]);
                    var last = row[noOfElements-1];
                    tempObj[secondLast] = last;
                }
                else{
                    var secondLast = replaceText(row[noOfElements-index]);
                    tempObj[secondLast] = tempObj;
                }
            }
        }
        xmlArray.push(tempObj);
    }
    else{
        var tempObj = [];
        var filteredRow = row.filter(function (el) {
            return el != null;
        });
        noOfElements = Object.keys(filteredRow).length;
        if(noOfElements == 1){
            tempObj[replaceText(String(filteredRow))] = [];
        }
        else{
            for (let index = 1; index < noOfElements; index++) {
                if(noOfElements == 1){
                    tempObj[filteredRow] = [];
                    break;
                }
                if(index == 1){
                    var secondLast = filteredRow[noOfElements-2];
                    var last = filteredRow[noOfElements-1];
                    tempObj[replaceText(secondLast)] = last;
                }
                else{
                    var secondLast = filteredRow[noOfElements-index];
                    tempObj[replaceText(secondLast)] = tempObj;
                }
            }
        }

        var indexToUse;
        for (x in xmlArray[innerRowParentNo]) {
            indexToUse = x;
        }        
        xmlArray[innerRowParentNo][indexToUse].push(tempObj);
    }
}

function replaceText(text){
    var newText = text.replace(/[^a-zA-Z0-9 ]/g, "");
    return String(newText.replace(/\s/g, "")); 
}

newXMLObj = {};
newXMLObj2 = {};

xmlArray.forEach(convertToObj)

function convertToObj(element) {
    for (x in element) {
        if(typeof element[x] == "string"){
            newXMLObj[x] = element[x];
        }
        else{
            // if element is array
            element[x].forEach(convertToObjExtra);
            newXMLObj[x] = newXMLObj2;
        }
    } 
}
function convertToObjExtra(element) {
    for (x2 in element) {
        newXMLObj2[x2] = element[x2];
    }
}


var xml = jsonxml(newXMLObj);
console.log(xml);
//console.log(js2xmlparser.parse("data", newXMLObj));

fs.writeFileSync('./src/xml.xml', xml);
