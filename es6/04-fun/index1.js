function f(x=1,y){
  console.log([x,y])
}
f()  //[ 1, undefined ]
f(2) //[2,undefied]
f(undefined,1)  //[1,1]

function foo(x=5,y=6){
  console.log(x,y)
}
foo()  //5 6
foo(null)  //null 6

console.log((function (a) {}).length)  //1
console.log((function (a=1){}).length) //0
console.log((function (a,b){}).length) //2




function f1(y = x){
  let x = 2
  console.log(y)
}
f1()   //报错 
f1(1)  //1

var x = 1
function f2(x = x){

}
// f2()



function add(...values){
  let sum = 0
  console.log(values)   //[ 1, 2, 3 ]
  for(let val of values){
    sum += val
  }
  console.log(sum)
}
add(1,2,3)


const sortNumbers = (...numbers)=>numbers.sort();
console.log(sortNumbers(1,2,3,4,5,6))
console.log([1,5,4].sort())  

function push(array,...items){
  items.forEach(function(item){
    array.push(item)
    console.log(array)
    console.log(item)
  })
}
push([],1,2,3,4,5)


