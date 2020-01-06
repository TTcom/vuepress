### promise
promise 
```js
 promise.all 
 let queryInDataForm = new Promise((resolve,reject)=>{
              this.$refs['queryInDataForm'].validate(async (valid) => {
                    if (valid) {
                        return await resolve(true)
                    } else {
                        return await resolve(false)
                    }
              })
           })

           let inqueryInDataForm = new Promise((resolve,reject)=>{
              this.$refs['inqueryInDataForm'].validate(async (valid) => {
                    if (valid) {
                        return await resolve(true)
                    } else {
                        return await resolve(false)
                    }
              })
           })

           let [form1, form2] = await Promise.all([queryInDataForm,inqueryInDataForm])
           

                console.log(form1, form2);

                if (form1 && form2) { 
                     //dosomething
                }else{
                    //dosomething
                }
```