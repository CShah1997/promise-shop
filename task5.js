var promise = new Promise(function(resolve,reject){
    resolve("PROMISE VALUE")
})
.then(function(result){
    console.log(result)
})
console.log("MAIN PROGRAM")