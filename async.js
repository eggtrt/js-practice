// 비동기 처리

var data = ajax("`~~");
console.log(data); // 나오지 않는다!

ajax("~~", (data) => {
    console.log(data); // 이제 나온다!
})

function now() {
    return 21;
}

function later () {
    answer = answer * 2;
    console.log(answer);
}

var answer = now();
setTimeout(later, 1000); // 42

// 이벤트 루프

var eventLoop = [];
var event;

while (true) {
    if (eventLoop.length > 0) {
        event = eventLoop.shift();
        try {
            event();
        } catch (error) {
            reportError(error);
        }
    }
}

// 병렬 스레딩

var a = 20;
function foo() {
    a = a + 1;
}

function bar() {
    a = a * 2;
}

ajax("주소1", foo);
ajax("주소2", bar);

// 완전 - 실행

var a= 1;
var b= 2;

function foo () {
    a++;
    b= b*a;
    a = b + 3;
}

function bar() {
    b--;
    a = 8 + b;
    b = a * 2;
}
ajax("주소1", foo);
ajax("주소2", bar);
