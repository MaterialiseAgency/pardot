const pardotTextareaFields = document.querySelectorAll("#pardot-form textarea");

if (pardotTextareaFields) {
  for (let i = 0; i < pardotTextareaFields.length; i++) {
    pardotTextareaFields[i].onblur = function () {
      const oldValue = pardotTextareaFields[i].value;
      const newValue = oldValue.replace(/[\r\n]/gm, " ");
      pardotTextareaFields[i].value = newValue;
    };
  }
}

let language = "de";

const map = new Map([
  [
    "Send message",
    {
      en: "Send message",
      de: "Nachricht senden", // deepl
      fr: "Envoyer un message", // deepl
      it: "Invia un messaggio", // deepl
      ja: "メッセージを送る", // deepl
      ko: "문자 보내", // deepl
      es: "Enviar un mensaje", // deepl
    },
  ],
  [
    "Download",
    {
      en: "Download",
      de: "Herunterladen", // deepl
      fr: "Télécharger", // deepl
      it: "Scaricare", // deepl
      ja: "ダウンロード", // deepl
      ko: "다운로드", // deepl
      es: "Descargar", // deepl
    },
  ],
]);



const pardot_submit_text = document.querySelector(".pardot-form-button").value;

if (
  document.querySelector(".pardot-form-button") &&
  map.get(pardot_submit_text)[`${language}`]
) {
  document.querySelector(".pardot-form-button").value =
    map.get(pardot_submit_text)[`${language}`];
}

const select_map = new Map([
  [
    "Medical device R&D",
    {
      en: "Medical device R&D",
      de: "Medizinprodukte F&E",
      fr: "Dispositif médical R&D",
      it: "R&S per dispositivi medici",
      ja: "医療機器開発",
      ko: "의료 장치 R&D",
      es: "I+D de dispositivos médicos",
    },
  ],
  [
    "Personalized device design & planning",
    {
      en: "Personalized device design & planning",
      de: "Personalisiertes Gerätedesign & Planung",
      fr: "Conception & planification d'appareil personnalisées",
      it: "Progettazione e pianificazione di dispositivi personalizzati",
      ja: "パーソナライズ機器設計・企画",
      ko: "개인 맞춤화 장치 설계 및 계획",
      es: "Diseño y planificación de dispositivos personalizados",
    },
  ],
  [
    "Academic research & education",
    {
      en: "Academic research & education",
      de: "Akademische Forschung & Ausbildung",
      fr: "Recherche & éducation universitaires",
      it: "Ricerca e formazione accademica",
      ja: "学術研究・教育",
      ko: "학술 연구 및 교육",
      es: "Educación e investigación académica",
    },
  ],
  [
    "Hospital",
    {
      en: "Hospital",
      de: "Krankenhaus",
      fr: "Hôpital",
      it: "Ospedale",
      ja: "病院",
      ko: "병원",
      es: "Hospital",
    },
  ],
  [
    "Other",
    {
      en: "Other",
      de: "Andere",
      fr: "Autre",
      it: "Altro",
      ja: "その他",
      ko: "기타",
      es: "Otros",
    },
  ],
  [
    "Yes",
    {
      en: "Yes",
      de: "Ja",
      fr: "Oui",
      it: "Sì",
      ja: "はい",
      ko: "예",
      es: "Sí",
    },
  ],
  [
    "No",
    {
      en: "No", // deepl
      de: "Nein", // deepl
      fr: "Non", // deepl
      it: "No", // deepl
      ja: "いいえ", // deepl
      ko: "아니", // deepl
      es: "No", // deepl
    },
  ],
  [
    "Fused",
    {
      en: "Fused deposition Modeling (FDM)", // deepl
      de: "DE Fused deposition Modeling (FDM)", // deepl
      fr: "Non", // deepl
      it: "No", // deepl
      ja: "いいえ", // deepl
      ko: "아니", // deepl
      es: "No", // deepl
    },
  ]
]);




const pardot_select = document.querySelectorAll("option");

if (pardot_select) {

  pardot_select.forEach(element => {
    if (select_map.has(element.text)) {
      element.text = select_map.get(element.text).de
    }
  });


  const pardot_checkBoxes = document.querySelectorAll("#pardot-form .value label");
  console.log(pardot_checkBoxes.length);
  if (pardot_checkBoxes) {
    pardot_checkBoxes.forEach(element => {
      console.log(element.textContent);
      if (select_map.has(element.textContent)) {
        console.log(element.textContent);
        console.log(select_map.get(element.textContent).de);

        element.textContent = select_map.get(element.textContent).de
      }
    });
  }


}

