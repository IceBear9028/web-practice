//노마드 코더
//"바닐라 js 로 크롬 앱 만들기"


// < 3주차 > //
//0. docunemt
// --> 얘는 따로 선언한적이 없지만, 브라우저에서 이미 존재하는 object이다.
// --> document.title을 살펴보면, Document 라고 선언되어있음.
// --> html 확인해보면, <title>Document</title> 이 되어있음을 확인.
// --> html 의 <title>의 이름을 바꾸면, document 에서도 바뀌어 있음을 확인
// --> 결론 : JS는 HTML 을 읽어올수 있고, 변경도 가능하다.
// ex . HTML의 <title>에서 Hello World로 작성. --> 브라우저의 이름이 바뀐다.
// 결론  : html 파일이 그대로 브라우저에 올라와서, 자바스크립트의 document 오브젝트로 표현된다.


//1. HTML in JS
// --> html 파일에 태그 <h1>태그를 넣었음. 이를 확인.
const title = document.getElementById("title");
// --> getElementById("string") > 괄호 내부의 문자열이 포함된 오브젝트의 원소를 찾아주는 함수.
console.dir(title);

const helloKorean = document.getElementById("subtitle");
console.log(helloKorean);
console.dir(helloKorean);


//<script>태그 선언 이후에 h1태그 작성하면 함수가 제대로 작동하지 않음. 왜????

title.innerText = "aaaaa" ;
// 이처럼 자바스크립트의 오브젝트에서 직접 html을 건드릴 수 있다.
console.log(title.id);
console.log(title.namespaceURI);
console.log(title.className);
//className은 비어있어서 아무것도 안나옴.

//2. className 활용
const hello = document.getElementsByClassName("hello");
//확인하면 classname해당되는 코드들이 어레이 형태로 출력
console.log(hello);

const hello_ = document.querySelector(".hello h1");
//css형태로 사용된다.
//class 이름 내의 작은 element를 찾아준다.
//--> 단,같은 element들이 여러개인 경우, 첫번째 하나의 elemrnt 만 찾는다.
//앞으로도 자주 사용할 함수
const hello_1 = document.querySelectorAll(".hello h1");
const hello_2 = document.querySelectorAll(".hello");
//hello 라는 이름의 클래스는 모두 갖고 온다.
// 두 코드가 하는 일은 같다.
// getElementsByid, querySelector 모두 같은 기능으로도 사용가능.
console.log(hello_);
console.log(hello_1);
console.dir(hello_2);

//3 + 4. Events
const hello_3 = document.querySelector("div.hello_:first-child h1");
//class 이름이 hello를 가진 div에서 첫번째 h1을 찾아 오는 기능
//시바로미 왜 안되는건데?
console.log(hello_3);

hello_.style.color = "blue";

//js는 이벤트를 listening을 하는것이 주 목적
let i = 0;

function handleTitleClick(){
    console.log("버튼 눌렀니?");
    hello_.style.color = "red";
    i = i+1;
    if(i > 10){
        console.log("그만해 새끼야");
    };
};
function handleMouseEnter(){
    hello_.innerText = "마우스 여깄다!";
};
function handleMouseLeave(){
    hello_.innerText = "마우스 없어졌어!";
};

//hello_.addEventListener("click",handleTitleClick);
hello_.addEventListener("mouseenter",handleMouseEnter);
hello_.addEventListener("mouseleave",handleMouseLeave);


//addEventLustener("여러 input타입", function) <-function에 ()넣지 않는것 주의
//input되었을 때, 함수가 작동된다.

//정리 --> html에서 필요한 element를 js로 들고와서, 함수를 실행시킴.

//5. eventlistening
hello_.onclick = handleTitleClick;
// == hello_.addEventListener("click",handleTitleClick);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function copyPaste(){
    alert("복사하지마라 뒤지기 싫으면");
};
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",copyPaste);
//이벤트 리스닝이 생각보다 존나 좋음. 할수 있는게 많음.

//6. 

hello_.addEventListener("click", handleTitleClick);

//7. CSS
const h1 = document.querySelector("span.spanname.span_name");
console.log(h1)

function handleTitleClick(){
    h1.className = "active";
}
h1.addEventListener("click", handleTitleClick);
