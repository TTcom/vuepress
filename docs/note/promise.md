### vue预览pdf文件

vue-cli2中预览pdf文件爬坑，首先可以使用vue-pdf来进行预览使用方式的话也很简单都可以搜到，
问题是使用的时候印章和签名无法显示出来，很多文章说要去注释该依赖中的某一行代码，可是上线时依赖是会重新下载的，该方案不妥；
重点是最终方案，亲测可行的方案，去github上面下载并使用pdf.js。地址：https://github.com/mozilla/pdf.js/releases/tag/v2.5.207
- 要使用指定版本的文件，按照上面链接去下载就行，注意如果项目系统兼容性不好的话，需要下载es5版本的
- 下载完成后解压放到静态文件目录中我是放到static文件中的
使用方式
vue文件：
file后面跟的是你的pdf文件地址
<div class="pdf">
      <iframe
        :src="`/static/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`"
        frameborder="0"
        class="pdf-window"
    >
</iframe>
</div>
要注释的地方：
找到build目录下的pdf.worker.js文件;注释这段内容即可
// if (data.fieldType === "Sig") {
//   data.fieldValue = null;

//   _this3.setFlags(_util.AnnotationFlag.HIDDEN);
// }
以上做完后发版上线即可看到你想要看到的所有内容了










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