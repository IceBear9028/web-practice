//노마드 코더
//"바닐라 js 로 크롬 앱 만들기"


// < 2주차 > //
//1. console창에서 띄우기
console.log("i hate pizza"); 
console.log("hello my name is lee. nice to meet you");

//2. alert() 이용해서 경고창 띄우기
window.alert(1+1);

//3. variable 선언, 쓰기
// let, var, const 3개.

let string = "lee sang yoon"; // string type
let age = 30; //number data type (int)
let _float = 1.5; //number data tupe (float)
let t_f = true; //boolean type

age = age + 3; // 숫자형 변수에 바로 계산해도 됨

console.log(age, string, t_f);
console.log(age + _float); // 파이썬 마냥 숫자형 변수끼리 + 해도 계산됨
console.log("hello" + "introduce my self"); //이것도 파이썬 처럼 됨

// ++ 3.1 . varible 선언시 let,const 차이점 
//const >> constant함 : 변수 선언시 항상 일정함. 튜플 개념
//let >> 변수 선언후, 이를 계속 업데이트 할 수 있음.

string = "lsy"; //위에서 이미 선언함. 재선언 가능

const string_ = "icebear";
//string_ = "icebear_9028" //console 에 뜨기도 전에 에러남.

console.log(string); // 정상 작동함
//string_ = "icebear_9028" //console 에 뜨기도 전에 에러남.

var string_1 = "classic";
console.log(string_1);

string_1 = 3;
console.log(string_1);
//var은 예전에 사용하던 변수선언. let,const 처럼 규칙이 없음.


//4. Datatype 4가지
let TF = true; //true

console.log(TF);

TF = false; //false

console.log(TF);

let Empty_; //undefined

console.log(Empty_) ;

Empty_ = null; //null

console.log(Empty_);


//5. Array
const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

console.log(week[5]); // 0 >>> 첫번째 원소이므로, 마지막에 6번째 열 추가

week.push('sun');

console.log(week[6], week[10]);
// push 를 통해서 어레이에 원소 추가
// ++ week[10]값은 undefined 가 나올 것. error 가 뜨지 않음. 신기하네


//6. Object
// 파이썬의 딕셔너리 형태랑 비슷함.
const player = {
    name: 'IceBear',
    points : 100,
    sex : 'male',
};
console.log(player.name);
console.log(player);
console.log(player['sex']);

player.points = 300; //중요! constant로 저장했음에도 불구하고 내부데이터는 변경가능

console.log(player);
//player = false  --> 하지만, 이렇게 전체를 바꾸는 것은 불가능
//console도 마찬가지로 console.~~~ 라는 말을 붙임 --> console도 오브젝트의 종류인거임. 

player.level = 50; //중요! object에 다른 데이터 추가 가능
console.log(player);


//7. Function_1
function sayHello(){
    console.log('Hello, my name is  ');

}
sayHello();
sayHello();


//8. Function_2

function simple(a,b,c){
    result = a*b*c;
    console.log(result);
}
simple(3,4,6);
simple(3,4,6,6,7,8,9,10)
//둘은 서로 같은 값이 나온다.
//funstion은 변수의 가장 맨앞 부터 순서대로만 들어가며, 나머지 변수들은 쓰이지 않는다.




//이렇게 object 내에서도 함수를 만들어 사용할 수 있다.
const player_1 = {
    name : "Icebear9028",
    sayhello: function (otherName){
        console.log("hey " + otherName + ' nice to meet you');
    }
}

player_1.sayhello("polar Bear");

//9 + 10. Recap(리스트와 관련됨)
const a = 'hello';
const list1 = ['a', 'b', 345, true, false, a];

console.log(list1[0], list1[1], list1[5]);

list1[0] = 'water';

console.log(list1[0]);

list1.push('what he hell'); // push를 통해서 리스트 끝에 데이터 추가

console.log(list1[6]);

console.log(player_1)

console.log(console)
//console 도 오브젝트의 형태임을 확인하였음.

player_1.level = 100;
player_1.money = '130원'
player_1.region = '노바'
player_1.abs = 10
//이러한 형식으로 오브젝트에 데이터를 추가할 수 있음을 확인.
//데이터 추가 순서는 파이썬의 insert 랑 같음.
///--> 단, 오브젝트에 함수가 있는 경우 함수 위치는 가장 마지막에 있음. 

console.log(player_1)


//11 + 12. return, recap_2

const cal = {
    sum:function(x,y){
        sumRe = x + y;
        return sumRe;
    }, // <-function 끝나면 꼭 ,(쉼표) 넣을것!
       // 파이썬의 class 랑 비슷한 맥락이지만 문법이 다르다!
    div:function(x,y){
        divRe = x / y;
        return divRe;
    },
    remainder:function(x,y){
        remainRe = x%y;
        return remainRe;
    }
}
holeResult = cal.sum(3,5) + cal.div(10,3);

console.log(holeResult);


const trash = {
    hey_: function(){
        return 'Hello';
    },
    cup_ : function(x,y){
        result = x + y;
        return 'garbage';
    },
    thisIsFunction: function(x,y){
        result = x/y;
        return result;
    }
}

console.log(trash.cup_(1,3), trash.thisIsFunction(10,20));


//13 + 14 + 15. 변수 type변환, if, else 조건문

const ageInput = prompt("how old are you?");
//사실, 프롬포트 띄어서 넣는것은 거의 사용하지 않는다고 함.

console.log(ageInput, typeof ageInput);
//prompt에서 입력된 값은 문자열 형태
//이를 문자형에서 숫자형으로 변환할 필요가 있음.

console.log(typeof(ageInput), typeof(parseInt(ageInput)));
//log이기 때문에 변수type은 변하지는 않고 출력만 된다.

nanNumber = NaN;
//console.log(typeof(parseint(NanNumber)));
//--> 이는 Nan 값은 변수type를 변환할 수 없다.

const ageInput1 = parseInt(prompt('how old are you ??'))

console.log(isNaN(ageInput1))
//NaN : Not a Number --> '숫자가 아님'을 뜻함.
//isNaN : 변수가 NaN(변수가 숫자형이 아님)--> true
//        변수가 NaN아님(변수가 숫자형임) --> false 출력

if(isNaN(ageInput1)){
    console.log('나이를 다시 입력하세요.')
}
else if(ageInput1 < 18){
    console.log('어린이는 안된다. 저리가')
}
else {
    console.log('welcome to the hell')
}
// && -> and 연산자 : a && b >> a,b모두 만족해야 한다.
// || -> or 연산자 : a || b >> a,b 둘 중 하나만 만족해도 된다.

//ㅇㅇ
//hello world
//test_1
