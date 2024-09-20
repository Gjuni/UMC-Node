const umc = "동아리";

console.log(umc+"는 좋은 동아리");

/* ES6 표현법 
    6번째 표준안 현재적인 코드를 사용하면, 코드가 간결, 생산성이 향상
*/

// 템플릿 리터럴
console.log(`나도 ${umc}가 좋아`); // Back tick으로 해야함 ``````


// 화살표 함수와 함수의 차이
let sum = function(a,b) {
    return a+b;
}
/* 함수를 보다 더 간결하게 작성 가능
let 변수 = (매개 변수) => return 값 */ 
let sum_fuc = (a,b) => a+b;

console.log(sum(4,5));
console.log(sum_fuc(4,5));