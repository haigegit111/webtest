function foo(){
  return () => {
    return () => {
      return () => {
        console.log('id', this.id)
      }
    }
  }
}

let f = foo.call({id:1})()()()

function foo1(...values){
  setTimeout(()=>{
    console.log('args',arguments)
    console.log('values', values)
  },1000)
}
foo1(1,2)


//尾调用
// function f1(){
//   let m = 1
//   let n = 2
//   return g(m+n)
// }
// f1();

//尾递归
// function factorial(n){
//   if(n === 1) return 1
//   return n * factorial(n-1)
// }
// console.log(factorial(5))

function factorial(n, total){
  if(n === 1) return total
  return factorial(n - 1, n * total)
}
console.log(factorial(5, 1))



