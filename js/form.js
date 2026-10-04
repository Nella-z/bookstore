document.getElementById('form__registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

     let fio = document.getElementById('fio');
     let email = document.getElementById('email');
     let password = document.getElementById('password');
     let phone = document.getElementById('phone');
     let birth = document.getElementById('birth');

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
        isValid = false;
     }
     clearErrors();
     if(!fio.value.trim()) errorForm('Введите ваше ФИО', fio);
     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm('Введите корректный email', email);
    if(password.value.length < 8) errorForm('Пароль должен быть не менее 8 символов', password);
      if(!/^[\+]?[\(]?[0-9]{1,4}[\)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.value.trim())) errorForm('Введите корректный номер телефона', phone);
       if(!birth.value.trim()) errorForm('Введите дату рождения', birth);


    if(isValid) {
        alert('Форма успешно отправлена');
        window.location.href = 'input.html';
    }
})
