var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error("REJECTED!"))
    },300)
})

function onReject(error)
{
    console.log(error.message)
}

promise.then(function(result){
    console.log(result)
},function(error){
    onReject(error);
})