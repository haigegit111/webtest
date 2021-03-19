//箭头函数
let f = v => v
f()


let arr = [1,2,3]

arr.map(x => console.log(x))

let values = [4,6,2,7,4,6,9,1]
// let result = values.sort(function(a,b){
//   return a - b
// })
let result = values.sort((a,b)=>a-b)
console.log(values)

const numbers = (...nums) => nums
console.log(numbers(1,2,3,4))

const headAndTail = (head,...tail)=>[head,tail]
console.log(headAndTail(1,2,3,))


function foo(){
  setTimeout(()=>{
    console.log('id:',this.id)
  },200)
}
let id = 2
foo.call({id:12})

// function Timer(){
//   this.s1 = 0
//   this.s2 = 0
//   setInterval(() => {
//     this.s1++
//   }, 1000);
//   setInterval(function(){
//     this.s2++
//   },1000);
// }
// let t1 = new Timer()
// setTimeout(() => {
//   console.log('s1',t1.s1)
// }, 3100);
// setTimeout(() => {
//   console.log('s2',t1.s2)
// }, 3100);


let handler = {
  id: '110',
  init: function(){
    window.document.addEventListener('click',
      event => this.doSomething(event.type),false
    )
  },
  doSomething: function(type){
    console.log('handling'+type+'for'+this.id)
  }
}

handler.init()

