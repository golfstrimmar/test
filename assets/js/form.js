"use strict"
require("babel-core/register");
require("babel-polyfill");







document.addEventListener('DOMContentLoaded',function(){



    const MyForms = () => {
        forms.forEach((form)=>{
            form.addEventListener('submit',formSend);
            //
            async function formSend(e){
                e.preventDefault();

                let error = formValidate(form);
                let formData = new FormData(form);
                if(error === 0){
                    // form.classList.add('_sending')
                    let response = await fetch ('./sendmail.php' , {
                        method: 'POST',
                        body: formData
                    });
                    if (response.ok ){
                        let result = await response.json();
                        alert(result.message)
                        // formPreview.innerHTML = ""
                        form.reset()
                        form.classList.remove('_sending')
                    }else{
                        // alert('Ошибка при отправке формы! ')
                        form.classList.remove('_sending')
                    }
                }else{
                    alert('Пожалуйста, заполните обязательные поля! ')
                }
            }

            // / =========formValidate===========
            function formValidate(form) {
                let error = 0;
                let formReq = form.querySelectorAll('._req ');

                for (let i = 0; i < formReq.length; ++i) {
                    const input = formReq[i]
                    let type = input.getAttribute('type' )
                    formRemoveError(input)

                    if(input.classList.contains('_name')){
                        if(input.value === ''){
                            formAddError(input);
                            error++;

                        }
                    }
                    //
                    else  if (input.classList.contains('_phone')) {
                        if (input.value === '') {
                            formAddError(input);
                            error++;
                        }
                    }else  if(type === 'checkbox' && input.checked === false){
                        formAddError(input);
                        error++;
                    }
                    else{
                        formRemoveError(input)
                    }
                }

                return error;
            }
            // / =========formValidate===========

            function formAddError(input) {
                input.parentElement.classList.add('_error');
                input.classList.add('_error');
            }
            function formRemoveError(input) {
                input.parentElement.classList.remove('_error');
                input.classList.remove('_error');
            }

        })
    };

    const  forms =   document.querySelectorAll('.feedback');
    if(forms){
        MyForms();
    }


});