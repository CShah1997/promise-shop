first()
.then(function(result){
    return second(result)
})
.then(function(result){
    console.log(result)
})