//数组解构赋值
let [a,b,c] = [1,2,3]
console.log(a,b,c)  //1,2,3

let [,,d] = [1,2,4]
console.log(d)  //4

let [head,...tail] = [1,2,3,4]
console.log(head,tail)  //1 [ 2, 3, 4 ]
