function perm3(input3) {
    let word2 = "";
    let words3 = [];

    word2 = input3[0] + input3[1] + input3[2];
    words3.push(word2);
    word2 = input3[0] + input3[2] + input3[1];
    words3.push(word2);
    word2 = input3[1] + input3[0] + input3[2];
    words3.push(word2);
    word2 = input3[1] + input3[2] + input3[0];
    words3.push(word2);
    word2 = input3[2] + input3[0] + input3[1];
    words3.push(word2);
    word2 = input3[2] + input3[1] + input3[0];
    words3.push(word2);

    return words3;
}

function perm4(input4) {
    function scramble4(lead1, string1) {

        let combo3 = perm3(string1);
        let word3 = "";
        let words4 = [];
    
        for (let i = 0; i < 6; i++) {
            word3 = lead1 + combo3[i];
            words4.push(word3);
        }
    
        return words4;
    }
    let leadingLetter = ""; 
    let word2 = "";
    let words3 = [];

    leadingLetter = word1[0];
    word2 = word1[1] + word1[2] + word1[3];
    words3.push(scramble4(leadingLetter, word2));

    leadingLetter = word1[1];
    word2 = word1[0] + word1[2] + word1[3];
    words3.push(scramble4(leadingLetter, word2));

    leadingLetter = word1[2];
    word2 = word1[1] + word1[0] + word1[3];
    words3.push(scramble4(leadingLetter, word2));

    leadingLetter = word1[3];
    word2 = word1[1] + word1[0] + word1[2];
    words3.push(scramble4(leadingLetter, word2));

    return words3;
}

let word1 = "fast";
console.log(perm4(word1));

// To Do 1: perm3 and perm4 are both hard-coded but can be manipulated with for loops for a more efficient program
// To Do 2: perm4 currently returns 2D array, suppose there is a perm5, it will require perm4 to return a 1D array (to manage complexity)
