function interestBank1(dailyPrincipals, numDays, rate) {
    let dailyInterests = [];
    let interest = 0;
    for(let i = 0; i < numDays; i++) {
        interest = dailyPrincipals[i] * (1/365) * rate;
        dailyInterests.push(interest);
    }
    console.table(dailyInterests);
    let totalInterest = 0;
    for(let i = 0; i < numDays; i++) {
        totalInterest += dailyInterests[i];
    }
    document.getElementById("b1").innerHTML = "Bank 1 Interest: Rs. " + totalInterest.toFixed(2);
}
function interestBank2(dailyPrincipals, numDays, rate) {
    let numMonths = numDays / 31;
    let monthStart, monthEnd;
    let minprincipal = dailyPrincipals[0];
    let interest;
    let monthlyInterests = [];
    for(let i = 0; i < numMonths; i++) {
        monthStart = 31 * i;
        monthEnd = 31 * (i + 1);
        for(let j = monthStart; j < monthEnd; j++) {  
            if (dailyPrincipals[j] < minprincipal) {
                minprincipal = dailyPrincipals[j];
            } 
        }
        interest = minprincipal * (31/365) * rate;
        monthlyInterests.push(interest);
    }
    let totalInterest = 0;
    for(let i = 0; i < numMonths; i++) {
        totalInterest += monthlyInterests[i];
    }
    document.getElementById("b2").innerHTML = "Bank 2 Interest: Rs. " + totalInterest.toFixed(2);
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
        let dayOfMonth = i.getDate().toString().padStart(2, "0");
        allDaysArray.push((dayOfMonth + "-" + i.toLocaleString("en-US", {month: "short"}) + "-" + i.getFullYear()));
    }
    let numDays = allDaysArray.length;
    let dailyPrincipals = []
    let principal = 0;
    for(let i = 0; i < numDays; i++) {
        let included = false;
        for(let j = 1; j < numRows; j++) {
            if(lineData[j][0].includes(allDaysArray[i])) {
                let credit = parseFloat(lineData[j][1]);
                let debit = parseFloat(lineData[j][2]);
                isNaN(credit) ? credit = 0 : credit = credit;
                isNaN(debit) ? debit = 0 : debit = debit;
                principal = principal + credit - debit;
                dailyPrincipals.push(principal);
                included = true;
                break;
            }
        }
        if(!included) {
            dailyPrincipals.push(dailyPrincipals[i-1]);
        }
    }
    interestBank1(dailyPrincipals, numDays, 0.05);
    interestBank2(dailyPrincipals, numDays, 0.08);
}
fetch("suresh.csv").then(response => response.text()).then(formData);
//fetch("ramesh.csv").then(response => response.text()).then(formData);

// To Do: Interest calculation assumes that each month has 31 days. This part of the code has to be enhanced.
// To Do: Name of customer is currently hard-coded. This should be derived from the file name.