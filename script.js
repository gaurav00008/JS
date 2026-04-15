// //Inheritance Property
// /*class Person {
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work(){
//         console.log("Do nothing");
//     }
// }

// class Engineer extends Person {
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("Treat patient");
//     }
// }

// let shradhaObj = new Engineer(); */



// //Lets Practice
// //[QN1]

//  let DATA = "secret information"
// class User{
//     constructor(name, email)
//     {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ",DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email){
//         super(name, email)
//     }
//     editData() {
//         DATA = "some new vaslue";
//     }
// }

// let student1 = new User("shardha","shardha@email.com");
//  let student2 = new User("aman", "aman@email.com");

//  let admin1  =new Admin("admin", "admin@email.com");




//Callback, Promises & Async-await:

//SYNCHRONOUS PROGRAMMING
// console.log("one");
// console.log("two");
// console.log("three"); //The program will be executed in a sequential manner 



//ASYNCHRONOUS PROGRAMMING
// console.log("one");
// const Timeout()
// setTimeout(() => {
//     console.log("Hello");
// }, 6000);  //Timeout;

// console.log("three");
// console.log("four"); 



//CALLBACK HELL
//getData(1, () => {
//console.log("getting the data 2 ...");
// /getData(2, () =>{ 
   // console.log("Getting data3....");
    /*getData(3, () =>{
        console.log("Getting data 4...");
        getData(4);
    })
})
})*/




//PROMISE







///let promise = new Promise((reslove, reject) =>{
   // console.log("I am a promise");
   //reject("some error ocuured");
//});
 

// const getPromise =() => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//     });
// };


// function asyncFunc1()
//  {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() =>{
//             console.log("data1");
//             resolve("sucess");
//         }, 4000);
//     }) ;
// }


// function asyncFunc2()
//  {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("sucess");
//         }, 4000);
//     }) ;
// }

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

// let promise =  getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled");
// });



// function getData(dataId, getNextData)
// {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("sucess");
//             if (getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }




// function getData(dataId){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("sucess");
//         },2000);
//     });
// }


// //PROMISE CHAIN - first call data1 if it is sucess then call data2, if it is also sucess then call data3 and so on...
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
//     .then((res) =>{
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     });


// function getData(dataId) {
// return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         console.log("data", dataId);
//         resolve("sucess");
//     },2000);
// });
// }


//ASYNC-AWAIT
// async function getAllData() {
//     await getData(1);
//     console.log("Getting data1...")
//     await getData(2);
//     console.log("Getting data2...")
//     await getData(3);
//     console.log("Getting data3...")
//     await getData(4);
//     console.log("Getting data4...")
//     await getData(5);
//     console.log("Getting data5...")
//     await getData(6);
//     console.log("Getting data6...")
// }
// const URL = "https://official-joke-api.appspot.com/random_joke";
// const jokePara = doccument.querySelector("#joke");

// const getJokes = async() => {
//     console.log("getting data......");




//     let response = await fetch(URL);
//     console.log(response);  //JSON format
//     let data = await response.json();
//     jokePara.innerText = data[0].text;
// };





/*ASYNC AWAIT EXAMPLES */

function delay(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done!"), 1000);
    });
}

async function run() {
    const result = await delay();
    console.log(result);
}

run();