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
console.log(interest1);
console.log(emi1);

for(let i=0; i<names1.length;i++) {
    console.log(messages1[i]);
}

// Display on HTML Page

// bank-manager.html
 function fillTable() {
    let html = "<table> <tr> <th>Customer</th> <th>Principal ($)</th> <th>Rate (%)</th> <th>EMI ($)</th> <th>Duration (Months)</th> <th>Total Amount ($)</th> </tr>" 
    for(let i = 0; i < names1.length; i++) {
        html += "<tr>";
        html += "<td>" + names1[i] + "</td>";    
        html += "<td>$" + principal1[i] + "</td>";    
        html += "<td>" + rate1[i] + "%</td>";    
        html += "<td>$" + emi1[i] + "</td>";    
        html += "<td>" + months1[i] + "</td>";
        html += "<td>$" + amount1[i] + "</td>";
        html += "</tr>";    
    }

    html += "</table>";
    document.getElementById("bm-table").innerHTML = html;
 }

 fillTable();