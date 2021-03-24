//Array.from()
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let arr1 = [].slice.call(arrayLike)
console.log(arr1)   //[ 'a', 'b', 'c' ]

let arr2 = Array.from(arrayLike)
console.log(arr2)   //[ 'a', 'b', 'c' ]

let arrayLike1 = {
  '0': 1,
  '1': 2,
  '2': 3,
  length: 3
}
let arr3 = Array.from(arrayLike1)
console.log(arr3)  //[ 1, 2, 3 ]

let ps = document.querySelectorAll('p');
Array.from(ps).forEach(p => {
  console.log(p)
})
function foo(){
  let args = Array.from(arguments)
  console.log(arguments)
  console.log([...arguments])
  console.log(args)
}
foo(1,2,3)

const toArray = (
  ()=>{

  }
)

//* Dom元素操作
let psContent = Array.from(ps, p => p.textContent)
console.log(psContent)

let arr5 = Array.from([1,,3,5,7,], p => p || 0);
console.log(arr5) //[1, 0, 3, 5, 7]

//返回各种数据 类型
function typeOf(){
  return Array.from(arguments, a => typeof a)
}
let arr6 = typeOf(NaN, null, 1, true, undefined)
console.log(arr6)  //["number", "object", "number", "boolean", "undefined"]

let arr7 = Array.from({length:2}, ()=> 'apple')
console.log(arr7)  //["apple", "apple"]

function countSymbols(string){
  return Array.from(string).length
}
console.log(countSymbols('fsfsdfs'))  //7







