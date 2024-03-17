container = document.getElementById("seat-container");


let alphabet1 = [];
for(let i = 65; i<(65+26); i++){
    alphabet1.push(String.fromCharCode(i));
}

function generateRowLetter(count1) {
    for(let j = 0; j < (Math.ceil(count1/26) - 1); j++) {
        for(let i = 0; i<26; i++){
            alphabet1.push(alphabet1[j] + alphabet1[i]);
        }
    }
}




function generateRows(numRows, numSeats) {
    numRows = Math.min(numRows, (26*(26 + 1)));
    generateRowLetter(numRows);
    console.log(alphabet1);
    let row1 = "<tr><td></td>";
    for(let z = 1; z<(numSeats+1); z++){
        row1 += "<th>" + z + "</th>";
    }
    for(let j = 0; j<(numRows); j++) {

        row1 += "<tr>";
        row1 += "<th>" + alphabet1[j] + "</th>";
        for(let i = 1; i<(numSeats+1) ; i++) {
            row1+="<td><input id='" + alphabet1[j] + '.' +  i + "' type='checkbox'></td>";
        }
        row1 += "<th>" + alphabet1[j] + "</th>";
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
