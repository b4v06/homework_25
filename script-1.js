function countVowels(countString) {
    let count = 0;
    for (let char of countString) {
        if (char == "A" || char == "a" || char == "E" || char == "e" || char == "I" || char == "i" || char == "O" || char == "o" || char == "U" || char == "u") {
            count++;
        }
    }
    alert("In message that you've written there are " + count + " vowels");
}
countVowels(prompt("I will count vowels for you, please enter your message below:"));