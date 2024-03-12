function moveOver(elementOne, elementTwo, elementThree, elementFour, startOrEnd) {
    const mainArray = [elementOne, elementTwo, elementThree, elementFour];
    if (startOrEnd == "start") {
        mainArray.shift();
        mainArray.splice(mainArray.length, 0, elementOne);
        alert("Your new array is: " + mainArray);
    } else if (startOrEnd == "end") {
        mainArray.pop();
        mainArray.unshift(elementFour);
        alert("Your new array is: " + mainArray);
    } else {
        alert("I think you've made a mistake. Please write 'start' or 'end' next time.")
    }
}
moveOver(prompt("Please, enter the first element"), prompt("Please, enter the second element"), prompt("Please, enter the third element"), prompt("Please, enter the fourth element"), prompt("Please, write either 'start' or 'end'"))