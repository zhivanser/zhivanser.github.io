const   ham = document.querySelector('.hamburger'),
        menu  = document.querySelector('.menu'),
        close = document.querySelector('.menu_close');

ham.addEventListener('click', ()=> {
    menu.classList.add('active');
});

close.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

const coun = document.querySelectorAll('.skills_prog'),
     lines = document.querySelectorAll('.skills_minline');
coun.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

new WOW().init();

/* "use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error===0){
            form.classList.add('_sending');
            let response = await fetch('sendmail.php',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.messange);
                formPreview.innerHTML = '';
                form.reset();
            }
            else{
                alert("error!");
                form.classList.remove('_sending');
            }
        }
        else{
            alert('Заполните поля');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++){
            const input = formReq [index];
            formRemoveError(input);


            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddErorr(input);
                    error++;
                }
            }
            else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddErorr(input);
                error++;
            }
            else{
                if (input.value === ''){
                    formAddErorr(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddErorr(input){
        input.parentElement.classList.add('_erorr');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_erorr');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^\w+([\.-].?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
}); */