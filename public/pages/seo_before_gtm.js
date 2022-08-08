// add meta: page url
const metaLinkUrl = document.createElement("meta");
metaLinkUrl.setAttribute("property", "og:url");
metaLinkUrl.content = document.location;
document.getElementsByTagName("head")[0].appendChild(metaLinkUrl);

// push the channel
if (window.location.href.indexOf("/medical/") > -1) {
  console.log("medical");
  window.dataLayer.push({
    page: { ownerChannel: "Medical" },
  });
}
if (window.location.href.indexOf("/software/")) {
  console.log("soft");
  window.dataLayer.push({
    page: { ownerChannel: "Software" },
  });
}
if (window.location.href.indexOf("/manufacturing/")) {
  console.log("man");
  window.dataLayer.push({
    page: { ownerChannel: "Manufacturing" },
  });
}
if (window.location.href.indexOf("/corporate/")) {
  console.log("corp");
  window.dataLayer.push({
    page: { ownerChannel: "Corporate" },
  });
}
