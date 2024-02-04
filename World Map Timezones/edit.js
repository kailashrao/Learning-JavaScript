let menu = document.getElementById("menu");
menu.addEventListener("click", showOptions);

function showOptions(eventObj) {
    eventObj.preventDefault();
    document.getElementById("edit").style.display = "flex";
    document.getElementById("menu").style.display = "none";
    
}