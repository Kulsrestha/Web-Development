const mySym = Symbol();

let myObj = {
    name:"Kulsrestha",
    age: 22,
    [mySym]: "$",
    place : "kathgodam",
    isLoggedIn : false
}

// console.log(myObj.name);
// console.log(myObj.isLoggedIn);
// console.log(myObj.place);
// console.log(myObj[mySym]);

// myObj.email = "test@gmail.com";
// console.log(myObj.email);
// Object.freeze(myObj);
// myObj.age = 19;
// console.log(myObj);

// myObj.greet = function() {
//     console.log(`Welcome  ${this.name}`);
// }

// console.log(myObj.greet); //the reference of function is dipalyed and the function is not executed
// console.log(myObj.greet());


/******************************************/

const user = {
    id : 112,
    fullName : {
        userFullName : {
            firstName : "Hrithik",
            lastName : "Roshan"
        }
    }
}

// console.log(user);
// console.log("*******************");
// console.log(user.fullName);
// console.log("*******************");
// console.log(user.fullName.userFullName);
// console.log("*******************");
// console.log(user.fullName.userFullName.firstName);



//Combining Objects

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};

// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2};  //using spread operator
// console.log(obj3);

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));

// console.log(myObj.hasOwnProperty('place'));
// console.log(myObj.hasOwnProperty('city'));


//Object Destructuring
const newObj = {
    name : "Ram",
    gender : "male",
    age : 20
}

const {gender} = newObj;
console.log(gender);

const {gender : gen} = newObj;
console.log(gen);



