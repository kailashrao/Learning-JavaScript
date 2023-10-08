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

// Display final results to console (to be displayed on HTML page)

/* console.log(interest1);
console.log(emi1);

for(let i=0; i<names1.length;i++) {
    console.log(messages1[i]);
}
*/

// Display on HTML Page

const path = "/Mortgage%20Interest%20and%20EMI%20Calculator/"

// bank-manager.html
function fillTable() {

    // Check active page to avoid innerHTML error due to not finding referenced id
    if(window.location.pathname == path + "bank-manager.html"){ 

        // Table header
        let table = "<table> <tr> <th>Customer</th> <th>Principal ($)</th> <th>Rate (%)</th> <th>EMI ($)</th> <th>Duration (Months)</th> <th>Total Amount ($)</th> </tr>" 

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
}

fillTable();

// james.html, peter.html, susan.html
function printMessage() {

    for(let i=0; i < names1.length; i++) {

        // Check active page to avoid innerHTML error due to not finding referenced id
        if(window.location.pathname == path + names1[i].toLowerCase() + ".html") { 

            // Concatonate HTML tags and message for specific user
            let message = "<p>" + messages1[i] + "</p>";

            // Post to HTML page at specified id
            document.getElementById(names1[i].toLowerCase()).innerHTML = message;
        }
    }
}

printMessage();
 