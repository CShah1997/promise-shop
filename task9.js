function parsePromised(file)
{
    return new Promise(function(resolve,reject){
        try {
            var data = JSON.parse(file)
            resolve(data)
        } catch (error) {
            reject(error.message)
        }
    })
}

  parsePromised(process.argv[2])
  .then(function(result){
      console.log(result)
  }, function(error){
      console.log(error)
  });
