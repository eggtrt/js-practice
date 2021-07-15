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

// 3.3.2 프로퍼티 vs 메서드

function foo() {
    console.log("foo");
}

var someFoo = foo;

var myObject = {
    someFoo: foo
}
foo;
someFoo;
myObject.someFoo;

// 3.3.3 배열

var myArray = ["foo", 42, "bar"];
// 인덱싱을 통해 위치 저장
// 객체처럼 키값을 사용할수도 있지만 권장되진 않음

myArray.baz = "baz";

// 3.3.4 객체복사

// 얕은 복사 -> 레퍼런스는 완벽하게 복사되지 않음
Object.assign({}, myObject);
// 깊은 복사 -> 레퍼런스까지 완벽하게 복사됨 