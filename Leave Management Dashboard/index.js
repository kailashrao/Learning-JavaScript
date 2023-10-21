// Included in index.html
// Use event listeners to find country clicked on

function getId(eventObj) {
    sessionStorage.setItem("country", eventObj.target.id);
}

document.getElementById("us").addEventListener("click", getId);
document.getElementById("in").addEventListener("click", getId);
document.getElementById("uae").addEventListener("click", getId);
document.getElementById("uk").addEventListener("click", getId);