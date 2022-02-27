// ------------------------ LOGIN _--------------------------------------

const formLogin = document.getElementById('loginForm');
// console.log(JSON.parse(localStorage.getItem('account')))
let obja= JSON.parse(localStorage.getItem('account'))

console.log(obja)
formLogin.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();

    const email = formLogin.elements['email'].value;
    const pwd = formLogin.elements['password'].value;

    if(email==obja.email && pwd==obja.pwd){
        window.location = "./loginSuccess.html";
    } else if(email != obja.email){
        alert('Nhập email sai, vui lòng nhập lại');
    } else{
        alert('Nhập mật khẩu sai, vui lòng nhập lại');
    }
    
});