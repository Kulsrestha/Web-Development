function userName(username){
    this.username=username;
    console.log('called');
}

function createUser(username,email,password){
    // userName(username);   this will not work as only the referenace is passed and the value will be flusded after the fucntion execution
    userName.call(this,username)    //this call method will keep the params of the userName fucntion even after it is flushded out
    this.email=email;
    this.password=password;
}

const calling = new createUser("kulsrestha","test@gmail.com","007");
console.log(calling);