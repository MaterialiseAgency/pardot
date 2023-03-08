//autofocus
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("pardot-form")) {
    document.getElementById("pardot-form").elements[0].focus();
  }
});

//get url
const page_url = window.location.href;
if (document.querySelector(".crm_customer_url input")) {
  const input = document.querySelector(".crm_customer_url input");
  input.value = page_url;
}

const form = document.getElementById('pardot-form');
form.addEventListener('change', getFormValue);
function getFormValue(e) {
    //e.preventDefault();
    let email = form.querySelector('.email input').value;        
    sessionStorage.setItem("email", email);
}

// text area line break fix
// const pardotTextareaFields = document.querySelectorAll("#pardot-form textarea");

// if (pardotTextareaFields) {
//   for (let i = 0; i < pardotTextareaFields.length; i++) {
//     pardotTextareaFields[i].onblur = function () {
//       const oldValue = pardotTextareaFields[i].value;
//       const newValue = oldValue.replace(/[\r\n]/gm, " ");
//       pardotTextareaFields[i].value = newValue;
//     };
//   }
// }
