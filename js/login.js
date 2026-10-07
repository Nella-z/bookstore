
document.getElementById('form__input').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid__input = true;

     let email = document.getElementById('email');
     let password = document.getElementById('password');
     

     const clearErrors = () =>{
        document.querySelectorAll('.error-text').forEach(error => error.remove());
     }
     const errorForm = (message, input) =>{
        let errorEl = document.createElement('div');
        errorEl.className = 'error-text';
        errorEl.textContent = message;
        errorEl.style.color = 'red';
        errorEl.style.fontSize = '14px';
        input.parentElement.appendChild(errorEl);
        isValid__input = false;
     }
     clearErrors();
     if(!email.value.trim()) errorForm('Введите ваш email', email);
     if(!password.value.trim()) errorForm('Введите ваше пароль', password);


    if(isValid__input) {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email.value.trim() && storedUser.password === password.value) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        errorForm('Неверная почта или пароль', email);
    }
}
})