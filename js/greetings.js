const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector('#loginForm input');
const greeting = document.querySelector('#greeting');
let HIDDEN = 'hidden';
let USERNAME = 'username';

function onLoginEvent(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME,username);
    paintGreetings(localUser);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

const localUser = localStorage.getItem(USERNAME);

if (localUser === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener('submit',onLoginEvent);
}else {
    paintGreetings(localUser);
}