function square(input, inputs){
    let squareNum = input * inputs;
    return squareNum
}




function sum(input1, input2, input3){
    const result = input1 * input2
    return result
}

let a = 2;
let b = 3


const total = square(a, b) + sum(a, b)
// console.log(total)  


function sumofarray(arr){
    let sum = 0;
    if(Array.isArray(arr) === false){
        return "invalid"
    }
    for(let num of arr){
        if(typeof num !== 'number'){
            return "invalid"
        }
        sum += num
    }
    return sum
}






let result = sumofarray(1)

// console.log(result)







function countVowels(str){
    if(typeof str !== 'string'){
        return 'inavlid'
    }
    let count = 0;
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === "o" || str[i] === "u"){
            count++
        }
    }
    return count
}
console.log(countVowels("RAFIUL"))









// node object.js
