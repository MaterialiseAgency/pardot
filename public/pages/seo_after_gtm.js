// add meta: page OG image
const metaLinkOgImage = document.createElement("meta");
metaLinkOgImage.setAttribute("property", "og:image");
metaLinkOgImage.setAttribute("name", "image");
if (document.querySelector("#main_image img")) {
  const mainImageLink = document
    .querySelector("#main_image img")
    .getAttribute("src");
  if (mainImageLink) {
    metaLinkOgImage.content = mainImageLink;
    let metaDescription = document.querySelector("[name='description']");
    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }
    insertAfter(metaLinkOgImage, metaDescription);
  }
}
