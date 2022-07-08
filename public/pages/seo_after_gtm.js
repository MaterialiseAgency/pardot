// add meta: page OG image
let metaLinkOgImage = document.createElement("meta");
metaLinkOgImage.setAttribute("property", "og:image");
let mainImageLink = document
  .querySelector("#main_image img")
  .getAttribute("src");
metaLinkOgImage.content = mainImageLink;
console.log(mainImageLink);
document.getElementsByTagName("head")[0].appendChild(metaLinkOgImage);
