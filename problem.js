const disha = 35;
const salman = 50;

if(disha > salman){
    // console.log("disha will get the strawberry")
}
else{
    // console.log("Salman the will get the strawberry")
}


function getMax(n1, n2){
    if(n1 > n2){
        return n1
    }
    else{
        return n2
    }
}
const max = getMax(100, 99);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max, max2)
// console.log("max of two is", ultimateMax)



const kim = 56;
const tom = 75;
const rrt = 655



function maxs(max1, max2, max3){
    if(max1 > max2 && max1 > max3){
        return "its max1 " + max1
    }
    else if(max2 > max1 && max2 > max3){
        return "Its max2" + max2
    }
    else{
        return "Its max3" + max3
}
}

const mad = maxs(320, 2225, 298)
console.log(mad)