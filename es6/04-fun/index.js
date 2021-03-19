function log(x,y){
  y = y || 'world'
  console.log(x,y)
}
log('hello')
log('apple')
log('hello','china')

if(typeof y === 'undefined'){
  y = 'world'
}


function log1(x,y='world'){
  console.log(`${x} ${y}`)
}
log1('hello','apple')   //hello apple
log1('hello')     //hello world


function Point(x=0,y=0){
  this.x = x;
  this.y = y
}
const p1 = new Point();
const p2 = new Point(1)
console.log(p1)
console.log(p2)

function foo(x){
  x = 1
  console.log(x)
}
foo()

let x = 1
function foo1(p=x+1){
  console.log(p)
}
foo1()    //2
x = 100
foo1()    //101

function foo3({x,y=5}){
  console.log(x,y)
}
foo3({})   //undefined 5
let z = {x:1}
foo3(z)   //1 5
z.y = 100
foo3(z)   //1 100


let {a,b} = {}
console.log(a,b)   //undefined undefined

function foo4({x,y=5} = {}){
  console.log(x,y)
}
foo4()   //undefined 5



function m1({x=0,y=0}={}){
  console.log([x,y])
}
function m2({x,y}={x:0,y:0}){
  console.log([x,y])
}
m1()  //[0,0]
m2()  //[0,0]

m1({x:3})  //[3,0]
m2({x:3})  //[3,undefined]

m1({})  //[0,0]
m2({})  //[undefined,undefined]

m1({z:1})  //[0,0]
m2({z:1})  //[undefined,undefined]
 




