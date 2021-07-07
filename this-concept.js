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
function foo () {
    console.log(this.a);
}
var a = 2;
foo();