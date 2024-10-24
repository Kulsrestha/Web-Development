const arr = [1,2.5,6,8];
// for(const num of arr){
//     console.log(num);
// }

const greetings = "Hello World!";

// for(const chars of greetings){
//     console.log(`Each character is ${chars}`);
// }

//MAPS

const map = new Map();
map.set('IN',"India");
map.set('USA',"United Stated Of America");
map.set('FR',"France");

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key ,'->', value);
// }

//Objects are not iterable using this for of loop

const newObj = {
    name : "Ram",
    gender : "male",
    age : 20
}

// for (const key in newObj) {
//    console.log(`${key} is reffered to ${newObj[key]}`);
// }


//looping values in arrays
const newArr = ['a','b','c','d'];

// newArr.forEach(function (items){
//     console.log(items);
// })

// newArr.forEach((items)=>{
//     console.log(items);
// })

// function valTwo(item){
//     console.log(item);
// }

// newArr.forEach(valTwo);

// newArr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//ARRAY OF OBJECTS

const arrObj = [
    {
        name : "javascript",
        short : "js"
    },
    {
        name : "java",
        short : "jav"
    },
    {
        name : "python",
        short : "py"
    }
];

arrObj.forEach((items)=>{
    console.log(items.name);
});