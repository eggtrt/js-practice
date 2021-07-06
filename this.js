function identify() {
    return this.name.toUpperCase();
}
 
function speak() {
    var greeting = "Hello, I,m " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "jisu"
};

var you = {
    name: "sowon"
};

identify.call(me);
identify.call(you);
speak.call(me);
speak.call(you);

// 위와 같은 함수를 this 없이 만들기 위해선
// function identify(context) {
//     return context.name.toUpperCase();
// }
 
// function speak(context) {
//     var greeting = "Hello, I,m " + identify(context);
//     console.log(greeting);
// }

// var me = {
//     name: "jisu"
// };

// var you = {
//     name: "sowon"
// };

// identify(me);
// identify(you);
// speak(me);
// speak(you);