var promise = new Promise(function(resolve,reject){
    resolve("I FIRED")
    reject(new Error("I DID NOT FIRE"))
})

function onRejected(error)
{
    console.log(error.message)
}

promise.then(function(result){
    console.log(result)
},function(error){
    onRejected(error)
})