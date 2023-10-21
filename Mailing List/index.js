// const file = require('fs'); // Node.js module (not vanilla JS)

let emailInput = document.getElementById("emailForm");

function storeEmail(eventObj) {
    eventObj.preventDefault();

    let email = document.getElementById("email-input");

    

    
    if(email.value == "") {
        document.getElementById("msg").innerHTML = "Please enter valid email!";
    } else {
        console.log(email.value);
        document.getElementById("msg").innerHTML = "Success!";

        /* Requires node.js "fs" (file system) module 
        file.writeFile('emails.txt', email.value, (error) => {
            if(error)
                console.log("Error");
        });
        */

    }
    
}

emailInput.addEventListener("submit", storeEmail);