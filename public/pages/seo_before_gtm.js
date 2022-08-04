// add meta: page url
const metaLinkUrl = document.createElement("meta");
metaLinkUrl.setAttribute("property", "og:url");
metaLinkUrl.content = document.location;
document.getElementsByTagName("head")[0].appendChild(metaLinkUrl);

// push the channel
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  let metaDescriptionContent = metaDescription.getAttribute("content");
  const regex = /{(.*?)}/gm;
  let foundChannel = metaDescriptionContent.match(regex);
  console.log(foundChannel);

  if (foundChannel) {
    metaDescriptionContent = metaDescriptionContent.replace(foundChannel, "");
    metaDescription.setAttribute("content", metaDescriptionContent.trim());
    let channel = foundChannel[0].slice(1);
    channel = channel.slice(0, -1);
    console.log(channel);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      page: { ownerChannel: channel },
    });
  }
}
