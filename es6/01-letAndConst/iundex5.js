let app = {file:'apple',price:123}
let obj = {...app}
let {...obj1} = app
obj.file = 'huawei'
obj1.price = 100
console.log(app)  //{ file: 'apple', price: 123 }
console.log(obj)  //{ file: 'huawei', price: 123 }
console.log(obj1)  //{ file: 'apple', price: 100 }

let {x} = {x:123}
console.log(x)  //123
// ({} = [true,false])
// ({}='abc')
// ({}=[])
const [...d] = 'hello'
console.log(d)
let {length:len} = 'hello'
console.log(len)


class Person{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  run(){
    console.log(`${this.name}在跑`)
  }
}
let p = new Person('jobs',12)
p.run()


function add([x,y]){
  return x+y
}
add([1,2])
console.log(add([1,2]))
// [[1,3],[3,4]].map(([a,b])=> a+b)

function Tem({x=0,y=0}={}){
  return [x,y]
}
console.log(Tem())  //[0,0]
console.log(Tem({x:3,y:8}))  //[3,8]