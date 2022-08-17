// add meta: page OG image
const metaLinkOgImage = document.createElement("meta");
metaLinkOgImage.setAttribute("property", "og:image");
metaLinkOgImage.setAttribute("name", "image");
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
const metaDescription = document.querySelector("[name='description']");
if (document.querySelector("#main_image img")) {
  const mainImageLink = document
    .querySelector("#main_image img")
    .getAttribute("src");
  if (mainImageLink) {
    metaLinkOgImage.content = mainImageLink;

    insertAfter(metaLinkOgImage, metaDescription);
  } else {
    metaLinkOgImage.content =
      "https://www.materialise.com/sites/default/files/uploads/header_event_template.jpg";
    insertAfter(metaLinkOgImage, metaDescription);
  }
}
