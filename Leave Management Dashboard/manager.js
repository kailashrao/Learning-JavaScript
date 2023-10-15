// Formerly index.js below
/*
let data1 = fetch("hello.txt");
let data2 = data1.then(response => response.text());

function getText(str1) {
    let info1 = str1.split("\n");
    let data3 = info1[0];
    let data4 = info1[1];
    document.getElementById("text1").innerHTML = data3;
    document.getElementById("text2").innerHTML = data4;
}

data2.then(getText);
*/

// This script only needs to run in manager.html

function displayData(rawCSVData) {
    // Array containing each line from csv file
    let lines = rawCSVData.split("\n");

    // 2D-Array containing 1 list for every employee
    let lineData = [];
    for(let i = 0; i < lines.length; i++) {
        lineData.push(lines[i].split(","));
    }

    // table variable is HTML code string to be added using innerHTML
    let table = "<tr>";

    // 1st element (index 0) is list of Table Headings
    // Add Table Headings using <th> tag
    for(let i = 0; i < lineData[0].length; i++) {
        table +="<th>" + lineData[0][i] + "</th>";
    }

    table += "</tr>"; // Close table heading row

    // All other elements (index 1 and greater) contain data
    // Add table data using <td> tag
    for(let i = 1; i < lineData.length; i++) { // Iterating Through employees
        table += "<tr>";
        
        for(let j = 0; j < lineData[i].length; j++) { // Iterating through specific employee data
            table += "<td>" + lineData[i][j] + "</td>"
        }
        table += "</tr>";
    }

    // Post HTML code to manager.html using innerHTML
    document.getElementById("manager-table").innerHTML = table;
}


// No need for data1, data2, etc. This can be condensed in 1 line
// Open file ---> then turn it's contents into text ---> then send the string to a function for further processing
fetch("CompanyABC_ApprovedLeave.csv").then(response => response.text()).then(displayData);