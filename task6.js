var promise = Promise.reject(new Error('SECRET VALUE'));
promise.catch(function(error){
    console.log(error.message)
})