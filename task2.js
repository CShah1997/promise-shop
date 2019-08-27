require('es6-promise');
var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("FULFILLED!")
    },300)
})
promise.then(function(result){
    console.log(result)
}) 


