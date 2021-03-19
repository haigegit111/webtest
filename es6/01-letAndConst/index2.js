let arr = [1, 2, 3]
let {
  0: first,
  1: second
} = arr
console.log(first, second) //1,2
console.log(arr == {
  0: arr[0],
  1: arr[1],
  2: arr[2]
})

//字符串的扩展
const [a, b, c] = 'hello'
console.log(a, b, c)
let {
  length: len
} = 'hello'
console.log(len)

let {
  toString: s
} = 123
console.log(s === Number.prototype.toString)

function abc() {
  
}