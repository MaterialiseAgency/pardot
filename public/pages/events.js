// modal functionality

if (document.getElementsByClassName("register-link")) {
  const link = document.getElementsByClassName("register-link");

  Array.from(link).forEach(function (elem) {
    elem.onclick = function () {
      if (elem.href !== location.href) {
        document.getElementById("modal").style.display = "none";
      } else {
        document.addEventListener("click", function (e) {
          if (e.target.id === elem.id) {
            e.preventDefault();
          }
        });
        toogleModal = (event) => {
          document.getElementById("modal").classList.toggle("modal");
        };
      }
    };
  });
}

/*
if (
  window.location.href.includes("register") &&
  !window.location.href.includes("crm_campaign")
) {
  let registerPageUrl = window.location.href;
  const getIndex = registerPageUrl.indexOf("register");
  const registerPageUTMSlice = registerPageUrl.slice(getIndex - 1);
  const eventPageURL = registerPageUrl.replace(registerPageUTMSlice, "");
  window.location.replace(eventPageURL);
}*/

//get url
const url = window.location.href;
if (document.querySelector(".crm_customer_url input")) {
  const input = document.querySelector(".crm_customer_url input");
  input.value = url;
}
