let chekUser = JSON.parse(localStorage.getItem('userRegister'));

if(!chekUser){
    window.location.href = "login.html";
}