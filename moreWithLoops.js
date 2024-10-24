const arr = [1, 2, 3.4, 5];

const arrValues = arr.forEach((nums) => {
    //this will no return values 'for each'
    return nums < 2;
});

// console.log(arrValues);

const arrValues2 = arr.filter((num) => {
    return num > 2;
})

// console.log(arrValues2);


const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        industry: "Hollywood"
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        industry: "Hollywood"
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Adventure",
        rating: 8.6,
        industry: "Hollywood"
    },
    {
        title: "Parasite",
        director: "Bong Joon Ho",
        year: 2019,
        genre: "Thriller",
        rating: 8.6,
        industry: "Hollywood"
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        industry: "Hollywood"
    },
    {
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        year: 2009,
        genre: "Comedy-Drama",
        rating: 8.4,
        industry: "Bollywood"
    },
    {
        title: "Dangal",
        director: "Nitesh Tiwari",
        year: 2016,
        genre: "Biography, Drama, Sport",
        rating: 8.4,
        industry: "Bollywood"
    },
    {
        title: "Lagaan",
        director: "Ashutosh Gowariker",
        year: 2001,
        genre: "Drama, Sport",
        rating: 8.1,
        industry: "Bollywood"
    },
    {
        title: "Sholay",
        director: "Ramesh Sippy",
        year: 1975,
        genre: "Action, Adventure, Drama",
        rating: 8.1,
        industry: "Bollywood"
    },
    {
        title: "Zindagi Na Milegi Dobara",
        director: "Zoya Akhtar",
        year: 2011,
        genre: "Drama, Romance",
        rating: 8.2,
        industry: "Bollywood"
    }
];

const movieVal = movies.filter((mv) => {
    return mv.rating > 8.9;
})
// console.log(movieVal);


const myNums = [1, 2.3, 4, 5, 6, 7, 65, 0];

// const newNums = myNums.map((num)=>{return num*10});
// console.log(newNums);


//this is chaining
const newNums2 = myNums.map((num) => { return num * 5 }).map((num) => { return num - 2 }).filter((num) => { return num > 15 });
// console.log(newNums2);

//Reduce
const red = [1, 2, 3];

const total = red.reduce(function (acc, currVal) {
    // console.log(`Acc: ${acc} and currVal:${currVal}`);
    return acc + currVal;
}, 0);

// console.log(total);

const cartValue = [
    {
        name:"Cap",
        price: 399
    },
    {
        name:"Bag",
        price: 799
    },
    {
        name:"Shoes",
        price: 1399
    }
];

const totalCartValue = cartValue.reduce((acc,item)=> acc+ item.price,0);
console.log(totalCartValue);


