//console.log(typeof window === 'undefined')
let [header,...footer]=[1,2,3,4,5,6]
console.log(header,footer)  // 1  [ 2, 3, 4, 5, 6 ]
let [...c]=[]
console.log(c)  //[]


let [x,y,z] = new Set(['a','b','c'])
console.log(x,y,z)  // a, b, c