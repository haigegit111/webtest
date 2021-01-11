//let 
{ 
  let a = 1
  var b = 2
}

//a访问不到
//console.log(a)
console.log(b)

for(let i = 0;i <= 2;i++){

}
//undefined
//console.log(i)

// var a = []
// for(var i = 0; i < 10; i++){
//   a[i] = function(){
//     console.log(i)
//   }
// }
// a[6]()  //10

// let a = [];
// for(let i = 0;i < 10;i++){
//   a[i] = function(){
//     console.log(i)
//   }
// }
// a[6]()

//let 不存在变量提升
// console.log(foo)   //undefined
// var foo = 1;

// console.log(foo)  //报错
// let foo = 1


//暂时性死区
// if(true){
//   //1
//   tmp = 'abc';
//   console.log(tmp)
//   //2
//   let tmp;
//   console.log(tmp)
//   //3
//   tmp = '123'
//   console.log(tmp)
// }

let a = 1
{
  let a =1
}






