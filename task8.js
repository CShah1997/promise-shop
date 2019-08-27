function attachTitle(firstargument)
{
    return ('DR. '+firstargument)
}

var promise = new Promise(function(resolve,reject){
    resolve("MANHATTAN")
})

promise.then(attachTitle).then(console.log)