var page=['首页','手机','电脑']
// 往最后添加方法
page.push('xi')
console.log(page);

// 把最后一个内容删掉
res=page.pop()
console.log(res);  //xi
console.log(page);

// 删除第一个内容
page.shift();
console.log(page);

// 往第一个里添加东西
page.unshift('apple');
console.log(page);


//获取新的数组，不改变原数组
var arr=['apple','huawei','xiaomi','oppo']
// slice(begin,end)
var newArr=arr.slice(1,3)  
console.log(newArr);  //[ 'huawei', 'xiaomi' ]

var 
