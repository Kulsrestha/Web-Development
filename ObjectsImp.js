const pi = Math.PI; //This value cannot be changed beacuse of the wirteable flase in the output
console.log(pi);
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
//OUTPUT
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
    name:'adrak chai',
    price:20,
    isAvailable:true,
    orderChai : function(){
        console.log('Chai is not available');
    }
};

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// });
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for (let [key,value] of Object.entries(chai)) {

    if(typeof value !== "function"){
        console.log(`${key} --> ${value}`);
    }
}

