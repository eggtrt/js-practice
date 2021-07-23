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

// 5.2 체계

Object.defineProperty(Foo.prototype, "constructor", {
    enumerable: true,
    writable: true,
    configurable: false,
    value: Foo // Constructor가 Foo를 가리키게 함
})

// 5.3 상속

function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

function Bar (name, label) {
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar("a", "obj a");

a.myName(); // "a"
a.myLabel() // "obj a"