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

