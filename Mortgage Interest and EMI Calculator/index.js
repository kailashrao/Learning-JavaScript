// Parallel Arrays for each type of user data
const names1 = ["James", "Peter", "Susan"];
const principal1 = [10000, 8000, 5000];
const time1 = [3, 2, 1.5];
const rate1 = [8.0, 7.0, 6.0];
const interest1 = [];
const amount1 = [];
const months1 = [];
const emi1 = [];
const messages1 = [];

// Strings to concatonate for user message
const s1 = "Dear ";
const s2 = ", you have been granted a loan of $";
const s3 = ". You are required to pay a monthly installment of $";
const s4 = " for ";
const s5 = " months.";



for(let i = 0; i<names1.length; i++) {
    interest1.push(principal1[i] * rate1[i]/100 * time1[i]); // Calculate total interest
    amount1.push(principal1[i] + interest1[i]); // Calculate total amount due
    months1.push(time1[i]*12); // Calculate total duration of loan (months)
    emi1.push((amount1[i]/months1[i]).toFixed(2)); // Calculate monthly installment amount

    messages1.push(s1 + names1[i] + s2+principal1[i] + s3+emi1[i] + s4+months1[i] + s5); // Concatonate Final message
}


// Display on HTML Page

const path = "/Mortgage%20Interest%20and%20EMI%20Calculator/";

// index.html
function listUsers() {
    let users = "";

    for(let i = 0; i < names1.length; i++) {
        users += "<li><a id=\"" + i + "\" href=\"./customer.html\">"; // List and anchor opening tags
        users += names1[i] + "</a></li>"; // Display name and closing tags
    }

    document.getElementById("users-list").innerHTML = users;

}
    
// bank-manager.html
function fillTable() {
    
    // Table header
    let table = "<table> <tr> <th>Customer</th> <th>Principal ($)</th> <th>Rate (%)</th> <th>EMI ($)</th> <th>Duration (Months)</th> <th>Total Amount ($)</th> </tr>"; 

    // Table rows with data
    for(let i = 0; i < names1.length; i++) {
        table += "<tr>";
        table += "<td>" + names1[i] + "</td>";    
        table += "<td>$" + principal1[i] + "</td>";    
        table += "<td>" + rate1[i] + "%</td>";    
        table += "<td>$" + emi1[i] + "</td>";    
        table += "<td>" + months1[i] + "</td>";
        table += "<td>$" + amount1[i] + "</td>";
        table += "</tr>";    
    }

    // Close table tag
    table += "</table>";

    // Post to HTML page at specified id
    document.getElementById("bm-table").innerHTML = table;

}


function getId(e){

    // Store id of clicked element in sessionStorage (Accesible over multiple HTML pages)
    sessionStorage.setItem("id", parseInt(e.target.id));
}

// customer.html
function customerPage(id) {
    // Modify customer.html to include customer's name and specific loan message
    let title = names1[id] + " | Bank";
    let welcome = "Welcome " + names1[id] + "!";
    let message = messages1[id];

    document.getElementById("title").innerHTML = title;
    document.getElementById("wlcm-msg").innerHTML = welcome;
    document.getElementById("loan-msg").innerHTML = message;
}


// Execute Functions based on active page
// Check active page to avoid innerHTML error due to not finding referenced id
if(window.location.pathname == path + "index.html"){

    listUsers(); // list users on home page

    for(let i = 0; i < names1.length; i++) { 

        // Add event listeners for each item in list to check for click
        document.getElementById(i).addEventListener("click", getId); 
    }

} else if (window.location.pathname == path + "bank-manager.html") {
    fillTable(); // Fill table for bank-manager with all customer loan stats

} else if (window.location.pathname == path + "customer.html") {

    // Retrieve id of clicked element from sessionStorage
    let id = sessionStorage.getItem("id"); 

    customerPage(id); // Display appropriate customer details in customer.html
}