[1, undefined, 3].map((x = 6) => console.log(x)) //1 6 3


// z = 1
// y = 2
// [z,y]=[y,z]
// console.log(z,y)

function exampleArr() {
  return [1, 2, 3]
}
let [a, b, c] = exampleArr()
console.log(a, b, c)

function exampleObj() {
  return {
    foo: 'apple',
    bar: 123
  }
}
let {
  foo,
  bar
} = exampleObj()
console.log(foo, bar) // apple  bar

function f({x,y,z}){
  return x+y+z
}
let apps = f({z:1,y:2,x:3})
console.log(apps)  //6

let jsonData = {
  id: 42,
  status: 'ok',
  data: [867,5309]
}
let {id,status,data: [...nums]} = {...jsonData};
nums[2] = 110
console.log(jsonData)


//Iterator接口
const map = new Map();
map.set('first','hello')
map.set('second','world')
for(let [key,val] of map){
  console.log(key+' is '+ val)
}
for(let [key] of map){
  console.log(key)
}
for(let [,val] of map){
  console.log(val)
}
