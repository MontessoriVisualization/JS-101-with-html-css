const firstpromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("first promise")
            resolve("first promise resolved")
    }, 2000)

})
firstpromise.then(function(result) {
    console.log(result);
})
const secondpromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("second promise")
            resolve("second promise resolved")
    }, 1000)

})
secondpromise.then(function(result) {
    console.log(result);
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("third promise")
            resolve("third promise resolved")
    }, 1500)}).then(()=>console.log("third promise resolved"))

new Promise(function(resolve, reject) {
const signedIn = false;
setTimeout(() => {
    if(signedIn){
    resolve("user is signed in")
}else{
    reject("Error: user is not signed in")
} }, 10)
  }).then((result)=>console.log(result)).catch((error)=>console.log(error))



  const fithpromise = new Promise(function(resolve, reject) {
    const signedIn = true;
       if(signedIn){
        resolve({name: "saugat", age: 25, email: "saugat@example.com"})
        
    }else{
        reject("Error: user five is not signed in")
    } 
      }).then(function(result){return result.name}).then((boy)=>console.log(boy)).catch((error)=>console.log(error)).finally(()=>console.log("Promise is settled"))


     //fetch api
     fetch("https://api.github.com/users/MontessoriVisualization").then((response)=>console.log(response)).catch((error)=>console.log(error))