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

//redirect to the event page if no utm on register page
if (
  window.location.href.includes("register") &&
  !window.location.href.includes("crm_campaign")
) {
  let registerPageUrl = window.location.href;
  console.log(registerPageUrl);
  const getIndex = registerPageUrl.indexOf("register");
  const registerPageUTMSlice = registerPageUrl.slice(getIndex - 1);
  const eventPageURL = registerPageUrl.replace(registerPageUTMSlice, "");
  console.log(eventPageURL);
  window.location.replace(eventPageURL);
}
