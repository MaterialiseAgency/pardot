// add meta: page OG image
let metaLinkOgImage = document.createElement("meta");

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

// seo_before_gtm.js
