const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000]


function getMinWithForOf(numbers){
    let min = numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num
        }
    }
    return min
}

const cheapest = getMinWithForOf(prices)
console.log('Chepest One is', cheapest)








function getMinWithForLoop(numbers){
    let min = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i]
        }
    }
    return min
}


const cheap = getMinWithForLoop(prices)
console.log('Chepest One is', cheap)




const mobiles = [
    {name: "Samsung", price: 17000, camera: "12MP", Color: "Black"},
    {name: "Infinix", price: 24000, camera: "56MP", Color: "Black"},
    {name: "Xiaomi", price: 3000, camera: "45MP", Color: "Black"},
    {name: "Apple", price: 120000, camera: "120MP", Color: "Glossy"},
    {name: "Htc", price: 25000, camera: "102MP", Color: "Blue"},
    {name: "Vivo", price: 12000, camera: "12MP", Color: "Purple"}
]

function getChepestPhone(phones){
    let findMobile = phones[0]
    for(const phone of phones){
        if(phone.price < findMobile.price){
            findMobile = phone
        }
    }
    return findMobile
}

const hone = getChepestPhone(mobiles)
console.log(hone)







const products = [
    {name: "Shampoo", price: 300},
    {name: "Chironi", price: 100},
    {name: "Shirt", price: 700},
    {name: "Pant", price: 1200}
]

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum += product.price
    }
    return sum
    console.log(sum)
}

const total = getShoppingTotal(products)
console.log("Total ", total)







const products1 = [
    {name: "Shampoo", price: 300, quantity: 2},
    {name: "Chironi", price: 100, quantity: 3},
    {name: "Shirt", price: 700, quantity: 5},
    {name: "Pant", price: 1200, quantity: 1}
]

function cartTotals(products){
    let total = 0
    for(const product of products){
        const thisItemCost = product.price * product.quantity
        total += thisItemCost;
    }
    return total
}

const totals = cartTotals(products1)
console.log("Total ", totals)





const products1 = [
    {name: "Shampoo", price: 300, quantity: 2},
    {name: "Chironi", price: 100, quantity: 3},
    {name: "Shirt", price: 700, quantity: 1},
    {name: "Pant", price: 1200, quantity: 1}
]

function cartTotals(products){
    let total = 0
    for(const product of products){
        const thisItemCost = product.price * product.quantity
        total += thisItemCost;
        if(total >= 5000){
            const discount = total / 100 * 10
            console.log(total - discount)
        }
    }
    return total
}

const totals = cartTotals(products1)
console.log("Total ", totals)





function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100
        return total
    }
    else if(quantity <= 200){
        const total = quantity * 90
        return total
    }
    else{
        const total = quantity * 70
        return total
    }
}




console.log(discountedPrice(120))





function layeredDiscountPrice(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100total = 100 * second100Price;
        const remainingQuantity = quantity - 100;
        const remainigTotal = remainingQuantity * second100Price;
        const total = first100total + remainigTotal;
        return total
    }
    else{
        const first100total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainigTotal = remainingQuantity * above200Price;
        const total = first100total + second100Total + remainigTotal;
        console.log(total)
        return total 
    }
}

console.log(layeredDiscountPrice(600))