// 중첩/ 연쇄된 콜백

ListeningStateChangedEvent("click", function handler(evt) {
    setTimeout(function request() {
        ajax("주소",function response(text) {
            if (text = "hello") {
                handler();
            } else if (text == "world") {
                request();
            }
        })
    }, 500);
})