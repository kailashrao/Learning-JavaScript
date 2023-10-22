function getBankId(eventObj) {
    sessionStorage.setItem("bank", eventObj.target.id);
}

document.getElementById("b1").addEventListener("click", getBankId);
document.getElementById("b2").addEventListener("click", getBankId);