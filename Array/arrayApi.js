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