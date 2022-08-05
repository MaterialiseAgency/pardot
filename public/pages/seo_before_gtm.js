// add meta: page url
const metaLinkUrl = document.createElement("meta");
metaLinkUrl.setAttribute("property", "og:url");
metaLinkUrl.content = document.location;
document.getElementsByTagName("head")[0].appendChild(metaLinkUrl);

// push the channel
if (window.location.contains("/medical/")) {
  window.dataLayer.push({
    page: { ownerChannel: "Medical" },
  });
}
if (window.location.contains("/software/")) {
  window.dataLayer.push({
    page: { ownerChannel: "Software" },
  });
}
if (window.location.contains("/manufacturing/")) {
  window.dataLayer.push({
    page: { ownerChannel: "Manufacturing" },
  });
}
if (window.location.contains("/corporate/")) {
  window.dataLayer.push({
    page: { ownerChannel: "Corporate" },
  });
}

/* const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  let metaDescriptionContent = metaDescription.getAttribute("content");
  const regex = /<(.*?)>/gm;
  let foundChannel = metaDescriptionContent.match(regex);
  console.log(foundChannel[0]);
  if (foundChannel) {
    metaDescriptionContent = metaDescriptionContent.replace(
      foundChannel[0],
      ""
    );
    metaDescription.setAttribute("content", metaDescriptionContent.trim());
    let channel = foundChannel[0].slice(1);
    channel = channel.slice(0, -1);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      page: { ownerChannel: channel },
    });
  }
}
*/
