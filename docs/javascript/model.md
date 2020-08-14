``` js
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
    class oneteam{    
       constructor(){
         this.people = []
       } 
       sendMessage(msg){
          this.people.forEach(val=>{
            val.updateMsg(msg)
          })
       }
    }

    class people{
      constructor(name,team){
        this.name = name
        this.team = team
        this.team.people.push(this)
      }
      updateMsg(msg){
          console.log(`${this.name}收到${msg}通知`)
      }
    }

    let s1 = new oneteam()

    let jack = new people('jack',s1)
    let tom = new people('tom',s1)
    let alice = new people('alice',s1)
   
    s1.sendMessage('开会了')
    s1.sendMessage('吃饭')


```