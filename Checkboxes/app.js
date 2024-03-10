container = document.getElementById("seat-container");

function generateRows(numRows, numSeats) {
    let row1 = "<tr><td></td>";
    for(let z = 1; z<(numSeats+1); z++){
        row1 += "<th>" + z + "</th>";
    }
    for(let j = 1; j<(numRows+1); j++) {

        row1 += "<tr>";
        row1 += "<th>" + j + "</th>";
        for(let i = 1; i<(numSeats+1) ; i++) {
            row1+="<td><input id='" + j + '.' +  i + "' type='checkbox'></td>";
        }
        row1 += "<th>" + j + "</th>";
        row1 += "</tr>";

    }
    container.innerHTML = row1;
}



function customDimensions(event) {
    event.preventDefault();
    let numRows = Number(document.getElementById("numRows").value);
    let numSeats = Number(document.getElementById("numSeats").value);

    generateRows(numRows, numSeats);

}
document.getElementById("customForm").addEventListener("submit", customDimensions);
