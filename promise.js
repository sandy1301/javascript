
let promise = new Promise((resolve,reject ) =>{
    let success = true ;
        if(success) {
            resolve("success");
        }
        else{
            reject("failure");
        }
    })

    promise
      .then((message) => {
        console.log("message", message)
      })
      .catch((error) => {
        console.log("error", error)
      })
    

