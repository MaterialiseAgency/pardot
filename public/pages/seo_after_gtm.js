// add meta: page OG image
const metaLinkOgImage = document.createElement("meta");
metaLinkOgImage.setAttribute("property", "og:image");
if (document.querySelector("#main_image img")) {
  const mainImageLink = document
    .querySelector("#main_image img")
    .getAttribute("src");
  if (mainImageLink) {
    metaLinkOgImage.content = mainImageLink;
    document.getElementsByTagName("head")[0].appendChild(metaLinkOgImage);
  }
}

//form submit track
if (document.getElementById("pardot-form")) {
  function submitGTM(event) {
    window.dataLayer.push({ event: "PardotFormSubmit" });
  }
  const form = document.getElementById("pardot-form");
  form.addEventListener("submit", submitGTM);
}
