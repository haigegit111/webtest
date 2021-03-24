let arr1 = Array.of(1,4,6)
console.log(arr1)
let arr2 = Array.of(2)
console.log(arr2.length)  //1
Array.of()   //[]


let arr3 = [1,2,3,4,5,6]
let arr4 = arr3.copyWithin(0,2)
console.log(arr3)
console.log(arr4)  //[3, 4, 5, 6, 5, 6]


let arr5 = [1,4,5,6,-1,-2].find(n => n<0)
console.log(arr5)  //-1

let arr6 = [1,5,10,15].find((value, index, arr) => {
  return value > 2
})
console.log(arr6)  //5

let arr7 = [1,5,10,15].findIndex((value,index,arr) => {
  return value > 16
})
console.log(arr7)  //1

let arr8 = [NaN,1].findIndex(y => Object.is(NaN, y))
console.log(arr8)  //0

// [NaN].indexOf(NaN)  // -1

let arr9 = ['a', 'b' , 'c'].fill(7)
console.log(arr9)  //[7, 7, 7]
console.log(new Array(3).fill(7))

for(let index of  [1,2,3].keys()){
  console.log(index)  // 0 1 2
}
for(let value of [1,3,5].values()){
  console.log(value)  //1  3 5
}
for(let [index,value] of [1,3,4].entries()){
  console.log(index,value)  // 0 1 ; 1 3 ; 2 4
}


let letter = ['a','b','c']
let ents = letter.entries();
console.log(ents.next().value)
console.log(ents.next().value)
console.log(ents.next().value)


//includes()
console.log(['abs',2,4].includes('abs'))  //true
console.log('sfsab'.indexOf('ac'))  


const contains = (
  () => 
    Array.prototype.includes
     ? (arr, value) => arr.includes(value) 
     : (arr, value) => arr.some(el => el === value)
)()

console.log(contains(['appls','huawei'], 'xiaomi'))  //false
 