// add meta: page url
const metaLinkUrl = document.createElement("meta");
metaLinkUrl.setAttribute("property", "og:url");
metaLinkUrl.content = document.location;
document.getElementsByTagName("head")[0].appendChild(metaLinkUrl);

// push the channel
if (window.location.href.indexOf("/medical/") > -1) {
  window.dataLayer = window.dataLayer || [];
  console.log("Medical");
  window.dataLayer.push({
    page: { ownerChannel: "Medical" },
  });
}
if (window.location.href.indexOf("/software/")) {
  window.dataLayer = window.dataLayer || [];
  console.log("Software");
  window.dataLayer.push({
    page: { ownerChannel: "Software" },
  });
}
if (window.location.href.indexOf("/manufacturing/")) {
  window.dataLayer = window.dataLayer || [];
  console.log("Manufacturing");
  window.dataLayer.push({
    page: { ownerChannel: "Manufacturing" },
  });
}
if (window.location.href.indexOf("/corporate/")) {
  window.dataLayer = window.dataLayer || [];
  console.log("Corporate");
  window.dataLayer.push({
    page: { ownerChannel: "Corporate" },
  });
}
