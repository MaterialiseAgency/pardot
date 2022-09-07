//autofocus
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("pardot-form")) {
    document.getElementById("pardot-form").elements[0].focus();
  }
});

//get url
const url = window.location.href;
if (document.querySelector(".crm_customer_url input")) {
  const input = document.querySelector(".crm_customer_url input");
  input.value = url;
}
