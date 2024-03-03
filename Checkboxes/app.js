container = document.getElementById("seat-container");

function generateRows(numRows, numSeats) {
    let row1 = "";
    for(let j = 1; j<(numRows+1); j++ ) {

        row1 += "<div id='row" + j + "'>";
        row1 += "<label value='" + j + "'>" + j + "</label>";
        for(let i = 1; i<(numSeats+1) ; i++) {
            row1+="<input id='" + i + "' type='checkbox'>";
        }
        row1 += "<label value='" + j + "'>" + j + "</label>";
        row1 += "</div>";

    }
    container.innerHTML = row1;
}

generateRows(10, 20);


