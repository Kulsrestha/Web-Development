const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 1 is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is complete");
        resolve({ name: 'Kulsrestha', email: 'kjoshi@gmail.com' });
    }, 1000);
});

promiseTwo.then(function (user) {
    console.log(user);
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        // let error = false;
        if (!error) {
            console.log("Async task 3 is complete");
            resolve({ name: 'joshi', email: 'test@gmail.com' });
        }
        else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

//chanining
promiseThree.then(function (user) {
    console.log(user);
    return user.email;
}).then(function (email) {
    console.log(email);
}).catch(function (error) {
    console.log(error);
}).finally(function(){
    console.log('The promise is either resolved or rejected');
});


//Another way of doing it using async await
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            console.log("Async task 4 is complete");
            resolve({ name: 'js', email: 'js@gmail.com' });
        }
        else {
            reject('Error: js went wrong');
        }
    }, 1000);
});

async function conumePromiseFour() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

conumePromiseFour();

// async function githubData() {
//     try {
//         const anotherResponse = await fetch('https://api.github.com/users/kulsrestha');
//         const gitData = await anotherResponse.json();
//         console.log(gitData);
//     } catch (error) {
//         console.log("error :",error);
//     }
// }

// githubData();

//same using then and catch
fetch('https://api.github.com/users/kulsrestha').
then(function(resolve){
    return resolve.json();
}).
then(function(data){
    console.log(data);
}).
catch(function(error){
    console.log(error);
})