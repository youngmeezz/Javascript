'use strict'
//프로그래밍 효율적으로 공부하는 팁 라이브러리 공부 정의된 api 로 와서 정확하게 코멘트, 파라미터, 리턴값 + api가 object자체를 변형시키는 object의 상태는 변형시키지 않는지 확인

//Q1. make string out of an array
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string. 모든  배열의 값을 더해서 구분되어져있는 구분하여서 string 값으로 return 한다.
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */
     //join(separator?: string): string; 파라미터에 구분자 넣어도 되고 안넣어도됨
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join();//구분자 넣어도 되고 안넣어도됨 자동으로 콤마가 들어가서 배열이 string으로  
    fruits.join(', and'); //구분자가, and    
    console.log(result);
}

//Q2. make an array out of a string
/** es5에서 확인
     * Split a string into substrings using the specified separator and return them as an array. 구분자를 사용해서 string 값을 배열로 바꿔줌
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
 //split(separator: string | RegExp, limit?: number): string[]; //2가지 파라미터 구분자(string이거나 정규표현식),limit(리턴 받을 배열의 사이즈도 지정 가능) 
{
    const fruits = 'apple,kiwi,banana,cherry';
    const result = fruits.split(',',2); //사과랑 키위만 받을 수도 있음 split은 구분자 꼭 필요
    console.log(result);
}

//Q3. make this array look like this : [5,4,3,2,1]
    /**
     * Reverses the elements in an array in place.
     * This method mutates the array and returns a reference to the same array.
     */
     //reverse(): T[];
{
    const array = [1,2,3,4,5];
    const result = array.reverse(); //배열 자체도 변화시키고 return값도 변화를 시킨다.
    console.log(result);
    console.log(array); // 배열 자체도 [5,4,3,2,1] 로 바뀌는거 확인하기!!
}

//Q4. make new array without the first two elements 새로운 배열을 만들어야한다 1,2 원소를 제외하고
   /**
     * Returns a copy of a section of an array. 배열의 특정한 부분을 리턴 하는 것
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */
    //slice(start?: number, end?: number): T[]; //start는 배열에 시작하는 index, end도 배열에 끝나는 index 마지막 값은 포함 안됨
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5); //배열에서 원하는 부분만 리턴하는것
    console.log(result); //[3,4,5]
    console.log(array); //[1,2,3,4,5]
    const result2 = array.splice(0, 2); //배열자체를 수정하는 아이 이거로 하면 안됨 새로운 배열을 만드는게 아님
    console.log(result2); //[1,2] 결과는 앞에서 2개 뺴고 다 지운 형태
    console.log(array); //[3,4,5] //배열 자체는 앞에 두개가 빠진 상태
}


class Student {
    constructor(name, age, enrolled, score){
        this.name =name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90), //3번째까지 하고 보니까 마지막에 멈춤
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q5. find a student with the score 90

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined //배열에서 첫번쨰로 찾아진 원소를 리턴한다.  전달된 콜백함수가 true일때 리턴함 찾지 못하면 undefined리턴
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending //predicate라는 콜백 함수는 모든 요소들 마다 호출이 되어진다. true를 리턴하면 바로 함수를 멈추고 true된 요소를 리턴한다. 
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    // find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    // find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;  //predicate(this,value,index,obj인자가 전달 값이 value is S 불리언값으로 전달) 와 thisArgs 2가지 파라미터 전달 콜백 함수를 받는다. 
 
{
    const result = students.find(function (student, index){
        //console.log(student, index);
        return student.score === 90;
    });
    console.log(result);
}

{
    const result = students.find((student)=> student.score === 90);
    console.log(result);
}

//Q6. make an array of enrolled students
 /**
     * Returns the elements of an array that meet the condition specified in a callback function. //filter도 콜백함수 전달해서 true값 리턴하는 것만 모아서 전달 
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
  //filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

//Q7. make an array containing only the students' scores
// result should be : [45,80,90,66,88]
 /**
     * Performs the specified action for each element in an array. //배열안에 요소 한가지 한가지를 다른 요소로 변환해준다.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */

  //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
{
    const result = students.map((student) => student.score * 2); //배열안의 요소를 바꾸고 싶을때 map사용
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50
 /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param predicate A function that accepts up to three arguments. The some method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
  //some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; //배열의 요소중에서 콜백함수중에서 리턴 true되는지 확인함

{
    //배열중에 어떤것이라도 있는지 없는지 체크 some /  모든 배열 요소 조건 만족 필요는 every
    console.clear();
    const result = students.some((student) => student.score < 50); //50보다 작은 학생이 한명이라도 있으면 true
    console.log(result); //true 리턴

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); //true
}

//Q9. compute sutdents' average score
  /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. //콜백함수는 배열안에 모든 요소들 마다 호출이 된다. filter,some,every와 비슷 리턴되는 값은 함께 누적된 값을 리턴
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */ //콜백함수에서 리턴되는 값은 함께 누적도니 결과값을 리턴
   //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; //콜백함수를 전달하고 initial value를 전달 
   //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    //reduce는 값을 누적할때 씀 reduceRight는 값을 거꾸로 쓸때 사용
{
    const result = students.reduce((prev, curr) => {
        console.log('---------------');
        console.log(prev);
        console.log(curr); //배열하나하나씩 curr에 전달 
        return prev + curr.score; //리턴하는 값이 순차적으로 prev로 전달됨
    },0); //처음 시작 value 가 0부터 시작됨 
    console.log(result); //369
}


{
    const result = students.reduce((prev, curr) => prev + curr.score,0) 
    console.log(result / students.length); //369
}

//Q10. make a string containing all the scores.
// result should be : '45, 80, 90, 66, 88'
{
    const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
}

//Bonus ! do Q10. sorted in ascending order
//result should be : '45, 66,80, 88, 90'
  /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
 //sort(compareFn?: (a: T, b: T) => number): this; //콜백함수에는 이전값과 현재값을 전달하게 되는데 만약 -값을 리턴하면 첫번째가 뒤에것보다 작다고 간주되어 정렬됨 
{
    const result = students
    .map(student => student.score)
    .sort((a,b) => a-b) //음수가 나오면 앞에가 더 크면 뒤로보내서 정렬시킴 오름차순
    .join();
    console.log(result);
}