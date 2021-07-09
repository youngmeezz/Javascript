'use strict'

//Promise 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object입니다.

//Promise is a Javascript object for asynchronous operation.
//State : pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer (불필요한 네트워크 통신 하지 않기)
// when new Promise is created,the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');//성공적으로 데이터 받아오면 resolve라는 callback함수 수행
        
        //네트워크 호출하다가 resolve 대신 reject 호출
        //실패했을때 호출하는 함수 reject
        //reject(new Error('no network')); //Error라는 클래스 자바스크립트에서 제공해줌

    }, 2000); //원하는 callback함수를 2초 있다가 할수 있게 변환
});
// promise 안에 network통신을 바로 할 수 있음
// 만약 네트워크 요청을 사용자가 요구했을떄만 버튼 눌렀을떄만 사용자가 요구하지도 않았는데 불필요한 네트워크 실행될 수 도 있으니 유의 필요

//2. Consumers: then, catch, finally
// then 이라는 것은 promise가 정상적으로 수행이 되어서 
// 정상적으로 resolve라는 callback 함수로 전달한 값이 value라는 parameter값으로 전달되어 옴
// 에러 발생이유 then이라는 성공적인 case만 했기 떄문에 unCaught에러 나옴
// catch만들어서 에러 발생시 떨어지는 값 호출해줌
promise
    .then((value) => {
        console.log(value);
})
    .catch(error => {
        console.log(error);
})
    .finally(() => {
        console.log('finally');
    });

//API들을 묶고 묶은 chaining이 있음 map도 같은 array를 return 하기 떄문에 

//promise를 이용해서 then 성공 catch 실패 finally 성공 실패 상관 없음

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000); // 여기서 1초
});

fetchNumber
.then(num => num * 2) //2
.then(num => num * 3) //6
.then(num => {
    return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(num-1),1000); //(6-1) =  5 여기서 1초
});
})
.then (num => console.log(num)); //5가 출력됨
//총 2초가 소요됨
//then은 값을 전달할수도 또 다른 비동기인 promise를 전달할수도 
//다른 비동기 처리
//promise를 chaining 했을떄 어떻게 핸들링 하는지

// 4.Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'),1000);
    });

const getEgg = () =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${'hen'} => egg`),1000);
        setTimeout(() => reject(new Error(`error! ${'hen'} => egg`)),1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => meal`),1000);
    });

    // getHen()
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));

    //여기서 좀 더 간단한 코딩
    getHen()
    .then(getEgg) //바로 뒤에 에러 상황 catch 넣어야 됨
    .catch(error => { //전달된 에러를 빵으로 대체 계란 받아오는거 문제 생겨도 전체 promise chain을 빵꾸처리 안함
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);