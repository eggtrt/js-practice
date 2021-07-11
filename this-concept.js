function baz () {
    // 호출 스택: 'baz'
    // 호출부는 전역 스코프 내부
    console.log('baz');
    bar(); // 'bar의 호출부
}

function bar () {
    // 호출 스택: baz -> bar
    // 호출부는 baz 내부
    console.log('bar');
    foo(); // foo의 호출부
}

function foo () {
    // 호출 스택: baz -> bar -> foo
    // 호출부는 bar 내부
    console.log('foo');
}

baz(); // baz의 호출부

// this 바인딩의 규칙

// 1. 기본 바인딩

// strict 모드에서는 제한됨
function foo () {
    console.log(this.a);
}
var a = 2;
foo();

// 2. 암시적 바인딩
function foo () {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo
}

obj.foo(); // 호출부에서 obj 콘텍스트로 foo를 참조하므로 호출 시점에서 obj가 foo를 소유/포함 한다고 볼 수 있다
// 함수 레퍼런스에 대한 콘테스트 객체가 존재하면 암시적 바인딩 규칙이 적용되어 콘텍스트 객체가 this에 바인딩 된다
// 여러개가 체이닝 되면 최상위와 최하위만 연관된다

// 2-2 암시적 소실
function foo () {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo
};
var bar = obj.foo;
var a = "전역 변수";
bar();

// 3 명시적 바인딩
function foo () {
    console.log(this.a);
}

var obj = {
    a: 2
};
foo.call(obj); // call을 사용하므로써 this에 obj를 명시적으로 바인딩
// 객체 대신 string, boolean, number등을 넣으면 new String 등으로 래핑되는데 이를 박싱이라고 한다

// 3-2 하드 바인딩
function foo () { 
    console.log(this.a);
}
var obj = {
    a: 2
};

var bar = function () {
    foo.call(obj);
}
bar(); // 2
setTimeout(bar, 100);
bar.call(window); // 2

//bar 내부에 foo.call(obj)로 foo를 호출하여 obj를 this에 강제 바인딩하도록 하드코딩

// 4 new 바인딩

function foo(a) {
    this.a = a;
}

var bar = new foo(); // new를 통해 객체 생성시, bar는 foo함수의 this에 바인딩 된다
console.log(bar.a);

// 순서대로 적용하기

// 1. new로 함수를 호출했는지? -> 새로 생성된 객체가 this
var bar = new foo();
// 2. call과 apply로 함수를 호출? -> 명시적으로 지정된 객체가 this
var bar = foo.call(obj);
// 3. 함수를 콘텍스트(객체를 소유, 포함)형태로 호출? -> 콘텍스트 객체가 this
var bar = obj1.foo();
//  4. 그 외 경우 this는 기본 값(전역 객체)

// 바인딩 예외

// 2.4.1 this 무시

// call, appluy, bind 메서드에 첫번째 인자로 null, undefined를 넘기면 기본 바인딩 적용
function foo() {
    console.log(this.a);
}

var a = 2;
 
foo.call(null);

foo.apply(null, [2, 3]) // 2와 3이 각각 한번씩 들어간다

// null을 전달하는것이 위험할 수 있으므로 Object.create(null) 사용 권장
