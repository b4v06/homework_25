function longestWord(mainArray) {
    mainArray = mainArray.split(" ");
    let max = 0;
    let min = 100;
    let stop = false;
    for (let i = 0; i < mainArray.length; i++) {
        if (mainArray[i].length > max) {
            max = mainArray[i].length;
        }
    }
    for (let i = 0; i < mainArray.length; i++) {
        if (mainArray[i].length < min) {
            min = mainArray[i].length;
        }
    }
    while (stop == false) {
        for (let i = 0; i < mainArray.length; i++) {
            if (mainArray[i].length == max) {
                alert("The biggest word is " + mainArray[i] + " and it is " + max + " letters long");
                stop = true;
            }
        }
    }
    stop = false;
    while (stop == false) {
        for (let i = 0; i < mainArray.length; i++) {
            if (mainArray[i].length == min) {
                alert("The smallest word is " + mainArray[i] + " and it is " + min + " letters long");
                stop = true;
            }
        }
    }
    console.log(max);
    console.log(min);
}
longestWord(prompt("Please, enter the sentence below and I will (try to) find the longest word"));