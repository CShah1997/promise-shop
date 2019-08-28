function alwaysThrows()
{
    throw new Error("OH NOES")
}

function iterate(value)
{
    console.log(value)
    return value + 1;
}

var promise = Promise.resolve(1)
promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(function(error){
    console.log(error.message)
})