//Javascript is ver flexible
// flexible === dangerous
// added ECMAScript 5
// use this for Valina Javascript
'use strict';

//2. Variable 변수 mutable 변하기 쉬운
//let (added in ES6) -> javascript 최신
let globalName = 'global name';
{
    let name = 'youngmee';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);


//before var 사용 금지 -> 선언전에 값 할당 가능
// var dont't ever use this!
// var hoisting (move declaration from bottom to top) 끌어올려주다 어디선언하던지
// has no block scope
// 맨위로 가서 undefined 나옴
// console.log(age);
// age = 4;
// var age;
// var 는 block scope이 없음

// 블록이용해서 변수 선언해도
{
    age=4;
    var age;
}
console.log(age);

//3. Constatns 상수 Immutable 왠만하면 값이 변경 안됨
// fovor immutable data type always for a few reasons;
// -security 보안상의 이유
// -thread safety 동시 접근해서 변경 thread에서 값이 변하지 않는 것 사용하기
// -reduce human mistakes 코드를 변경하거나 다른 개발자 변경할 떄도 실수 방지 
const daysInWeek = 7;
const maxNumber = 5;


//4. Variable types
// primitve, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// 값에 상관없이 type이 다 number임

const count = 17;//integer
const size = 17.1;//decimal number
console.log('value: ${count}, type : ${typeof count}');
console.log('value: ${size}, type : ${typeof size}');

//number - sepcial numberic values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
//특별한 숫자 값 dom요소를 통해서 좀 특이 할때 0,숫자인지 아닌지 그런거 다 확인 필요

//bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890; //over(-2*53) ~ 2*53(-2의 53승 ~2의 53승) 최근에 추가됨 chrome, firefox만 지원
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


//boolean
//false:0 ,null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//null null이라는 값이 들어가 있음
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

//undefined 텅텅 정해지지 않음 아무런 값이 할당 안됨
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifier for objects
// 동일한 스트링 값 id 이지만 false로 출력됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//같은 심볼을 만들고 싶을때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// symbole그냥 출력시 error symbol1.description필요
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`)

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type:${typeof text}`);
console.log(text.charAt(0)); //중간에 숫자로 type을 바꿔서 에러가 발생 runtime중에 type정해져서 runtime error가 발생

//TypeScript 가 나오게 됨 javascript 위에 typescript
// trans compiler 를 이용해야되서

// object, real-life object, data structure 물건과 물체 대표하는 박스들
const youngmee = { name: 'youngmee', age:27};
//youngmee라는 object를 만들어냄
// const로 지정 한번 할당된 object는 다른 걸로 바뀔수 없음
// youngmee.name youngmee.age
youngmee.age = 22;// 이렇게 변경 가능

//Playground 코딩 놀이터 만들기 console.log 활용하기