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