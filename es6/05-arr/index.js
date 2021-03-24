function add(...values){
  console.log(values)
}
add(1,2)  //[1,2]

console.log(...[1,2,3])
function sum(){
  console.log(...arguments)
}
sum(1,2)
console.log(1,...[2,3,4],5)  // 1 2 3 4 5

// function push(array, ...value){
//   array.push(...values)
// }
// push([],1,2,3)
let arr = []
arr.push(1,2,3)
console.log(arr)  //[1,2,3]

function add(x, y){
  console.log(x+y)
}
let nums = [1,2]
add(...nums)  //3

function f(x,y,z,w) {}
const args = [0, 1]
f(-1,...args,...[3])

let x = 1
const arr1 = [
  ...(x > 0 ? ['a'] : []),
  'b'
]

//数组合并
let b1 = [1,2,3]
let b2 = [4,5,6]
b1.push(...b2)
console.log(b1)  // [ 1, 2, 3, 4, 5, 6 ]

//数组的赋值： 都之乡同一位置
const a1 = [1,2,4]
const a2 = a1
a2[2] = 3
console.log(a1)   //[1,2,3]

//数组的克隆
const a3 = a1.concat();
const a4 = [...a1]
const [...a5] = a1

//数组合并
let a6 = [...a1,...a2]
console.log(a6)



//字符串
console.log(...'hello')  //h e l l o
function length(str){
  return [...str].length
}
console.log(length('hello'))
console.log([...'hello'].reverse().join(''))


//Map,Set,Generator
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])
let arr3 = [...map.keys()]
console.log(arr3)

const go = function*(){
  yield 1
  yield 2
  yield 3
};
console.log([...go()])


