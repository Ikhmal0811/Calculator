// 1. generate random number

let randomNum = Math.floor((Math.random() * 101) );
// document.getElementById("output").innerHTML = randomNum;

//this is global counter
let counter =0;

document.getElementById("submit_guess").addEventListener("click",function() {
    compareValue(randomNum);
})



//manage to put the input into the output
function guess() {
    let input_guess = Number(document.getElementById("my_guess").value);
    return input_guess; 

}

// 2. create a function to compare the value with randomNum

function compareValue(randomNum){
    let newGuess = guess();
    counter++;  
    //note: think of this yourself, dont use chatgpt
    
        if(counter != 0){
            if(newGuess>randomNum){
                document.getElementById("p_guesess").innerHTML = "Previouse guess: " + newGuess[counter];
                document.getElementById("rightwrong").innerHTML = "Wrong too high";

            }else if(newGuess<randomNum){
                document.getElementById("p_guesess").innerHTML = newGuess;
                document.getElementById("rightwrong").innerHTML = "Wrong too low";
    
            }else{
                document.getElementById("p_guesess").innerHTML = newGuess;
                document.getElementById("rightwrong").innerHTML = "correct";
            }
        }      
        
    
    document.getElementById("p_guesses").innerHTML = counter;
}









// -----------------> for example purpose
// function getInputValue() {
//     const inputValue = document.getElementById('myInput').value;
//     document.getElementById('output').innerText = `Input Value: ${inputValue}`;
// }