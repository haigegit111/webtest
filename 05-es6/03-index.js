//  用途
//交换变量的值


//从函数中返回多个值
function example(){
  return {
    foo:'apple',
    bat:'huawei'
  }
}
let {foo,bat}=example()
console.log(foo,bat)

const map = new Map();
map.set('first','hello');
map.set('second','world')

//获取key,value
for (let [key,value] of map){
  console.log(key+':'+value)
}
//获取key
for (let [key] of map) {
  console.log(key)
}
//获取value
for(let [,value] of map){
  console.log(value)
}