// I Need To Know What is Function 

function printMe(parameter, arguments){
    return "..." + parameter + arguments
}
const result = "rafiul ";
const result1 = "Islam";
console.log(printMe(result, result1))






function calculator(a=0, b=0){
    return (2 * (a + b))
}
console.log(calculator(5, 5))





function restParameter(a1, ...b1){
    console.log(a1)
    console.log(b1)
}

restParameter(1, 2, 3, 4, 5, 6, 7)



const arrowFunction = (a, b) => {
    console.log(a + b)
}
arrowFunction("Rafiul ", "Islam")




const simpleArrowFunction = a => {
    console.log(a * 5)
}
simpleArrowFunction(5)



const miniFunctionWithSingleParameter = a => a * 2;
console.log(miniFunctionWithSingleParameter(5)) 






let name = "Rafiul";


function attachMent(arguments){
     return name + arguments
}
console.log(attachMent(" Islam"))





function loopTo10(){
    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
}
loopTo10()




function odd_even(num){
    if(num % 2 === 0){
        console.log("Even Number")
    }
    else{
        console.log("Odd Number")
    }
    return num
}

odd_even(50)
