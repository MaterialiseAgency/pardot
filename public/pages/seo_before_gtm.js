// add meta: page url
let metaLinkUrl = document.createElement("meta");
metaLinkUrl.setAttribute("property", "og:url");
metaLinkUrl.content = document.location;
document.getElementsByTagName("head")[0].appendChild(metaLinkUrl);

// pushh the channel
let metaDescription = document.querySelector('meta[name="description"]');
metaDescription = metaDescription.getAttribute("content");
const regex = /{(.*?)}/gm;
let foundChannel = metaDescription.match(regex);
let channel = foundChannel[0].slice(1);
channel = channel.slice(0, -1);
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  page: { ownerChannel: channel },
});
