// 3.1 객체 구문

// 리터럴 형식

var myObj = { 
    key: value
}

// 생성자 형식

var myObj = new Object();
myObj.key = value;

// 3.2 Type

// 객체가 아닌 것 (단순 원시 타입)
// string, number, boolean, null, undefined
// 객체 하위 타입 (복합 원시 타입)
// function

// 3.3 내장 객체

// String, Number, Boolean, Object, Function, Array, Date, RegExp, Error
// 생성자를 통해 객체 생성

// 3.3 내용

// 3.3.1 계산된 프로퍼티명

var prefix = "foo";
var myObject =  {
    [prefix + "bar"]: "hello",
    [prefix + "baz"]: "world" 
}

