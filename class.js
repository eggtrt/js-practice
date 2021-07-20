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