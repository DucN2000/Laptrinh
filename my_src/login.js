// ------------------------ LOGIN _--------------------------------------

const formLogin = document.getElementById('loginForm');
// console.log(JSON.parse(localStorage.getItem('account')))
let obja= JSON.parse(localStorage.getItem('account'))

console.log(obja)
formLogin.addEventListener('submit', (event) => {

    event.preventDefault();

    const email = formLogin.elements['email'].value;
    const pwd = formLogin.elements['password'].value;

    if(email==obja.email && pwd==obja.pwd){
        window.location = "./loginSuccess";
    } else if(email != obja.email){
        alert('Nhập sai email, vui lòng nhập lại');
    } else{
        alert('Nhập sai mật khẩu, vui lòng nhập lại');
    }
    
});