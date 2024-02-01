//your JS code here. If required.
function isMultipleOfThree(num){
    return num%3 === 0;
}

function isMultipleOfFive(num){
    return num%5 === 0;
}

function fizzBuss(){
    let output="";
    for(let i=1;i<=20;i++){
        if(isMultipleOfThree(i) && isMultipleOfFive(i)){
            output += "FizzBuzz\n";
        }

        else if(isMultipleOfThree(i)){
            output += "Fizz\n";
        }

        else if(isMultipleOfFive(i)){
            output += "Buzz\n";
        }

        else{
            output += i+"\n";
        }
    }

    return output;

}
alert(fizzBuss());