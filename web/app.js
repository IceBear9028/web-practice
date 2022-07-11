const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit(element){
    element.preventDefault();
    console.log(element);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);
//submit은 버튼을 클릭하거나 엔터를 누를때 발생.

//preventDefault는 객체의 동작이 실행되는것을 막아준다.