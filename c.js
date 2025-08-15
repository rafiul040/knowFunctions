function feettoInch(foot){
    const feet = foot / 12
    const conver = (feet.toFixed())
    return conver
}
// console.log(feettoInch(63))



function inchTo(inch){
    const feet = inch / 12
    const numbe = parseInt(feet)
    const inchre = inch % 12;
    const result = numbe + "ft" + inchre + "Inch";
    return result
}



const rafiHeight = inchTo(75)
// console.log(rafiHeight)




function mileKilometer(mile){
    const kilo = mile * 1.06934
    return kilo
}

// console.log(mileKilometer(127))



function kilometersToMiles(kilo){
    const mile = kilo * 0.621371
    const floa = mile.toFixed(2)
    return floa
}

// console.log(kilometersToMiles(120))




function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true
    }
    else if(year % 100 === 0 && 400 === 0){
        return true
    }
    else{
        return false
    }
}
// console.log(isLeapYear(2024))



function oddAverage(numbers){
    let odds = []
    for(const numbe of numbers){
        if(numbe % 2 === 1){
            odds.push(numbe)
            //console.log(numbe)
        }
    }
    let sum = 0;
    for(const numbe of odds){
        sum += numbe
    }
    // console.log(odds)
    const length = odds.length
    // console.log(sum, length)
    const avg = sum / length
    return avg
}



// const numbers = [42, 13, 58, 65, 81,96,7,105];
// const avg = oddAverage(numbers)
// console.log('average of the odd', avg)



function evenAverage(n1){
    let evenNumbers = []
    let sum = 0
    for(const even of n1){
        if(even % 2 === 0){
            evenNumbers.push(even)
        }
    }
    for(const evenSum of evenNumbers){
        sum += evenSum
    }
    let len = evenNumbers.length
    const avg = sum / len
    const flo = avg.toFixed(2)
    // console.log(evenNumbers)
    // console.log(len)


    return flo
}


const total = [42, 13, 58, 65, 81,96,7,105]
const evenA = evenAverage(total)
// console.log("Even Average Number is ",evenA)





const biriyaniKhor = ["Abul", "Abul", "Babul", "Cabul", "Babul", "Dadul", "Kabul", 'Cabul']
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];



function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique
}


const uniqueArray = noDuplicate(biriyaniKhor)
// console.log(uniqueArray)



function noduplicate(num){
    const uniqueNumber = []
    for(const item of num){
        if(uniqueNumber.includes(item) === false){
            uniqueNumber.push(item)
        }
    }
    return uniqueNumber
}
const uniqueNum = noduplicate(numbers)
// console.log(uniqueNum)




// const min = Math.min
// for (let a = 0; a < array.length; a++) {
//     const element = array[a];
    
// }



// const today = new Date();
// const Date = new Date('2062-10-19')
// console.log(date)
// const specificDate = new Date
let a = 5;
let b = 7;

const temp = a
a = b;
console.log(b)



let x = 5;
let y = 7;


[x, y] = [y, x];
console.log(x, y)