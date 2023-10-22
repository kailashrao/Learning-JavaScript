/*

Logical Flow for Bank 1
1. Create a list of all days in given period
2. For each day, check if there is any credit or debit entries in given csv file
3. If no credit/debit entries, principle is constant, else add credit/subtract debit, 
4. Store this in list of daily principle values
4. Multiply each days principle by time (1/365 for daily compounding) and rate (.05 for Bank 1)
5. Store this in a list of daily interests
6. Sum all the daily interests to find total interest Bank 1 owes customer

Logical Flow for Bank 2
1. Create a list of all months included in given period
2. For each month, make a list of all days in the month
3. For each day, check if there is any credit or debit entries in given csv file
4. If no credit/debit entries, principle is constant, else add credit/subtract debit, 
5. Store this in list of daily principle values
6. Find the minimum principle and multiply by time (31/365 for monthly interest) and rate (.08 for Bank 2)
7. Store this in a list of monthly interests
8. Sum all hte monthly interests to find total interest Bank 2 owes customer

Then display both interest amounts and tell customer which Bank is offering a better deal

*/


function formData(csvData){
    let lines1 = csvData.split("\n");
    let numOfLines = lines1.length;
    let lineData1 = [];
    for(let i = 0; i < numOfLines; i++) {
        lineData1.push(lines1[i].split(","));
    }

    console.log(lineData1)

    // let principal1 = lineData1[1][1] - lineData1[1][2];
    // let principal2 = principal1 + lineData1[2][1] - lineData1[2][2];
    // let interest1 = principal1 * (1/365) * (5/100);
    // let interest2 = principal2 * (1/365) * (5/100);
    // console.log(interest1);
    // console.log(interest2);

    

    let startDate = lineData1[1][0];
    let endDate = lineData1[numOfLines-1][0];

    console.log(startDate);
    console.log(endDate);

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateTime1 = new Date(startDate);
    let date1 = dateTime1.getDate() + "-" + months[dateTime1.getMonth()] + "-" + dateTime1.getFullYear();
    let date2 = new Date(endDate).getDate();
    let totalDays = date2 - date1;

    console.log(totalDays);

    let allDaysArray = [];

    for(let i = 0; i < 62; i++) {
        allDaysArray.push(date1 + i);
    }

    console.log(allDaysArray);

}

fetch("Interest.csv").then(response => response.text()).then(formData);

