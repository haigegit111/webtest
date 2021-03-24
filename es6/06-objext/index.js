function f(x,y){
  return {x,y}
}
console.log(f(1,4))  //{ x: 1, y: 4 }

//方法简写
const o = {
  method(){
    return 'hello'
  }
}

let birth = '2020-03-23'
const person = {
  name: 'apple',
  birth,
  hello(){console.log(`我的名字是${this.name}`)}  //我的名字是apple
}
console.log(person.hello())


function getPoint(){
  const x = 1
  const y = 2
  return {x, y}
}
console.log(getPoint())   //{ x: 1, y: 2 }

const cart = {
  _wheel : 4,
  get wheels(){
    return this._wheel
  },
  set wheels(value){
    this._wheel = value
  }
}


let propKey = 'foo'
let obj = {
  [propKey]: true,
  ['a'+'bc']: 123
}
console.log(obj)
