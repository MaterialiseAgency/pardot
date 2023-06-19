const elements = document.querySelectorAll("p.required");
function Validate(element) {
  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    if (el.querySelector(element)) {
      el.querySelector(element).onblur = function () {
        if (
          el.querySelector(element).value === "" ||
          el.querySelector(element).value.trim() === ""
        ) {
          el.classList.add("custom_error");
        }
      };
      el.querySelector(element).onfocus = function () {
        el.classList.remove("custom_error");
      };
    }
  }
}
Validate("input");
Validate("select");


// text area line break fix
const pardotTextareaFields = document.querySelectorAll("#pardot-form textarea");

if (pardotTextareaFields) {
  for (let i = 0; i < pardotTextareaFields.length; i++) {
    pardotTextareaFields[i].onblur = function () {
      const oldValue = pardotTextareaFields[i].value;
      const newValue = oldValue.replace(/[\r\n]/gm, " ");
      pardotTextareaFields[i].value = newValue;
    };
  }
}
