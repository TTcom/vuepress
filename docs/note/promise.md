### aboutpromise

```js 
function Promise(excutor) {

    this.status = 'pendding'
    this.value = null
    this.callbacks = []
    this.resolve = function (value) {
        if (this.status === 'pendding') {
            this.status = 'fulfilled'
            this.value = value
            setTimeout(()=>{
                this.callbacks.map(callback=>{
                    callback.onFulfilled(this.value)
                })
            })
        }

    }
    this.reject = function (value) {
        if (this.status === 'pendding') {
            this.status = 'rejeced'
            this.value = value
            setTimeout(()=>{
                this.callbacks.map(callback=>{
                    callback.onRejected(this.value)
                })
            })
        }
    }
    
    this.then = function(onFulfilled, onRejected){

        if(typeof onFulfilled != 'function'){
            onFulfilled = ()=> this.value
        }
        if(typeof onRejected != 'function'){
            onRejected = ()=> this.value
        }
        return new Promise((resolve,reject)=>{
            if (this.status === 'pendding') {
                this.callbacks.push({
                    onFulfilled:(value)=>{
                        try {
                           let result = onFulfilled(value)
                           resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onRejected:(value)=>{
                        try {
                            let result = onRejected(value)
                            resolve(result)
                        } catch (error) {
                           console.log('error')
                           reject(error)
                        }
                    }
                   })
           }
           if (this.status === 'fulfilled') {
               setTimeout(()=>{
                   console.log('aaaaaaaaaaaaa')
                   try{
                    let result = onFulfilled(this.value)
                    if(result instanceof Promise){
                        result.then(res=>{
                            resolve(res)   
                        },reason=>{
                            reject(reason)
                        })
                    }else{
                        resolve(result)
                    }
                    
                   }catch (error){
                    reject(error)
                   }
               })
               // return this
           }
           if (this.status === 'rejeced') {
               setTimeout(()=>{
                   try{
                    let result = onRejected(this.value)
                    resolve(result)
                   }catch (error){
                       onRejected(error)
                   }
               })
           }
        })

    }

    try{
        excutor(this.resolve.bind(this), this.reject.bind(this))
    }catch (error){
        this.reject(error)
    }
    
}



```