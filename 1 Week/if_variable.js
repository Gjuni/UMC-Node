// 함수 선언식
function find (check) {
    console.log("hi");
}

// 함수 표현식
const find_express = function(check) {
    console.log("hi");
}


let Jun = "umc 부원";

if(Jun == "umc 부원") {
    console.log("hi");
} else {
    console.log("Bye");
}

let check = true

// 삼항 연산
Jun == "umc 부원" ? check = true : check = false;

if(check) {
    find(check);
    find_express(check);
}