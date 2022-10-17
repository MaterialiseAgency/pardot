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

  const gdpr_legitimate = {
    en: `The personal data that you provide us will be used to process your request and/or registration and in accordance with our Privacy Notice. You can unsubscribe at any time or change the types of communication you receive in our preference center.`,
    de: `Die von Ihnen zur Verfügung gestellten personenbezogenen Daten werden zur Bearbeitung Ihrer Anfrage bzw. Registrierung und in Übereinstimmung mit unserer <a href="/de/privacy-notice" target="_blank">Datenschutzrichtlinie</a> verwendet.`,
    fr: `Les données personnelles que vous nous fournissez seront utilisées pour traiter votre demande et/ou votre inscription conformément à notre <a href="/fr/privacy-notice" target="_blank">Avis de confidentialité</a>.`,
    it: `I dati personali che ci fornisci verranno utilizzati per gestire la tua richiesta e/o registrazione in conformità con la nostra <a href="/it/privacy-notice" target="_blank">Informativa sulla privacy</a>.`,
    ja: `お客様より当社に提供いただく個人情報は、お客様からのリクエストおよび/または登録を当社の<a href="/en/privacy-notice" target="_blank">プライバシーに関する通知</a>に従って処理するために使用されます。`,
    ko: `귀하가 제공하는 개인정보는 당사의 <a href="/en/privacy-notice" target="_blank">개인정보처리방침</a>에 따라 귀하의 요청 및/또는 등록을 처리하는 데 사용됩니다.`,
    es: `Los datos personales que nos proporcione se utilizarán para procesar su solicitud o su registro, de conformidad con nuestro <a href="/es/privacy-notice" target="_blank">Aviso de Privacidad</a>.`,
  }

  const gdpr_none_legitimate = {
    en: `The personal data that you provide us will only be used to process your request and/or registration in accordance with our Privacy Notice.*You can unsubscribe at any time or change the types of communication you receive in our preference center.`,
    de: `Die von Ihnen zur Verfügung gestellten personenbezogenen Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Registrierung in Übereinstimmung mit unserer <a href="/de/privacy-notice" target="_blank">Datenschutzrichtlinie</a> verwendet.<br>*In jeder E-Mail, die Sie von uns erhalten, finden Sie einen Link, über den Sie das Abonnement kündigen bzw. die Art der Kommunikation ändern können, die von unserer Seite aus erfolgt.`,
    fr: `Les données personnelles que vous nous fournissez seront uniquement utilisées pour traiter votre demande et/ou votre inscription conformément à notre <a href=''/fr/privacy-notice'' target=''_blank''>Avis de confidentialité</a>.<br>*Vous trouverez dans tous les e-mails que nous vous enverrons un lien pour vous désabonner ou modifier les types de communications que vous recevez de notre part.`,
    it: `I dati personali che ci fornisci verranno utilizzati esclusivamente per gestire la tua richiesta e/o registrazione in conformità con la nostra <a href=''/it/privacy-notice'' target=''_blank''>Informativa sulla privacy</a>. <br>*In ogni e-mail che ti invieremo troverai un link per annullare l''iscrizione o modificare il tipo di comunicazioni che ricevi da noi.`,
    ja: `お客様より当社に提供いただく個人情報は、お客様からのリクエストおよび/または登録を当社の<a href="/en/privacy-notice" target="_blank">プライバシーに関する通知</a>に従って処理するためにのみ使用されます。<br>*当社から送信するメールには、いずれも配信を停止する、または当社から受信する情報のタイプを変更するためのリンクが含まれています。`,
    ko: `귀하가 제공하는 개인정보는 당사의 <a href="/en/privacy-notice" target="_blank">개인정보처리방침</a>에 따라 귀하의 요청 및/또는 등록을 처리하는 데만 사용됩니다.<br>*당사가 귀하에게 발송하는 모든 이메일에는 구독 해지 또는 통신문의 유형 변경에 대한 링크를 찾아보실 수 있습니다.`,
    es: `Los datos personales que nos proporcione se utilizarán únicamente para procesar su solicitud o su registro, de conformidad con nuestro <a href="/es/privacy-notice" target="_blank">Aviso de Privacidad</a>.<br>*En todos los correos electrónicos que le enviemos, encontrará un enlace donde poder cancelar la suscripción o modificar los tipos de comunicaciones que desee recibir.`,
  }



  const gdpr_legit = document.getElementById('gdpr-legitimate')
  const gdpr_none_legit = document.getElementById('gdpr-none-legitimate')

  const language = ''

  if (gdpr_legit) {
    gdpr_legit.innerHTML = language ? gdpr_legitimate[`${language}`] : gdpr_legitimate[`en`]
  }

  if (gdpr_none_legit) {
    gdpr_legit.innerHTML = language ? gdpr_none_legitimate[`${language}`] : gdpr_none_legitimate[`en`]
  }


}

