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
