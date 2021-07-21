// 클래스와 객체의 혼합

// 4.1 클래스 생성자

class CoolGuy {
    specialTrick = nothing
    CoolGuy(trick) {
        specialTrick = trick
    }
    showOff() {
        output(" 마술!!: ", specialTrick)
    }
}

Joe = new CoolGuy("카드 마술");
Joe.showOff() // 마술!!: 카드마술

// 4.2 클래스 상속

class Vehicle {
    engines = 1
    ignition() {
        output("엔진을 켠다"); 
    }
    drive() {
        ignition();
        output("방향을 맞추고 앞으로 간다")
    }
}

class Car extends Vehicle {
    wheels = 4
    drive () {
        inherited:drive()
        ouput(wheels, "개의 바퀴로 굴러간다")
    }
}

// 4.4 믹스인

function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key]
        }

    return targetObj    
    }
}

var Vehicle = {
    engines: 1,
    ignition: function() {
        console.log("엔진을 켠다")
    },
    drive: function() {
        this.ignition();
        console.log("방향을 맞추고 앞으로간다")
    }
};

var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function() {
        Vehicle.drive.call(this);
        console.log(
            this.wheels + "개의 바퀴로 굴러간다!"
        )
    }
})

// 4.4.1 암시적 믹스인

var Something = {
    cool: function() {
        this.greeting = "Hello world";
        this.count = this.count ? this.count + 1 : 1;
    }
};

Something.cool();
Something.greeting;
Something.count;

var Another = {
    cool: function() {
        Something.cool.call(this);
    }
}

Another.cool();
Another.greeting;
Another.count; // 공유되지 않음