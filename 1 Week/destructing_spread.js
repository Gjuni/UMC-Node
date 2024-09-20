/** 구조분해할당 - 구조를 분해해서 변수를 바로 사용 가능
 * 배열이나 객체를 사용할 때 분해해서 더 쉽게 사용할 수 있음
 */

const info = {
    name : 'Jun',
    age : 24
}

// 객체의 key와 같은 이름으로 변수 선언
const {name, age} = info;
console.log(name); // Jun
console.log(age); // 24

const {name : myName , age : myAge} = info;
console.log(myName); // Jun
console.log(myAge); // 24

const fruits = ['apple', 'mango', 'grape'];
const [zero, one, two] = fruits;

console.log(zero); // apple
console.log(one); // mango
console.log(two); // grape


/****************** Spread *******************/
// ...(배열 이름)
const arr1 = [1,2,3];

// arr1 안에 있는걸 꺼내서 새로운 배열에 넣기
const arr2 = [...arr1, 4,5];

console.log(arr2);


const obj1 = {spread_name : 'Jun', spread_age: 24};
const obj2 = {...obj1, job: 'developer'};

console.log(obj2);


/****************** rest *******************/
// ...rest
// 특정 배열을 제외하고 모아줌
const {spread_name, ...rest} = obj2;

console.log(spread_name); 
console.log(rest);      