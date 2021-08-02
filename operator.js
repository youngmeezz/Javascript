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

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('house');
    }
    return true;
}

//&& 연산자로 null체크도 많이 함 false나오면 nlull

//often used to compress long if-statement
//nullableObject && nullableObject.something