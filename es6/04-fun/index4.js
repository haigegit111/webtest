function factorial(n, total){
  if(n === 1) return total;
  return factorial(n - 1, n * total);

}
console.log(factorial(5, 1))  //120

//递归函数的改写
function addSteps(n){
  return factorial(n, 1)
}
console.log(addSteps(6))  //720


//柯里化
// function currying(fn, n){
//   return function (m){
//     return fn.call(this, m, n)
//   }
// }

// const factorialFn = currying(factorial, 1) 
// factorialFn()
 

function sum(x, y){
  if(y>0){
    return sum.bind(null, x+1, y-1)
  }else{
    return x
  }
}


//蹦床函数(trampoline)可以将递归执行转为循环执行。
function trampoline(f){
  while(f && f instanceof Function){
    f = f()
  }
  return f
}
console.log(trampoline(sum(1,100000000)))  //1000000001

function tco(f) {
  let value;
  let active = false
  let accumulated = []
  return function accumulator(){
    accumulated.push(arguments);
    if(!active){
      active = true;
      while(accumulated.length){
        value = f.apply(this, accumulated.shift())
      }
      active = false;
      return value
    }
  }
}
let sum1 = tco(function(x, y){
  if(y>0){
    return sum(x+1, y-1)
  }else{
    return x
  }
})
// console.log(sum1(1,100000))

let jsonData;
try{
  jsonData = JSON.parse(str);
}catch(error){
  console.log(error)
}

