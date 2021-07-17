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

// 3.3.5 프로퍼티 서술자

var myObject = {};
Object.defineProperty(myObject, "a", {
    value: 2,
    writable: false, //
    configurable: true, // 설정 가능
    enumerable: true // 열거 가능성
})

myObject.a = 3;
myObject.a; // 2

// 3.3.6 불변성
 
// writable과 configurable을 둘 다 false로 하면 객체 상수를 만들 수 있다
// 확장 금지
Object.preventExtensions(myObject);
myObject.b = 3;
myObject.b // undefined

Object.seal() // Object.preventExtensions(myObject) + configurable: false
Object.freeze() // Object.seal + writable: false

// 3.3.7 [[Get]]

// 실제로 프로퍼티에 접근하면 [[Get]]() 함수가 호출된다
// 알고리즘에 따라서 값을 찾을 수 없으면 undefined가 반환된다

// 3.3.8 [[put]]

// 객체에 프로퍼티가 존재하는지 확인
// 존재하는지에 따라 에러를 띄우거나 값을 세팅한다

// 3.3.9 게터와 세터

var myObject = {
    get a() {
        return 2;
    },
    set a(val) {
        this._a = val * 2;
    }
}

Object.defineProperty(
    myObject,
    "b",
    {
        get: function() { return this.a *2 },
        enumerable: true
    }
)

myObject.a; // 2
myObject.b; // 4