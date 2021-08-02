'use strict'

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits =['apple','banana'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //undefined

console.log(fruits[fruits.length-1]); //���� ������ �ε��� �޾ƿ�

console.clear();
//3. Looping over an array
//print all fruits
// a. for
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for if
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach API ȣ�� ������� �����̰� �Ķ���ʹ� ���� ���� �������� �Ẹ�鼭 ����
fruits.forEach(function(fruit, index, array) {
    //console.log('he'); //���, �ٳ��� 2�� �־ he 2 print
    console.log(fruit, index, array);
});

fruits.forEach((fruit) => console.log(fruit));
   /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the
     * callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     * 
     * forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;
      �ݹ��Լ��� ��, �ε���, �迭 �� ������� 
      forEach is All arrayList writen by myself
   */
//d. Addition, deletion, copy
//push : add an item to the end
fruits.push('strawberry','peach');
console.log(fruits)
//pop 
const poped = fruits.pop();
console.log(poped);
fruits.pop();
console.log(fruits);

//unshift : add an time to the begining 
fruits.unshift('apple','banana');
console.log(fruits);

//shift : remove an item from the begining
fruits.shift();
console.log(fruits);
    

//note!! shift, unshift are slower than pop, push
//remove an item by index position

fruits.push('strawberry','peach','lemon');
console.log(fruits);
fruits.splice(1);
console.log(fruits); // not deny want index => all index you first written deleted

console.clear();


fruits.push('starwberry','peach','lemon');
console.log(fruits);
fruits.splice(1,1); //banana only deleted
console.log(fruits);
fruits.splice(1,1,'young apple','water melon'); //add  ������ ���� �� �����ϴ�
console.log(fruits);

//combine two arrays
const fruits2 = ['mango', 'penance'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

   /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     */
    //concat(...items: ConcatArray<T>[]): T[];


//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('banana')); //0
console.log(fruits.indexOf('water melon')); //2
console.log(fruits.indexOf('cake')); //-1

// includes
console.log(fruits.includes('banana')); //true
console.log(fruits.includes('cake')); //false

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));



const popped = fruits.pop();
console.log(popped);

fruits.splice(1,1,'aaaaple'); //["banana", "aaaaple", "water melon", "lemon"]
console.log(fruits);

fruits.splice(1,0,'aaaaple'); //fruits.splice(1,1,'aaaaple'); //["banana", "aaaaple", "water melon", "lemon"]
console.log(fruits);
