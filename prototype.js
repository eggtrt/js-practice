// 프로토타입

var anotherObject = {
    a:2
}

var myObject = Object.create(anotherObject);

for (var k in myObject) {
    console.log(k + "를 발견")
}

("a" in myObject) // true

// 5.1 생성자

function Foo () {
    //
}

Foo.prototype.constructor === Foo; //true

var a = new Foo();
a.constructor === Foo; // true

function NothingSpecial () {
    console.log('whaaat');
}

var a = new NothingSpecial();
a; // {}