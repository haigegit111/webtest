var student={
    name:'apple',
    like:function(){
        console.log(this.name);
        console.log(this.name+'喜欢打篮球');
        console.log(this);
    }
}
student.like()  //this->student

var fn=function(){
    console.log(this.name);
    console.log(this.name+'喜欢打篮球');
    console.log(this);
}  //this->window

console.log(student.like==fn);  //false

function add(a=2,b){
    console.log(110);
    console.log(arguments);
}
add(12,3)