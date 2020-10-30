var student={
    name:'apple',
    like:function(){
        console.log(this);
        console.log(this.name+' is good');
    }
}

var fn=student.like


var teacher={
    name:'jobs'
}
// window.fn()

// fn.call(teacher)
fn.apply(teacher)




