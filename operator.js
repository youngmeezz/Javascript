//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2); //문자열 + 숫자
console.log(`string literals: 1 + 2 = ${1 + 2}`); //변수값을 계산해서 string으로 포함해서 보냄
//string literals는 ' 이용해도 그대로 문자열로 반환
console.log("ellie's book"); //싱글쿼트 그대로 쓰면 사용이 안되서 더블 쿼트로 써줘야됨

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder 나머지 1
console.log(2 ** 3) //exponentiation 거듭제곱 8

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//counter = counter + 1;
//preIncrement = counter;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement = counter;
//counter = counter + 1;


//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


//5.Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal


//6.Logical opearors: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; //false

// ||(or) , finds the first truely value 처음으로 true가 등장하면 멈춤 뒤에가 true든 false든 상관 없이 true -> check함수의 콘솔이 안나옴 value1 == true일 경우
//simple한 value들 먼저 넣고 먼저 false일때만 마지못해 호출하는게 check(); expression이나 함수들을 제일 뒤에
console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('house');
    }
    return true;
}


// &&(and) , finds the first falsely value 처음으로 true가 등장하면 멈춤 뒤에가 true든 false든 상관 없이 false -> check함수의 콘솔이 안나옴 value1 == true일 경우
//simple한 value들 먼저 넣고 먼저 true일때만 마지못해 호출하는게 check(); expression이나 함수들을 제일 뒤에
//heavy한 연산이나 함수는 뒤로 빼기
console.log(`or: ${value1 || value2 || check()}`);

//&& 연산자로 null체크도 많이 함 false나오면 null

//often used to compress long if-statement
//nullableObject && nullableObject.something

// if(nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('house');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true 타입 변경해서 나옴 문자이긴한데 안에 숫자 5이기 떄문에
console.log(stringFive != numberFive); //false

// === strict equlity, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true


//object equality by reference
const ellie1 = { name:'ellie'};
const ellie2 = { name:'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false 1과2가 다른 레퍼런스 가리키고 있기 때문
console.log(ellie1 === ellie2); //false 1과 2가 다른 레퍼런스 가리키고 있어서 타입이같아도 false
console.log(ellie1 === ellie3); //true ellie3의 레퍼런스가 ellie1이 가리키고 있어서 

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false 0은boolean타입이 아니기때문에
console.log('' == false); //true **
console.log('' === false); //false '' boolean타입이 아닉때문에
console.log(null == undefined); //true  null 과 undefined는 같고 
console.log(null === undefined); //false null과 undefined는 다른 타입


//8. Conditional operations: if
//if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome Ellie!');
}else if (name === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unknown');
}

//9. Ternary operator: ?
// condition ? value1 : value2;
// 가독성 떨어져서 if나 switch 쓰기
console.log(name === 'ellie' ? 'yes' : 'no');


//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


//11. Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//12. do while
// do while loop, body code is executed first,
//then check the condition.
//do 먼저 실행하고 while조건이 맞는지 확인
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);


//for loops, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for:${i}`);
}

for(let i = 3; i > 0; i = i -2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}
//빅오가 n의 2승이기떄문에 CPU에 안좋음

//break 여기서 끝내버림
//continue 지금껏만 skip하고 다음스텝으로
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

for(let i = 0; i < 11; i++){
    if(i % 2 === 0){
        console.log(`q1. ${i}`); 
    }
}
//Q2, iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i< 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}

//루프 레이블? 쓰지 않고 간편하게 작성 가능