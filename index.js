(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation');
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('valid')
        }, false)
      })
  })()
  

// function check(){
//     let inputEl = document.getElementsByTagName("input")[0];
//     console.log(inputEl);
//     // inputEl.forEach(element => {
//     //     console.log(element);
//     //     // if(!element.checkValidity()){
//     //     //     element.style.border = "2px solid red";
//     //     // }
//     // });
// } 