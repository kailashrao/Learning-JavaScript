let data1 = fetch("hello.txt");
let data2 = data1.then(response => response.text());

function getText(str1) {
    let info1 = str1.split("\n");
    let data3 = info1[0];
    let data4 = info1[1];
    document.getElementById("text1").innerHTML = data3;
    document.getElementById("text2").innerHTML = data4;
}

data2.then(getText);