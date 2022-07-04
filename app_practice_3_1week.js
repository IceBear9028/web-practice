const child1 = document.querySelector(".spanname .span_name_1");
// const child1 = document.querySelector("span.spanname:first-child h1");
// 아니 이거는 왜 안되는건가????
// ---> 이름으로 접근 함. class이름 접근시 .으로 하는거 잊지 말것!
console.log(child1);


function handleTitleClick(){
    child1.classList.toggle("clicked");
}
//className 을 html에서 변경할 경우, 함수 내부의 이름도 다 바꿔줘야 한다.
// -> 띠라서, 이름을 변수화 하여 한번만 바꿀수 있게 코딩하자.

//html 의 .span_name의 첫번째 요쇼의 class 이름을 'active'로 html에서 바꿈.
child1.addEventListener("click", handleTitleClick);



