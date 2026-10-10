const loginForm = document.getElementById('form__input');

if (loginForm) loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    let isValid__input = true;
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    const clearErrors = () => {
        document.querySelectorAll('.error-text').forEach(error => error.remove());
    }
    
    const errorForm = (message, input) => {
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
    if(!password.value.trim()) errorForm('Введите ваш пароль', password);
    
    if(isValid__input) {
        try {
            await api.auth.login(email.value.trim(), password.value);
            
            window.location.href = 'home.html';
        } catch (error) {
            errorForm(error.message, email);
        }
    }
});