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
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q5. find a student with the score 90
{
    const result = students.find(function (student, index){
        return student.score === 90;
    })
}