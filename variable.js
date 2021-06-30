//Javascript is ver flexible
// flexible === dangerous
// added ECMAScript 5
// use this for Valina Javascript
'use strict';

//2. Variable ���� mutable ���ϱ� ����
//let (added in ES6) -> javascript �ֽ�
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


//before var ��� ���� -> �������� �� �Ҵ� ����
// var dont't ever use this!
// var hoisting (move declaration from bottom to top) ����÷��ִ� ��𼱾��ϴ���
// has no block scope
// ������ ���� undefined ����
// console.log(age);
// age = 4;
// var age;
// var �� block scope�� ����

// ����̿��ؼ� ���� �����ص�
{
    age=4;
    var age;
}
console.log(age);

//3. Constatns ��� Immutable �ظ��ϸ� ���� ���� �ȵ�
// fovor immutable data type always for a few reasons;
// -security ���Ȼ��� ����
// -thread safety ���� �����ؼ� ���� thread���� ���� ������ �ʴ� �� ����ϱ�
// -reduce human mistakes �ڵ带 �����ϰų� �ٸ� ������ ������ ���� �Ǽ� ���� 
const daysInWeek = 7;
const maxNumber = 5;


//4. Variable types
// primitve, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// ���� ������� type�� �� number��

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
//Ư���� ���� �� dom��Ҹ� ���ؼ� �� Ư�� �Ҷ� 0,�������� �ƴ��� �׷��� �� Ȯ�� �ʿ�

//bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890; //over(-2*53) ~ 2*53(-2�� 53�� ~2�� 53��) �ֱٿ� �߰��� chrome, firefox�� ����
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


//null null�̶�� ���� �� ����
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

//undefined ���� �������� ���� �ƹ��� ���� �Ҵ� �ȵ�
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifier for objects
// ������ ��Ʈ�� �� id ������ false�� ��µ�
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//���� �ɺ��� ����� ������
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// symbole�׳� ��½� error symbol1.description�ʿ�
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
console.log(text.charAt(0)); //�߰��� ���ڷ� type�� �ٲ㼭 ������ �߻� runtime�߿� type�������� runtime error�� �߻�

//TypeScript �� ������ �� javascript ���� typescript
// trans compiler �� �̿��ؾߵǼ�

// object, real-life object, data structure ���ǰ� ��ü ��ǥ�ϴ� �ڽ���
const youngmee = { name: 'youngmee', age:27};
//youngmee��� object�� ����
// const�� ���� �ѹ� �Ҵ�� object�� �ٸ� �ɷ� �ٲ�� ����
// youngmee.name youngmee.age
youngmee.age = 22;// �̷��� ���� ����

//Playground �ڵ� ������ ����� console.log Ȱ���ϱ�