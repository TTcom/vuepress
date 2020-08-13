``` html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<script>
//  单例模式
 function people(name){    
     this.name = name
     this.gods = []
     this.buy=function(god){
         this.gods.push(god)
     }
 }
 let jack = new people('jack')

 jack.buy('apple')
 jack.buy('orange')

console.log(jack.gods);

// 策略模式
const sumMoney = {
    meituan:function(money){return money * 0.8},
    elma:function(money){return money * 0.85},
    paotui:function(money){return money * 0.9}
}

const choicePlatform = function(platname,money){
    return sumMoney[platname](money)
}

console.log(choicePlatform('meituan',100))
console.log(choicePlatform('elma',100))
console.log(choicePlatform('paotui',100))

// 观察者模式
   class company{
         constructor(){
           this.message = "无任何通知"
           this.people = []
         }
         setMessage(message){
           this.message = message
           this.notify()
         }
         attach(people){
           this.people.push(people)
         }
         notify(){
          this.people.forEach(val=>{
            val.update()
          })
         }

   }

   class people{
     constructor(name,company){
       this.name = name;
       this.company = company;
       this.company.attach(this)
     }
     update(){
       console.log(this.name + "收到" +this.company.message)
     }
   }

let s1 = new company();

let tony = new people('tony',s1)
let ben = new people('ben',s1)
let peter = new people('peter',s1)

s1.setMessage('吃饭了')





</script>

```