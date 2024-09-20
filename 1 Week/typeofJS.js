
// JS 객체(Object)는 Key:value로 이루어져있음
// key는 String Value는 모든 타입이 가능하다

// JS의 배열이지만 객체라고 처리
const arr = [1,2,3];
console.log(arr); // "[1,2,3]"" 출력 "객체"


// JS의 객체
const obTest = {
    "Jun" : 85175,
};

console.log(typeof obTest);

// 객체 내의 value에 대한 접근은 아래 두가지 방식으로 함
console.log(obTest.Jun); 
console.log(obTest['Jun']);

console.log(typeof undefined);
console.log(typeof 25);  // number
console.log(typeof 25n); //큰수를 나타낼 때 사용
console.log(typeof true); // boolean
console.log(typeof "bar"); // String
console.log(typeof obTest) // Object
console.log(typeof null) // Object

