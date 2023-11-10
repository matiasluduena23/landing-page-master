const btnSendEmail = document.querySelector('#send-email');
const btnCloseDialog = document.querySelector('#close-dialog');
const inputEmail = document.querySelector('#email');
const formEmail = document.querySelector('#form-email');
const dialog = document.querySelector('#dialog');
const spanError = document.querySelector('.error-span');

btnSendEmail?.addEventListener('click', (e) => {
     e.preventDefault();   
     const inputValue = (inputEmail as HTMLInputElement).value.trim();
     
        if(!inputValue.length)  {
         showError(`Can't be blank`)
        }else if (!validateEmail(inputValue)){
            showError(`Invalid Email`)
        }else {
          (dialog as HTMLDialogElement).show();
            removeError();
            messageDialog(inputValue);
        }   
});

btnCloseDialog?.addEventListener('click', () =>  (dialog as HTMLDialogElement).close())





function showError(message:string) {
    
    
    (spanError as HTMLSpanElement).innerText = message;
    formEmail?.classList.add('error');
    
  }

 
  function removeError() {
    (spanError as HTMLSpanElement).innerText = "";
    formEmail?.classList.remove('error');
    (inputEmail as HTMLInputElement).value = "";
  }


  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function messageDialog(inputValue: string) {
    const element = document.querySelector('.email-dialog');
    console.log(element);
    (element as HTMLHeadingElement).innerText  = `${inputValue}!!!`;
  }