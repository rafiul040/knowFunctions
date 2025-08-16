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
// console.log(countVowels("RAFIUL"))




function cashout(money){
    let charge = money * 0.0175
    let fixedCharge = charge.toFixed(2)
    if(money < 0 || typeof money !== 'number'){
        return 'invalid'
    }
    return fixedCharge;
}


console.log(cashout("100"))






function validContact(contact){
    if(contact.length == 11 && contact.startsWith("01") == true && contact.includes(" ") != true)
    // if(contact.length !== 11){
    //     return false
    // }
    // if(contact.startsWith("01") == false){
    //     return false;
    // }
    // if(contact.includes(" ") === true){
    //     return false
    // }
    return true
}
console.log(validContact('01903168428'));



function person(male, female){
    if(typeof male !== "object" || typeof female !== "object"){
        return 'invalid'
    }
    if(male.gender === female.gender){
        return false;
    }
    if(Math.abs(male.age - female.age) > 7){
        return false
    }

    return true
}

// node object.js

console.log(person({name: "rafiul", age: 21}, {name: "mariya", age: 21}))





// node object.js
