const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

const username = loginInput.value;


function btnclick(){
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("submit",btnclick);


console.log(loginInput);
console.log(loginButton);
console.log(username);
