for (let i =0; i < 10; i++){
    console.log(i)
}

const users = ["max" , "manu" , "anna"]

for (const user of users){
    console.log(user)
}

const loggedInUser ={
    name: "max",
    age: 30,
    isAdmin: true
};

for(const key in loggedInUser){
    console.log(key + ": " + loggedInUser[key])
}
let isFinished = false;

while (!isFinished){
    isFinished = confirm("Are you finished?")
};