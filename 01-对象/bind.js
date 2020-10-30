//bind
var teacher={
    name:'老王'
}
var student={
    name:'小王',
    like:function(){
        console.log(this);
        console.log(this.name+'喜欢打篮球');
    }.bind(teacher)
}

var fn=function(){
    console.log(this);
    console.log(this.name+'喜欢打篮球哦');
    for(var i=0;i<arguments.length;i++){
        console.log(this.name+'喜欢'+arguments[i]);
    }
}.bind(teacher)


fn()
student.like()

console.log('-----');
