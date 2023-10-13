const file = require('fs'); // Requires Node.js module

let emailInput = document.getElementById("emailForm");

function storeEmail(eventObj) {
    eventObj.preventDefault();

    let email = document.getElementById("email-input");

    console.log(email.value);

    if(email.value == "") {
        document.getElementById("error").innerHTML = "Please enter valid email.";
    } else {
        file.writeFile('emails.txt', email.value, (error) => {
            if(error)
                console.log("Error");
        });
    }
}

emailInput.addEventListener("submit", storeEmail);