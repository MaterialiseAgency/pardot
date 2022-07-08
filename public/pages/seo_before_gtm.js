// add meta: page url
let metaLinkUrl = document.createElement("meta");
metaLinkUrl.setAttribute("property", "og:url");
metaLinkUrl.content = document.location;
document.getElementsByTagName("head")[0].appendChild(metaLinkUrl);

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  page: { ownerChannel: "Medical" },
});
