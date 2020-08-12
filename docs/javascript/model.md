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
//  function people(name){    
//      this.name = name
//      this.gods = []
//      this.buy=function(god){
//          this.gods.push(god)
//      }
//  }
//  let jack = new people('jack')

//  jack.buy('apple')
//  jack.buy('orange')

// console.log(jack.gods);

// 策略模式
// const sumMoney = {
//     meituan:function(money){return money * 0.8},
//     elma:function(money){return money * 0.85},
//     paotui:function(money){return money * 0.9}
// }

// const choicePlatform = function(platname,money){
//     return sumMoney[platname](money)
// }

// console.log(choicePlatform('meituan',100))
// console.log(choicePlatform('elma',100))
// console.log(choicePlatform('paotui',100))


// 创建一个群，保存通知，通知变化之后通知每个家长（触发所有观察者对象）
class Group {
     constructor() {   
        this.message = '暂无通知';   
        this.parents = []; 
    } 
    getMessage() {   
        return this.message; 
    } 
    setMassage(message) {  
         this.message = message;  
         this.notifyAllObservers(); 
    } 
    notifyAllObservers() {   
        this.parents.forEach((parent) => {  
               parent.update();   
        }); 
    } 
    attach(parent) {   
        this.parents.push(parent); 
    }
}
// 观察者，每个家长
class Parent { 
    constructor(name, group) {   
        this.name = name;   
        this.group = group;   
        this.group.attach(this); 
    } 
    update() {   
        console.log(`${this.name} 收到通知: ${this.group.getMessage()}`); 
    }
}
let group = new Group();
let t1 = new Parent('李妈妈', group);
let t2 = new Parent('王爸爸', group);
let t3 = new Parent('张爷爷', group);

group.setMassage('开家长会');
group.setMassage('开运动会');




</script>

```