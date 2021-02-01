//console.log(typeof window === 'undefined')
// let [header,...footer]=[1,2,3,4,5,6]
// console.log(header,footer)  // 1  [ 2, 3, 4, 5, 6 ]
// let [...c]=[]
// console.log(c)  //[]


// let [x,y,z] = new Set(['a','b','c'])
// console.log(x,y,z)  // a, b, c


// let [e,f]=[1]
// console.log(f) //undefined

// //对象解构赋值
// const {foo, bar}= {foo:'foo',bar:'bar'}
// console.log(foo,bar)
// const {fo:baz} = {fo:'hello',bar:'apple'}
// console.log(baz)  //hello

// const [a,b,g,d,h] = 'hello'
// console.log(a,b,g,d,h)
// let {length: len} = 'hello'
// console.log(len)  //5

//数值和boolean的解构复制


//函数参数
function add([a,b]){
  return a+b
}
console.log(add([1,3]))
[[1,2],[3,4]].map(([c,d]) => c+d);