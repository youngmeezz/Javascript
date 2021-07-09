// async & await
// clear style of using promise


//1. async
// function fetchUser(){
//     //do network request in 10 secs....
//     reurn 'ellie';
// }

function fetchUser(){
    return new Promise((resolve,reject) =>{
    //do network request in 10 secs....
    return 'ellie';
    });
}
//Promise State - pending(보류)
//Promise Result = undefined

//비동기 실현하는 방법
 function fetchUser(){
    return new Promise((resolve,reject) =>{
    //do network request in 10 secs....
    resolve('ellie');
    });
}
//그래서 resolve나 reject로 해야됨
//Promise State - fulfilled(가득찬)
//Promise Result = ellie
async function fetchUser(){
    //do network request in 10 secs....
    return 'ellie';
}
//async만 함수 앞에 써주면 promise로 알아서 바뀜
//promise를 간단하게 쓰는 syntatic sugar

const user = fetchUser();
user.then(console.log);
console.log(user);


//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    //throw 'error'
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

//chaining보다 동기적인 코드 만들기
// function getBanana(){
//     return delay(1000)
//     .then(()=> 'banana');
// }

//사과와 바나나 한번 따오는 pickFruits
function pickFruits() {
    return getApple().then(apple =>{
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
//또 콜백 지옥 같은 느낌

// async function pickFruits(){
      
//     try{
//     const apple = await getApple();
//     const banana = await getBanana();
//     }catch{
//         return `${apple} + ${banana}`;
//     }
// }


//바나나를 다운받는데 사과가 필요 없구 사과를 다운받는데 바나나가 필요없어서 병렬적으로 기능 수행 위해 
async function pickFruits(){
      
const applePromise = getApple();
const bananaPromise = getBanana();
const apple = await applePromise;
const banana = await bananaPromise;

return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//위처럼 너무 가독성 떨어지는 코드 안씀

// 5. useful Promise APIs 유용한 Promise API
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

//먼저 따지는 첫번쨰 과일만 받아오고 싶을 경우

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);