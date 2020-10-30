// 1
function Student(name,age){
    var student={
        name:name,
        age:age,
        like:function(){
            console.log(this.name+this.age);
        }
    }
    return student
}

var s1= Student(1,2)
console.log(s1);
s1.like()

// Proto
var teacherProto={
    teach:function(){
        console.log('教好学生');
    },
    like:function(){
        console.log(this.name+'吃')
    }
}
Teacher.prototype=teacherProto

// 2自定义构造函数创建对象
function Teacher(name,age,likename){
    this.name=name
    this.age=age
    this.likename=likename
    // this.like=function(){
    //     console.log(this.name+'喜欢'+this.likename);
    // }
}
// 需要加 new 创建一个新的对象，将函数内部的this指向新的对象
var t1=new Teacher('apple',12,'song')
console.log(t1);
console.log(t1.name);
console.log(t1.age);
// console.log(t1.like);
t1.like()


//3 class创建对象
class Cat{
    // apple='iphone'
    //定义构造函数
    constructor(name,color){
        this.name=name
        this.color=color
        this.like=function(){
            console.log(this.name+'是'+this.color);
        }
    }

}
// var c=new Cat('博士帽','red')
// console.log(c);
// c.like()

// console.log(c.apple);


console.log(Cat.apple);

console.log(t1 instanceof Teacher);  //true
