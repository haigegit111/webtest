//join
let arr1 = [1,4,6]
console.log(arr1.join())   //1,4,6
console.log(arr1.join('-'))  //1-4-6

//  push :可以接收任意数量的参数，将它们逐个添加到数组末尾，并返回数组的长度；
//  pop  ：数组末尾删除最后一项，减少数组的length值，并返回删除的项。
let arr2 = [4,7,8]
console.log(arr2.push(34))  //4
console.log(arr2)     // [ 4, 7, 8, 34 ]

console.log(arr2.pop())   //34
console.log(arr2)   // [ 4, 7, 8 ]

// unshift() 首位添加
// shift() 首位删除
let arr3 = [1,4,6]
console.log(arr3.unshift(36))   //4
console.log(arr3)   //[ 36, 1, 4, 6 ]

console.log(arr3.shift())   //36
console.log(arr3)   //[ 1, 4, 6 ]

//sort()  排序
let arr4 = [13,24,51,3]
console.log(arr4.sort())    //[ 13, 24, 3, 51 ]
console.log(arr4)   //[ 13, 24, 3, 51 ]

function compare(a,b){
  return a - b
}
console.log(arr4.sort(compare))  //[ 3, 13, 24, 51 ]

//reverse()  反转数组的项的顺序
let arr5 = [2,6,8,9]
console.log(arr5.reverse())   //[ 9, 8, 6, 2 ]
console.log(arr5)   ////[ 9, 8, 6, 2 ]

//*concat() 
let arr6 = [1,2,3].concat()
console.log(arr6)   // [ 1, 2, 3 ]
console.log([1,2,3].concat(1,{name:'apple'},[5,6]))   // [ 1, 2, 3, 1, 5, 6 ]

//*slice(a,b)  a: 开始的下标， b： 结束的下标
let arr7 = [1,2,3,4,5]
console.log(arr7.slice(3))  //[ 4, 5 ] 
console.log(arr7.slice(2,4))   // [ 3, 4 ]

//splice  :主要用于删除
let arr8 = [1,2,3,4,5,6]
let arr9 = arr8.splice(0,2)
console.log(arr8)   //[ 3, 4, 5, 6 ]
console.log(arr9)   //[1,2]
let arr10 = arr8.splice(1)
console.log(arr10)  // [ 4, 5, 6 ]
console.log(arr8)   //[ 3 ]


//indexOf lastIndexOf

let arr11 = [1,2,3,4,5,6];
console.log(arr11.indexOf('5'))   //-1
console.log(arr11.indexOf(5))     //4


//forEach() : 没有返回值
let arr = [
  {name: 'apple'},
  {name: 'huawei'},
  {name: 'xiaomi'}
]
arr.forEach((item, index, arr) => {
  item.age = 12+ index
})
console.log(arr)


//map() 返回每一项
let mapArr = arr.map((item, index, arr) => {
  return item
})
console.log(mapArr)
console.log(arr)

//filter() : 需要的项 return true
let filterArr = arr.filter((item, index, arr) => {
  return true
})

//every() 每一项都符合条件才返回true
let everyArr = arr.every((item, index, arr) => {
  return item.age === 12 + index
})
console.log(everyArr)  //true
console.log(arr)

//some 有一项符合就返回true

let someArr = arr.some((item, index, arr) => {
  return item.name === 'apple'
})
console.log(someArr)  //true


//reduce

let values = [1,3,5,7,9]
let sum = values.reduce((pre, cur, index, arr) => {
  return pre + cur
},100)
console.log(sum)  //125






