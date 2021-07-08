'use strict';

function printImmediately(print) {
    print();
}

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}


//JavaScript is synchronous 자바스크립트는 동기적인 아이
//Execute the code block in order after hoisting.(최상단으로 끌어올리다) -> 코드 가독성 떨어지고 어디서 에러나는지 찾기 힘듬
//그래서 var 대신에 let이나 const 쓰는 이유
//hoisting : var, function declaration
console.log('1'); //순서 1번 (동기)
setTimeout(function(){
    console.log('2'); //1초 있다가 브라우저 api니까 1초뒤에 전달해준 callback으로 호출 message queue, stack, micro? 정리일단 아직
},1000);// 지정 시간이 지나면 callback함수 호출 전달해준 함수를 나중에 불러줘 배열 함수 map ,filter//순서 4번(비동기1초있다 실행)
console.log('3'); //순서 2번 (동기)

//arrow funciton

setTimeout(()=> console.log('2'),1000);  //순서 5번(비동기1초있다 실행)


//Synchronize callback 동기적으로 실행
//function printImmediately(print) {
//    print();
//}
printImmediately(() => console.log('hello')); //함수도 hoisting이 되니까 위로 올라가서 표현되었을것임 //순서 3번(동기)

//Ansynchronize callback 예측 불가 비동기적으로 실행
// function printWithDelay(print, timeout){ //함수가 hoisting 되서 위로 올라감
//     setTimeout(print, timeout);
// }
printWithDelay(() => console.log('async callback'), 2000); //2초 있다가 실행(비동기2초있다 실행)


//Callback Hell example 따로 백엔드를 구현 안해서 그냥 setTimeout 브라우저에서 실행하기
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        });
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    }, 
    (error) => {
        console.log(error);
    }
);


//콜백함수 문제점 그안에서 다른것 호출 또다른것 호출 + 전달 반복 -> 콜백 지오
//읽기 너무 거북 가독성 떨어짐 비즈니스 로직 이해하기도 어렵
//로그인 이후 -> 사용자 데이터 받아옴 -> 한눈에 알아보기 어렵 -> 에러 발생이나 디버깅 하기도 너무 어렵, 유지보수도 너무 어렵
//promise와async 조금도 병렬적으로 효율적으로 네트워크 통신 하는 방법 뒤에 나옴 너무 기본적인 지식
