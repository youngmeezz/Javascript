//JSON
//JavaScript Object Notation

// 1.Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json); //true로 확인 가능

json = JSON.stringify(['apple','banana']);
console.log(json); //배열 타입으로 보이면서 싱글 쿼트가 아님 ["apple","banana"] 더블 쿼트 주의 JSON의 규격사항 배열처럼 보임

// object를 json으로 변환

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    //symbol: Symbol("id"),
    jump : () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

//json통제
json = JSON.stringify(rabbit,['name','color','size']); //내가 원하는 property만 변환하고 싶을 경우 JSON으로 만들고 싶은 데이터가 name만 있을경우 {"name":"tori"} 로 JSON형식으로 변환시켜줌
console.log(json);

//key와 value를 전달하는 callback함수

json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value:${value}`);
    return value;
});

//세밀하게 JSON통제하고싶을때 callback 함수 쓰세요
json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value:${value}`);
    return key === 'name' ? 'youngmee' : value;
});//key가 name이라는 것이 들어오면 무조건 youngmee값을 넣어주고 key가 name이 아닌 경우에 original의 value를 쓴다


console.log(json);


//{"name":"tori","color":"white","size":null,"birthDate":"2021-07-07T02:24:20.849Z"}
//jump함수 없는 이유 object에 있는 데이터가 아니기 떄문에
//symbol같은 javascript에만 있는 데이터도 JSON에 포함 안됨


//2. JSON to Object
//parse(json)
JSON.parse

console.clear();

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value:${value}`); //모든 key와 value들이 출력됨
    //return value;
    return key ==='birthDate' ? new Date(value) : value;
});
//const obj = JSON.parse(json);
console.log(obj); 

//{name: "tori", color: "white", size: null, birthDate: "2021-07-07T04:51:04.664Z"}

rabbit.jump(); //함수는 serialize될때 포함 안됨

//obj.jump(); //가 없어서 에러가 됨

//rabbit이라는거 JSON으로 변환할떄는 함수가 포함되지 않았기 떄문에
//데이터들만 JSON으로 jump라는 method포함 안되고 obj.jump();는 없는것임

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); //이렇게 해가지구는 에러가 남

//아래와 같은 parse를 하고, 그다음에 reviver함수로 key,value값을 callback 해야지만 값이 obj에도 세팅되서
// const obj = JSON.parse(json, (key, value) => {
//     console.log(`key: ${key}, value:${value}`); //모든 key와 value들이 출력됨
//     //return value;
//     return key ==='birthDate' ? new Date(value) : value;
// });
console.log(obj.birthDate.getDate()); //에러 안나는 버전