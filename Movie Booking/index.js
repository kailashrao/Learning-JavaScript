// Populate HTML form selection with Dates. n = number of dates to add
function populateDateSelector(n) {
    const date_obj = new Date(); // Used to get dates, default starts with current Date (today)

    let option = ""; // HTML string (with tags)

    for(let i = 0; i < n; i++){
        // .toLocaleDateString() returns date as "M/D/YYYY" in US111
        option += "<option>" + date_obj.toLocaleDateString() + "</option>"; // Concatonate HTML 

        date_obj.setDate(date_obj.getDate()+1); // Iterate date to next day
    }

    document.getElementById("date-selector").innerHTML = option; // Post to HTML

}

populateDateSelector(3); // Call function