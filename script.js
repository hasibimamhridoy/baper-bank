//selector
const email = document.getElementById('email')
const password = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')
console.log(loginBtn);

const loginPassword = 1234
const loginEmail = 'h@gmail.com'

loginBtn.addEventListener('click',function(event){
    event.preventDefault()
    if(email.value == loginEmail && password.value==loginPassword){
        loginBtn.innerText='Login Successfull'
        location.href = 'dashBoard.html';
    }

    else{
        loginBtn.innerText='Login Faild'
    }
})

