console.log("start");
console.log("Middle");
console.log("End");
 //asynchronous
 console.log("start");

 setTimeout(() => {
    console.log("This runs later");
 }, 2000)
 console.log("End");