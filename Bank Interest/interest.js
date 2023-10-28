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

function interestBank1(dailyPrinciples, numDays) {
 
    let dailyInterests = [];
    let interest = 0;

    for(let i = 0; i < numDays; i++) {
        interest = dailyPrinciples[i] * (1/365) * (0.05);
        dailyInterests.push(interest);
    }

    let totalInterest = 0;
    for(let i = 0; i < numDays; i++) {
        totalInterest += dailyInterests[i];
    }

    console.log("Bank 1 Interest: " + totalInterest);

}

function interestBank2(dailyPrinciples, numDays) {
    // Find minimum principle for each month
    let numMonths = numDays / 31;
    let monthStart, monthEnd;

    let minPrinciple = dailyPrinciples[0];

    let interest;
    let monthlyInterests = [];

    for(let i = 0; i < numMonths; i++) {
        monthStart = 31 * i;
        monthEnd = 31 * (i + 1);

        for(let j = monthStart; j < monthEnd; j++) {
            
            if (dailyPrinciples[j] < minPrinciple) {
                minPrinciple = dailyPrinciples[j];
            } 
        }

        interest = minPrinciple * (31/365) * (0.08);
        monthlyInterests.push(interest);
    }

    // Sum monthly interest

    let totalInterest = 0;
    for(let i = 0; i < numMonths; i++) {
        totalInterest += monthlyInterests[i];
    }

    console.log("Bank 2 Interest: " + totalInterest);


}


function formData(csvData){
    let lines = csvData.split("\n");
    let numRows = lines.length;
    let lineData = [];

    for(let i = 0; i < numRows; i++) {
        lineData.push(lines[i].split(","));
    }

    let startDate = new Date(lineData[1][0]);
    let endDate = new Date(lineData[numRows-1][0]);

    let allDaysArray = [];

    for(let i = new Date(startDate); i <= endDate; i.setDate(i.getDate() + 1)) {
        let dayOfMonth = parseInt(i.getDate());
        if (dayOfMonth < 10) {
            dayOfMonth = "0" + dayOfMonth;
        } 
        allDaysArray.push((dayOfMonth + "-" + i.toLocaleString("en-US", {month: "short"}) + "-" + i.getFullYear()));
    }

    let numDays = allDaysArray.length;
    let dailyPrinciples = []
    let principle = 0;

    for(let i = 0; i < numDays; i++) {
        let included = false;
        for(let j = 1; j < numRows; j++) {
            if(lineData[j][0].includes(allDaysArray[i])) {

                let credit = parseFloat(lineData[j][1]);
                if (isNaN(credit)) {
                    credit = 0;
                }

                let debit = parseFloat(lineData[j][2]);
                if (isNaN(debit)) {
                    debit = 0;
                }

                principle = principle + credit - debit;

                dailyPrinciples.push(principle);

                included = true;
                break;
            }
        }

        if(!included) {
            dailyPrinciples.push(dailyPrinciples[i-1]);
        }
    }


    interestBank1(dailyPrinciples, numDays);
    interestBank2(dailyPrinciples, numDays);

}

fetch("Interest.csv").then(response => response.text()).then(formData);

