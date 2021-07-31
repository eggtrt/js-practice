// 비동기성

function add(getX, getY, cb) {
    var x, y;
    getX(function(xVal) {
        x = xVal;
        if (y!= undefined) {
            cb(x+y);
        }
    });
    getY(function(yVal) {
        y = yVal;
        if (x!= undefined) {
            cb(x+y);
        }
    })
}

add(fetchX,fetchY, function(sum) {
    console.log(sum);
});

// 이벤트

function foo(x) {
    return new Promise(function(resolve, reject) {
        // resolve와 reject중 하나를 호출하게 되고 콜백 함수 역할을 한다
    })
}

var p = foo(42);
bar(p);
baz(p);

// 덕 타이핑

if (
    p !== null &&
    (
        typeof p === "object" ||
        typeof p === "function"
    ) &&
    typeof p.then === "function"
) {
    // 데너블로 간주
} else {
    //데너블이 아니다
}

// scheduling

var p3 = new Promise(function(resolve, reject) {
    resolve("B");
});

var p1 = new Promise(function(resolve, reject) {
    resolve(p3);
})

p2 = new Promise(function(resolve, reject){
    resolve("A");
});

p1.then((v) => {
    console.log(v);
});
p2.then((v) => {
    console.log(v);
})

// 에러 삼키기

var p = new Promise((resolve, reject ) => {
    foo.bar();
    resolve(42);
})

p.then(() => {}, (err) => {
    //error는 TypeError 예외 객체가 나옴
})