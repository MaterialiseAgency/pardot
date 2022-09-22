function pardot_translate(language) {
  const labels = {
    first_name: {
      en: "First name",
      de: "Vorname",
      fr: "Prénom",
      it: "Nome",
      ja: "名（半角英字）",
      ko: "이름",
      es: "Nombre",
    },
    last_name: {
      en: "Last name",
      de: "Nachname",
      fr: "Nom",
      it: "Cognome",
      ja: "姓（半角英字）",
      ko: "성",
      es: "Apellidos",
    },
    email: {
      en: "Email",
      de: "E-Mail",
      fr: "Adresse électronique",
      it: "Email",
      ja: "メールアドレス",
      ko: "이메일",
      es: "Correo electrónico",
    },
    company: {
      en: "Organization",
      de: "Organisation",
      fr: "Organisation",
      it: "Organizzazione",
      ja: "組織名",
      ko: "조직",
      es: "Organización",
    },
    job_title: {
      en: "Job title",
      de: "Stellenbezeichnung",
      fr: "Poste",
      it: "Posizione",
      ja: "役職",
      ko: "직위",
      es: "Cargo",
    },
    country: {
      en: "Сountry",
      de: "Land",
      fr: "État",
      it: "Regione",
      ja: "州",
      ko: "주 (미국)",
      es: "Región",
    },
    state: {
      en: "State",
      de: "Bundesland",
      fr: "État",
      it: "Regione",
      ja: "州",
      ko: "주 (미국)",
      es: "Región",
    },
    Province: {
      en: "Province",
      de: "Provinz",
      fr: "Province/Région",
      it: "Provincia",
      ja: "都道府県",
      ko: "주 (캐나다)",
      es: "Provincia",
    },
    zip: {
      en: "Zip",
      de: "Code postal",
      fr: "Postleitzahl",
      it: "Codice postale",
      ja: "郵便番号",
      ko: "우편 번호",
      es: "Código postal",
    },
    MED_WF_Field_of_Interest: {
      en: "Organization type",
      de: "Organisationstyp",
      fr: "Type d'organisation",
      it: "Tipo di organizzazione",
      ja: "組織の種類",
      ko: "조직 유형",
      es: "Tipo de organización",
    },
    WF_MED_Organization_Type_Other: {
      en: "Please specify:",
      de: "Bitte genau angeben:",
      fr: "Veuillez spécifier :",
      it: "Specifica:",
      ja: "具体的にご入力ください",
      ko: "다음을 지정:",
      es: "Especifique por favor:",
    },
    phone: {
      en: "Phone ",
      de: "Telefon",
      fr: "Téléphone",
      it: "Telefono",
      ja: "電話番号",
      ko: "전화",
      es: "Teléfono",
    },
    WF_MED_Comments: {
      en: "What are the main challenges you are trying to address?",
      de: "Was sinddie größten Herausforderungen, die Sie bewältigen möchten?",
      fr: "Quels sont les principaux défis que vous essayez de relever ?",
      it: "Quali sono le sfide principali che stai cercando di affrontare?",
      ja: "主にどのような課題にお困りですか？",
      ko: "해결하려는 주요 문제가무엇인가요?",
      es: "¿Cuáles son las principales desafíos que intenta abordar?",
    },
    WF_XBU_Contact_origin: {
      en: "How did you hear about Materialise?",
      de: "Wie haben Sie von Materialise erfahren?",
      fr: "Comment avez-vous connu Materialise ?",
      it: "Come sei venuto a conoscenza di Materialise?",
      ja: "どのようにMaterialiseをお知りになりましたか？",
      ko: "Materialise를 어떻게 알게 되었나요?",
      es: "¿Cómo conoció Materialise?",
    },
    WF_SOFT_Technologies: {
      en: "What 3D printing technologies are you using/planning to use?",
      de: "Welche 3D-Drucktechnologien verwenden Sie/planen Sie zu verwenden?",
      fr: "Quelles technologies d'impression 3D utilisez-vous / prévoyez-vous d'utiliser ?",
      it: "Quali tecnologie di stampa 3D usi / hai intenzione di usare?",
      ja: "どの造形技術の3Dプリンタを導入済み・導入予定ですか？",
      ko: "어떤 3D 프린팅 기술을 사용 중 또는 사용할 계획인가요?",
      es: "¿Qué tecnologías de impresión 3D utiliza o tiene previsto utilizar?",
    },
    WF_SOFT_3D_Printer: {
      en: "Which 3D printer(s) are you using/planning to use?",
      de: "Welche(n) 3D-Drucker verwenden Sie oder planen Sie zu verwenden?",
      fr: "Quelle(s) imprimante(s) 3D prévoyez-vous d'utiliser ou utilisez-vous ?",
      it: "Quale stampante (o stampanti) 3D usi o hai intenzione di usare?",
      ja: "どのメーカーの3Dプリンタを使用中・使用予定ですか？",
      ko: "어떤 3D 프린터를 사용 중 또는 사용할 계획인가요?",
      es: "¿Qué impresora(s) 3D está(n) utilizando o tiene(n) previsto utilizar?",
    },
    WF_MAN_Enquiry_type: {
      en: "What is your inquiry about?",
      de: "Worum geht es in Ihrer Anfrage?",
      fr: "Quel est l'objet de votre demande ?",
      it: "Qual è l'oggetto della tua richiesta?",
      ja: "お問い合わせ内容をご記入ください",
      ko: "무엇에 관한 문의인가요?",
      es: "¿De qué trata su consulta?",
    },
    WF_MAN_Comments: {
      en: "Please describe your inquiry:",
      de: "Bitte beschreiben Sie Ihre Anfrage:",
      fr: "Veuillez décrire votre demande :",
      it: "Descrivi la tua richiesta:",
      ja: "お問い合わせ内容をご記入ください",
      ko: "문의 사항을 설명:",
      es: "Describa su consulta por favor:",
    },
    WF_MAN_Industry: {
      en: "Industry",
      de: "Branche",
      fr: "Industrie",
      it: "Settore",
      ja: "業種",
      ko: "산업",
      es: "Sector",
    },
    WF_MAN_Industry_other: {
      en: "Please specify:",
      de: "Bitte genau angeben:",
      fr: "Veuillez spécifier :",
      it: "Specifica:",
      ja: "具体的にご入力ください",
      ko: "다음을 지정:",
      es: "Especifique por favor:",
    },
    Role: {
      en: "Funtion",
      de: "Funktion",
      fr: "Fonction",
      it: "Funzione",
      ja: "職務内容",
      ko: "직책",
      es: "Puesto de trabajo",
    },
    WF_SOFT_Partner_profile: {
      en: "Please select your company profile",
      de: "Bitte wählen Sie Ihr Unternehmensprofil",
      fr: "Veuillez sélectionner le profil de votre entreprise",
      it: "Seleziona il profilo della tua azienda",
      ja: "御社の事業概要を選択してください",
      ko: "회사 프로필을 선택하세요",
      es: "Seleccione el perfil de su empresa",
    },
    WF_MTN_Type_of_enquiry: {
      en: "What is your inquiry about?",
      de: "Worum geht es in Ihrer Anfrage?",
      fr: "Quel est l'objet de votre demande ?",
      it: "Qual è l'oggetto della tua richiesta?",
      ja: "お問い合わせ内容をご記入ください",
      ko: "무엇에 관한 문의인가요?",
      es: "¿De qué trata su consulta?",
    },
    WF_MTN_Comments: {
      en: "Please describe your inquiry:",
      de: "Bitte beschreiben Sie Ihre Anfrage:",
      fr: "Veuillez décrire votre demande :",
      it: "Descrivi la tua richiesta:",
      ja: "お問い合わせ内容をご記入ください",
      ko: "문의 사항을 설명:",
      es: "Describa su consulta por favor:",
    },
    Sector: {
      en: "Sector",
      de: "Sektor",
      fr: "Secteur",
      it: "Settore",
      ja: "業種",
      ko: "분야",
      es: "Sector",
    },
    WF_SOFT_Number_of_printers: {
      en: "How many 3D printers does your company have/plan to have in the near future?",
      de: "Wie viele 3D-Drucker hat Ihr Unternehmen oder plant deren Anschaffung für die nahe Zukunft?",
      fr: "Combien d'imprimantes 3D votre entreprise a-t-elle ou prévoit-elle d'avoir dans un avenir proche ?",
      it: "Quante stampanti 3D possiede o ha intenzione di possedere la tua azienda nel prossimo futuro?",
      ja: "3Dプリンタを何台保有・近い将来保有する予定ですか？",
      ko: "귀하의 회사는 몇 대의 3D 프린터를 보유 중 또는 곧 보유할 계획인가요?",
      es: "¿Cuántas impresoras 3D tiene su empresa o planea tener en un futuro cercano?",
    },
    WF_SOFT_Challenges: {
      en: "What are the main challenges you are trying to address?",
      de: "Was sinddie größten Herausforderungen, die Sie bewältigen möchten?",
      fr: "Quels sont les principaux défis que vous essayez de relever ?",
      it: "Quali sono le sfide principali che stai cercando di affrontare?",
      ja: "主にどのような課題にお困りですか？",
      ko: "해결하려는 주요 문제가무엇인가요?",
      es: "¿Cuáles son las principales desafíos que intenta abordar?",
    },
    MED_Segment: {
      en: "Field of interest",
      de: "Interessengebiet",
      fr: "Domaine d'intérêt",
      it: "Campo di interesse",
      ja: "興味のある分野",
      ko: "관심 분야",
      es: "Campo de interés",
    },
    Local_Last_Name: {
      en: "Last name",
      de: "Last name",
      fr: "Last name",
      it: "Last name",
      ja: "姓",
      ko: "Last name",
      es: "Last name",
    },
    Local_First_Name: {
      en: "First name",
      de: "First name",
      fr: "First name",
      it: "First name",
      ja: "名",
      ko: "First name",
      es: "First name",
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
    [
      "Watch recording",
      {
        en: "Watch recording",
        de: "Aufnahme beobachten", // deepl
        fr: "Regarder l'enregistrement", // deepl
        it: "Guarda la registrazione", // deepl
        ja: "録画の視聴", // deepl
        ko: "녹화 보기", // deepl
        es: "Ver grabación", // deepl
      },
    ],
  ]);
  const pardot_submit_text = document.querySelector(
    ".pardot-form-button"
  ).value;

  if (
    document.querySelector(".pardot-form-button") &&
    map.get(pardot_submit_text)
  ) {
    document.querySelector(".pardot-form-button").value =
      map.get(pardot_submit_text)[`${language}`];
  }
}
