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

function interestBank1(rowData, allDays) {
    let numRows = rowData.length;
    let numDays = allDays.length;

    let principle = 0;
    let dailyInterests = [];

    let interest = 0;
    for(let i = 0; i < numDays; i++) {
        let included = false;
        for(let j = 1; j < numRows; j++) {
            if(rowData[j][0].includes(allDays[i])) {

                let credit = parseFloat(rowData[j][1]);
                if (isNaN(credit)) {
                    credit = 0;
                }

                let debit = parseFloat(rowData[j][2]);
                if (isNaN(debit)) {
                    debit = 0;
                }

                principle = principle + credit - debit;

                interest = principle * (1/365) * (0.05);
                dailyInterests.push(interest);

                included = true;
                break;
            }
        }

        if(!included) {
            dailyInterests.push(dailyInterests[i-1]);
        }
    }

    console.table(dailyInterests);

    let totalInterest = 0;
    for(let i = 0; i < numDays - 1; i++) {
        totalInterest += dailyInterests[i];
    }

    console.log(totalInterest);

}


function formData(csvData){
    let lines = csvData.split("\n");
    let numOfLines = lines.length;
    let lineData = [];

    for(let i = 0; i < numOfLines; i++) {
        lineData.push(lines[i].split(","));
    }

    let startDate = new Date(lineData[1][0]);
    let endDate = new Date(lineData[numOfLines-1][0]);

    let allDaysArray = [];

    for(let i = new Date(startDate); i <= endDate; i.setDate(i.getDate() + 1)) {
        let dayOfMonth = parseInt(i.getDate());
        if (dayOfMonth < 10) {
            dayOfMonth = "0" + dayOfMonth;
        } 
        allDaysArray.push((dayOfMonth + "-" + i.toLocaleString("en-US", {month: "short"}) + "-" + i.getFullYear()));
    }

    console.table(allDaysArray);

    interestBank1(lineData, allDaysArray);

}

fetch("Interest.csv").then(response => response.text()).then(formData);

