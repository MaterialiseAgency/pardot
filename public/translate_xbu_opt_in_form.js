function pardot_translate(language) {
  const titles = {
    en: "My Email Preferences",
    jp: "Eメール設定フォーム",
  };
  if (language in titles) {
    document.getElementById("form-header").textContent = titles[language];
  }
  const labels = {
    email: {
      en: "My email address",
      jp: "メールアドレス",
    },
    WF_XBU_Type_of_communications: {
      jp: "I would like to receive the following email communications from Materialise:",
      jp: "マテリアライズからの以下の電子メール配信を希望します:",
    },
    WF_XBU_Area_of_interest: {
      jp: "I am interested in:",
      jp: "お客様にとって興味のある内容をご選択ください：",
    },
  };
  for (const [key] of Object.entries(labels)) {
    if (labels[`${key}`][`${language}`]) {
      document.querySelector(`.${key} label`)
        ? (document.querySelector(`.${key} label`).textContent =
            labels[`${key}`][`${language}`])
        : "";
    }
  }
  const options = {
    Newsletter: {
      en: "Newsletter",
      jp: "ニュースレター（英語での配信）",
    },
    "Invitations to events & webinars": {
      en: "Invitations to events & webinars",
      jp: "イベント、ウェビナーのご案内（英語または日本語での配信）",
    },
    "Recommended content": {
      en: "Recommended content",
      jp: "推奨コンテンツ（英語または日本語での配信）",
    },
    "Industrial 3D printing software": {
      en: "Industrial 3D printing software",
      jp: "産業用3Dプリントソフトウェアについて",
    },
    "Medical 3D printing & planning": {
      en: "Medical 3D printing & planning",
      jp: "医療用3Dプリントとプランニングについて",
    },
    "3D printing services": {
      en: "3D printing services",
      jp: "3Dプリント関連サービスについて",
    },
  };
  const typeOfCommunicationOptionsArr = document.querySelectorAll(
    ".WF_XBU_Type_of_communications > span.value > span"
  );
  typeOfCommunicationOptionsArr.forEach(function (option) {
    let value = option.querySelector("label").innerText;
    option.querySelector("label").innerText = options[value][language];
  });
  const areaOfInterestsArr = document.querySelectorAll(
    ".WF_XBU_Area_of_interest > span.value > span"
  );
  areaOfInterestsArr.forEach(function (option) {
    let value = option.querySelector("label").innerText;
    option.querySelector("label").innerText = options[value][language];
  });
  const submitBtn = {
    en: "Subscribe",
    jp: "登録",
  };
  if (language in submitBtn) {
    document.querySelector(".submit input").value = submitBtn[language];
  }
  const privacyDisclaimer = {
    en: `The personal data that you provide us will only be used to process your registration in accordance with our <u><a href="https://www.materialise.com/en/privacy-notice" target="_blank">Privacy Policy</a></u>. You can unsubscribe at any time via a link in our newsletter email or by contacting us.`,
    jp: `当フォームにご記入いただきました個人情報は、当社の<u><a href="https://www.materialise.com/en/privacy-notice" target="_blank">プライバシーポリシー</a></u>に基づき、お客様のご登録手続きのみに使用されます。　お客様は、ニュースレターのEメールに記載されたリンクから、または弊社にご連絡いただくことで、いつでもニュースレター配信を停止することができます。`,
  };
  if (language in privacyDisclaimer) {
    document.querySelector(".bottom_text").innerHTML =
      privacyDisclaimer[language];
  }
}
