function addCartPrice(...sums){ //rest operator
    return sums;
}

// console.log(addCartPrice(200,300,200,500));


const obj = {
    name : "Hero",
    price : 600
}

function getDetails (someObj){
    console.log(`Hello ${someObj.name} , you cart value is ${someObj.price}`)
}

getDetails(obj);