{
  let a = 1
  var b = 2
}
//console.log(a)  //报错
console.log(b)

for(let i=0;i<10;i++){
}
//console.log(i)  //i只在代码块里有效
var c = []
for(var i =0;i<10;i++){
  c[i] = function(){
    console.log(i)
  }
}
c[6]()  //10
var d = []
for(let i=0;i<10;i++){
  d[i] = function(){
    console.log(i)
  }
}
d[6]()  //6
for(let i=0;i<3;i++){
  let i = 'arr'
  console.log(i)
}
//arr
//arr
//arr

// if(true){
//   tmp = 'abc'
//   console.log(tmp)
//   let tmp;
//   console.log(tmp)
//   tmp=123
//   console.log(tmp)
// }

// var temp = new Date();
// function f(){
//   console.log(temp)
//   if(false){
//     var temp = 123   
//   }
// }

// f()

// console.log(typeof x)
// let x;  //报错

// function add(x=y,y=2){
//   return [x,y]
// }
// console.log(add())

var s = 'hello'
for(var i = 0; i<5;i++){
  console.log(s[i])
}
console.log(i)

{
  {
    let app = 123
    {
      console.log(app)
    }
  }
}
