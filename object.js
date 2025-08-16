




const student = {
    name: "Sakib Khan",
    id: 121,
    address: "Movie",
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    act: function(){
        console.log("Here I am")
    },
    car: {
        brand: "Tesla",
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: "tesla",
            ceo: "Elon Mask",
            country: "USA"
        }
    }
}


console.log(student.act)
student.act()





const products = [
    {name: "Phone", price: 12000},
    {name: "Laptop", price: 32000}
]


function products(num1, num2) {
    console.log(num1, num2)
    console.log(arguments)
}

products(12, 13, 4, 5, 89)




const numbers = [45, 6, 5, 23, 98];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}


for(const num of numbers){
    console.log(num)
}




const products = [
    {id: 1, name: "Walton Phone", Price: 19000},
    {id: 2, name: "IPhone", Price: 190000},
    {id: 3, name: "Xiaomi", Price: 32000},
    {id: 4, name: "Oneplus Phone", Price: 39000},
    {id: 5, name: "Vivo Phone", Price: 17000},
    {id: 6, name: "Poco phone", Price: 29000},
    {id: 7, name: "Samsung Phone", Price: 120000},
    {id: 8, name: "Tecno phone", Price: 21000},
    {id: 9, name: "Symphony", Price: 9000}
];

for(const product of products){
    console.log(product)
}


function matchedProducts(products, search){
    const matched = []
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}



const res = matchedProducts(products, "Phone");
console.log(res)


