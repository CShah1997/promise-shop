function all(promise1,promise2)
{
    return new Promise(function(resolve,reject){
        var counter = 0;
        var arr = []
        promise1.then(function(result){
            arr.push(result)
            counter++;
            if(counter==2)
            {
                resolve(arr)
            }
        })

        promise2.then(function(result){
            arr.push(result);
            counter++;
            if(counter==2)
            {
                resolve(arr)
            }
        })

    })
}

all(getPromise1(), getPromise2())
  .then(console.log);
