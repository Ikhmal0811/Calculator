// 1. generate random number

let randomNum = Math.floor((Math.random() * 100) + 1);
// document.getElementById("output").innerHTML = randomNum;

document.getElementById("submit_guess").addEventListener("click",guess)  



//manage to put the input into the output
function guess() {
    let input_guess = Number(document.getElementById("my_guess").value);
    return input_guess; 

}

// 2. create a function to compare the value with randomNum

function compareValue(randomNum){
    let newGuess = guess();
    
}









// -----------------> for example purpose
// function getInputValue() {
//     const inputValue = document.getElementById('myInput').value;
//     document.getElementById('output').innerText = `Input Value: ${inputValue}`;
// }