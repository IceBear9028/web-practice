const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit(element){
    const username = loginInput.value;
    element.preventDefault();
    console.log(element);
}

loginForm.addEventListener("submit",onLoginSubmit);
//submit은 버튼을 클릭하거나 엔터를 누를때 발생.

onLoginSubmit();


//onsole.log(loginInput);
//console.log(loginButton);
