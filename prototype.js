// 프로토타입

var anotherObject = {
    a:2
}

var myObject = Object.create(anotherObject);

for (var k in myObject) {
    console.log(k + "를 발견")
}

("a" in myObject) // true

