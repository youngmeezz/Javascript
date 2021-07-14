'use strict'
//���α׷��� ȿ�������� �����ϴ� �� ���̺귯�� ���� ���ǵ� api �� �ͼ� ��Ȯ�ϰ� �ڸ�Ʈ, �Ķ����, ���ϰ� + api�� object��ü�� ������Ű�� object�� ���´� ������Ű�� �ʴ��� Ȯ��

//Q1. make string out of an array
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string. ���  �迭�� ���� ���ؼ� ���еǾ����ִ� �����Ͽ��� string ������ return �Ѵ�.
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */
     //join(separator?: string): string; �Ķ���Ϳ� ������ �־ �ǰ� �ȳ־��
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join();//������ �־ �ǰ� �ȳ־�� �ڵ����� �޸��� ���� �迭�� string����  
    fruits.join(', and'); //�����ڰ�, and    
    console.log(result);
}

//Q2. make an array out of a string
/** es5���� Ȯ��
     * Split a string into substrings using the specified separator and return them as an array. �����ڸ� ����ؼ� string ���� �迭�� �ٲ���
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
 //split(separator: string | RegExp, limit?: number): string[]; //2���� �Ķ���� ������(string�̰ų� ����ǥ����),limit(���� ���� �迭�� ����� ���� ����) 
{
    const fruits = 'apple,kiwi,banana,cherry';
    const result = fruits.split(',',2); //����� Ű���� ���� ���� ���� split�� ������ �� �ʿ�
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
    const result = array.reverse(); //�迭 ��ü�� ��ȭ��Ű�� return���� ��ȭ�� ��Ų��.
    console.log(result);
    console.log(array); // �迭 ��ü�� [5,4,3,2,1] �� �ٲ�°� Ȯ���ϱ�!!
}

//Q4. make new array without the first two elements ���ο� �迭�� �������Ѵ� 1,2 ���Ҹ� �����ϰ�
   /**
     * Returns a copy of a section of an array. �迭�� Ư���� �κ��� ���� �ϴ� ��
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */
    //slice(start?: number, end?: number): T[]; //start�� �迭�� �����ϴ� index, end�� �迭�� ������ index ������ ���� ���� �ȵ�
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5); //�迭���� ���ϴ� �κи� �����ϴ°�
    console.log(result); //[3,4,5]
    console.log(array); //[1,2,3,4,5]
    const result2 = array.splice(0, 2); //�迭��ü�� �����ϴ� ���� �̰ŷ� �ϸ� �ȵ� ���ο� �迭�� ����°� �ƴ�
    console.log(result2); //[1,2] ����� �տ��� 2�� ���� �� ���� ����
    console.log(array); //[3,4,5] //�迭 ��ü�� �տ� �ΰ��� ���� ����
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
    new Student('C', 30, true, 90), //3��°���� �ϰ� ���ϱ� �������� ����
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q5. find a student with the score 90

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined //�迭���� ù������ ã���� ���Ҹ� �����Ѵ�.  ���޵� �ݹ��Լ��� true�϶� ������ ã�� ���ϸ� undefined����
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending //predicate��� �ݹ� �Լ��� ��� ��ҵ� ���� ȣ���� �Ǿ�����. true�� �����ϸ� �ٷ� �Լ��� ���߰� true�� ��Ҹ� �����Ѵ�. 
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    // find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    // find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;  //predicate(this,value,index,obj���ڰ� ���� ���� value is S �Ҹ������� ����) �� thisArgs 2���� �Ķ���� ���� �ݹ� �Լ��� �޴´�. 
 
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
     * Returns the elements of an array that meet the condition specified in a callback function. //filter�� �ݹ��Լ� �����ؼ� true�� �����ϴ� �͸� ��Ƽ� ���� 
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
     * Performs the specified action for each element in an array. //�迭�ȿ� ��� �Ѱ��� �Ѱ����� �ٸ� ��ҷ� ��ȯ���ش�.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */

  //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
{
    const result = students.map((student) => student.score * 2); //�迭���� ��Ҹ� �ٲٰ� ������ map���
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
  //some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; //�迭�� ����߿��� �ݹ��Լ��߿��� ���� true�Ǵ��� Ȯ����

{
    //�迭�߿� ����̶� �ִ��� ������ üũ some /  ��� �迭 ��� ���� ���� �ʿ�� every
    console.clear();
    const result = students.some((student) => student.score < 50); //50���� ���� �л��� �Ѹ��̶� ������ true
    console.log(result); //true ����

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); //true
}

//Q9. compute sutdents' average score
  /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. //�ݹ��Լ��� �迭�ȿ� ��� ��ҵ� ���� ȣ���� �ȴ�. filter,some,every�� ��� ���ϵǴ� ���� �Բ� ������ ���� ����
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */ //�ݹ��Լ����� ���ϵǴ� ���� �Բ� �������� ������� ����
   //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T; //�ݹ��Լ��� �����ϰ� initial value�� ���� 
   //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    //reduce�� ���� �����Ҷ� �� reduceRight�� ���� �Ųٷ� ���� ���
{
    const result = students.reduce((prev, curr) => {
        console.log('---------------');
        console.log(prev);
        console.log(curr); //�迭�ϳ��ϳ��� curr�� ���� 
        return prev + curr.score; //�����ϴ� ���� ���������� prev�� ���޵�
    },0); //ó�� ���� value �� 0���� ���۵� 
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
 //sort(compareFn?: (a: T, b: T) => number): this; //�ݹ��Լ����� �������� ���簪�� �����ϰ� �Ǵµ� ���� -���� �����ϸ� ù��°�� �ڿ��ͺ��� �۴ٰ� ���ֵǾ� ���ĵ� 
{
    const result = students
    .map(student => student.score)
    .sort((a,b) => a-b) //������ ������ �տ��� �� ũ�� �ڷκ����� ���Ľ�Ŵ ��������
    .join();
    console.log(result);
}