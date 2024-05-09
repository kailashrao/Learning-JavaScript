function getCharLeft(limit, id) {
    const input = document.getElementById("text-box" + id).value;
    console.log(input);
    const currentSize = input.length;
    let charLeft = (currentSize < limit) ? limit - currentSize : 0;
    // console.log(charLeft);
    document.getElementById("message" + id).innerHTML = "Characters Left: " + charLeft;
}

