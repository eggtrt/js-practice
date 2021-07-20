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


