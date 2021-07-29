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

// 중첩 없이

listen("click", handler);

function handler() {
    setTimeout(request, 500);
}

function request() {
    ajax("", response);
}

function response(text) {
    if (text == "hello") {
        handler();
    }
}