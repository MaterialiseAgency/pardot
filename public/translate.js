function pardot_translate(language) {

  // input fields labels translate

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
    WF_MAN_Aero_company_type: {
      en: "Which of these best describes your company ?",
      de: "Welche der folgenden Aussagen beschreibt Ihr Unternehmen am besten?",
      fr: "Quelles caractéristiques décrivent le mieux votre entreprise ?",
      it: "Quale di questi descrive meglio la tua azienda?",
      ja: "御社の業種に最も近いものをお選びください",
      ko: "다음 중 귀하의 회사를 가장 잘 설명하는 것은 무엇인가요?",
      es: "¿Cuál de estas opciones describe mejor a su empresa?",
    },
    MTN_Profession: {
      en: "Job title",
      de: "Stellenbezeichnung",
      fr: "Poste",
      it: "Posizione",
      ja: "役職",
      ko: "직위",
      es: "Cargo",
    }, Business_Line: {
      en: "I work in:",
      de: "Ich arbeite in:",
      fr: "Je travaille dans :",
      it: "Lavoro in:",
      ja: "職場は、",
      ko: "현재 직무:",
      es: "Trabajo en:",
    }, WF_SOFT_3D_printing_sites: {
      en: "How many 3D printing-related sites does your company operate?",
      de: "Wie viele 3D-Druck-bezogene Websites betreibt Ihr Unternehmen?",
      fr: "Combien de sites liés à l'impression 3D votre entreprise exploite-t-elle ?",
      it: "Quanti centri di stampa 3D gestisce la tua azienda?",
      ja: "3D造形工場をいくつ運営していますか？",
      ko: "운영하고 있는 3D 프린팅 관련 사이트는 몇 개인가요?",
      es: "¿Cuántos sitios relacionados con la impresión 3D tiene su empresa?",
    }, WF_XBU_Newsletter_subscribe: {
      en: "I want to receive updates and news from Materialise. I can unsubscribe at any time or change the types of communication I receive in the preference center.",
      de: "Ich möchte Updates und Neuigkeiten von Materialise erhalten. Ich kann mich jederzeit abmelden oder die Art der mir zugesandten Informationen im Preference Center ändern.",
      fr: "Je veux recevoir des mises à jour et des nouveautés Materialise. Je peux me désabonner à tout moment ou modifier les types de communication que je reçois dans le centre de préférences.",
      it: "Desidero ricevere aggiornamenti e novità da Materialise. Posso annullare l'iscrizione in qualsiasi momento o modificare i tipi di comunicazione che ricevo nel centro preferenze.",
      ja: "Materialiseからの最新情報やニュースを受け取る プリファレンスセンターで、メール購読を解除したり、受信する情報の種類をいつでも変更可能です。",
      ko: "Materialise의 업데이트와 소식을 받고 싶습니다. 언제든지 수신을 거부하거나 기본 설정 센터에서 수신 유형을 변경할 수 있습니다.",
      es: "Quiero recibir actualizaciones y noticias de Materialise. Puedo cancelar la suscripción en cualquier momento o cambiar los tipos de comunicación que recibo en el centro de preferencias.",
    },
    WF_MTN_Phits: {
      en: "I would like to use phits for",
      de: "Ich möchte phits verwenden für", // deepl
      fr: "Je voudrais utiliser les phits pour", // deepl
      it: "Vorrei utilizzare i phit per", // deepl
      ja: "フィッツを使いたいのは", // deepl
      ko: "나는 핏을 사용하고 싶다", // deepl
      es: "Me gustaría utilizar phits para", // deepl
    }
  };





  for (const [key] of Object.entries(labels)) {
    if (labels[`${key}`][`${language}`]) {
      document.querySelector(`.${key} label`)
        ? (document.querySelector(`.${key} label`).textContent =
          labels[`${key}`][`${language}`])
        : "";
    }
  }

  // buttons translate

  const button_labels = new Map([
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
    [
      "Download the whitepaper",
      {
        en: "Download the whitepaper",
        de: "Whitepaper runterladen", // deepl
        fr: "Téléchargez le livre blanc", // deepl
        it: "Scarica il libro bianco", // deepl
        ja: "ホワイトペーパーをダウンロード", // deepl
        ko: "백서 다운로드", // deepl
        es: "Descargar el libro blanco", // deepl
      },
    ],
  ]);
  const pardot_submit_text = document.querySelector(
    ".pardot-form-button"
  ).value;

  if (
    document.querySelector(".pardot-form-button") &&
    button_labels.get(pardot_submit_text)
  ) {
    document.querySelector(".pardot-form-button").value =
      button_labels.get(pardot_submit_text)[`${language}`];
  }

  // select options labels trabslate

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
      "Abdominal",
      {
        en: "Abdominal",
        de: "Abdominaler Bereich",
        fr: "Abdominal",
        it: "Addominale",
        ja: "腹部領域",
        ko: "복부",
        es: "Abdominal",
      },
    ],
    [
      "Cardiovascular",
      {
        en: "Cardiovascular",
        de: "Kardiovaskulär",
        fr: "Cardiovasculaire",
        it: "Cardiovascolare",
        ja: "循環器領域",
        ko: "심혈관",
        es: "Cardiovascular",
      },
    ],
    [
      "Cranio-maxillofacial (CMF)",
      {
        en: "Cranio-maxillofacial (CMF)",
        de: "Mund-, Kiefer- und Gesichtschirurgie (MKG)",
        fr: "Crânio-maxillo-facial (CMF)",
        it: "Cranio maxillo facciale (CMF)",
        ja: "頭蓋顎顔面外科領域",
        ko: "두개악안면(CMF)",
        es: "Cráneo-maxilofacial (CMF)",
      },
    ],
    [
      "Dental",
      {
        en: "Dental",
        de: "Dentalbranche",
        fr: "Dentaire",
        it: "Dentale",
        ja: "歯科領域",
        ko: "치과",
        es: "Dental",
      },
    ],
    [
      "Education",
      {
        en: "Education",
        de: "Bildungswesen",
        fr: "Enseignement",
        it: "Istruzione",
        ja: "教育領域",
        ko: "교육",
        es: "Educación",
      },
    ],
    [
      "Gynaecology",
      {
        en: "Gynaecology",
        de: "Gynäkologie",
        fr: "Gynécologie",
        it: "Ginecologia",
        ja: "婦人科領域",
        ko: "여성의학과",
        es: "Ginecología",
      },
    ],
    [
      "Industrial computed tomography (CT)",
      {
        en: "Industrial computed tomography (CT)",
        de: "Industrielle Computertomographie (CT)",
        fr: "Tomodensitométrie",
        it: "Tomografia industriale computerizzata (CT)",
        ja: "産業用コンピュータ断層撮影装置（CT）",
        ko: "산업용 컴퓨터 단층 촬영(CT)",
        es: "Tomografía computarizada (TC) industrial",
      },
    ],
    [
      "Material science",
      {
        en: "Material science",
        de: "Materialwissenschaft",
        fr: "Science des matériaux",
        it: "Scienza dei materiali",
        ja: "材料科学分野",
        ko: "재료 과학",
        es: "Ciencia de los materiales",
      },
    ],
    [
      "Natural science",
      {
        en: "Natural science",
        de: "Naturwissenschaft",
        fr: "Sciences naturelles",
        it: "Scienze naturali",
        ja: "自然科学分野",
        ko: "자연 과학",
        es: "Ciencias naturales",
      },
    ],
    [
      "Orthopaedics",
      {
        en: "Orthopaedics",
        de: "Orthopädie",
        fr: "Orthopédie",
        it: "Ortopedia",
        ja: "整形外科領域",
        ko: "정형외과",
        es: "Ortopedia",
      },
    ],
    [
      "Prosthetics",
      {
        en: "Prosthetics",
        de: "Prothesen",
        fr: "Prothèses",
        it: "Prostetica",
        ja: "義肢装具領域",
        ko: "보철",
        es: "Prótesis",
      },
    ],
    [
      "Pulmonology",
      {
        en: "Pulmonology",
        de: "Pulmologie",
        fr: "Pneumologie",
        it: "Pneumologia",
        ja: "呼吸器領域",
        ko: "호흡기학",
        es: "Neumología",
      },
    ],
    [
      "Radiology",
      {
        en: "Radiology",
        de: "Radiologie",
        fr: "Radiologie",
        it: "Radiologia",
        ja: "放射線領域",
        ko: "방사선과",
        es: "Radiología",
      },
    ],
    [
      "Urology",
      {
        en: "Urology",
        de: "Urologie",
        fr: "Urologie",
        it: "Urologia",
        ja: "泌尿器領域",
        ko: "비뇨기과",
        es: "Urología",
      },
    ],
    [
      "Veterinary",
      {
        en: "Veterinary",
        de: "Veterinärmedizin",
        fr: "Médecine vétérinaire",
        it: "Veterinaria",
        ja: "獣医領域",
        ko: "수의학",
        es: "Veterinaria",
      },
    ],
    [
      "Aerospace",
      {
        en: "Aerospace",
        de: "Luft- und Raumfahrt",
        fr: "Aéronautique",
        it: "Aerospaziale",
        ja: "航空宇宙",
        ko: "항공우주",
        es: "Industria aeroespacial",
      },
    ],
    [
      "Architecture",
      {
        en: "Architecture",
        de: "Architektur",
        fr: "Architecture",
        it: "Architettura",
        ja: "建築",
        ko: "농업",
        es: "Arquitectura",
      },
    ],
    [
      "Art",
      {
        en: "Art",
        de: "Kunst",
        fr: "Art",
        it: "Arte",
        ja: "アート",
        ko: "예술",
        es: "Arte",
      },
    ],
    [
      "Automotive",
      {
        en: "Automotive",
        de: "Automotive",
        fr: "Automobile",
        it: "Automotive",
        ja: "自動車",
        ko: "자동차",
        es: "Sector automoción/motor",
      },
    ],
    [
      "Consumer goods",
      {
        en: "Consumer goods",
        de: "Konsumgüter",
        fr: "Biens de consommation",
        it: "Beni di consumo",
        ja: "コンシューマ製品",
        ko: "소비재",
        es: "Bienes de consumo",
      },
    ],
    [
      "Design bureau",
      {
        en: "Design bureau",
        de: "Konstruktionsbüro",
        fr: "Bureau d'étude",
        it: "Ufficio di progettazione",
        ja: "デザイン",
        ko: "설계 사무소",
        es: "Estudio de diseño",
      },
    ],
    [
      "Energy",
      {
        en: "Energy",
        de: "Energie",
        fr: "Énergie",
        it: "Energia",
        ja: "エネルギー", // deepl
        ko: "에너지",
        es: "Energía",
      },
    ],
    [
      "Oil & gas",
      {
        en: "Oil & gas",
        de: "Öl & Gas",
        fr: "Pétrole & gaz",
        it: "Petrolio e gas",
        ja: "石油・ガス",
        ko: "오일 및 가스",
        es: "Petróleo y gas",
      },
    ],
    [
      "Footwear",
      {
        en: "Footwear",
        de: "Footwear",
        fr: "Chaussures",
        it: "Calzature",
        ja: "フットウェア",
        ko: "풋웨어",
        es: "Calzado",
      },
    ],
    [
      "Eyewear",
      {
        en: "Eyewear", // deepl
        de: "Brillen", // deepl
        fr: "Lunettes", // deepl
        it: "Occhiali da vista",
        ja: "アイウェア", // deepl
        ko: "안경", // deepl
        es: "Gafas", // deepl
      },
    ],
    [
      "Food & beverages",
      {
        en: "Food & beverages", // deepl
        de: "Speisen & Getränke", // deepl
        fr: "Nourriture et boissons", // deepl
        it: "Cibo e bevande", // deepl
        ja: "飲食物", // deepl
        ko: "음식 및 음료", // deepl
        es: "Alimentos y bebidas", // deepl
      },
    ],
    [
      "HighTech equipment",
      {
        en: "HighTech equipment",
        de: "HighTech-Ausstattung", // deepl
        fr: "Équipements de haute technologie", // deepl
        it: "Attrezzatura ad alta tecnologia", // deepl
        ja: "ハイテク機器", // deepl
        ko: "하이테크 장비", // deepl
        es: "equipo de alta tecnología", // deepl
      },
    ],
    [
      "Medical technology",
      {
        en: "Medical technology",
        de: "Medizinische Technologie", // deepl
        fr: "Technologie médicale", // deepl
        it: "Tecnologia medica", // deepl
        ja: "医療技術", // deepl
        ko: "의학 기술", // deepl
        es: "Tecnología Medica", // deepl
      },
    ],
    [
      "Transport & heavy equipment",
      {
        en: "Transport & heavy equipment",
        de: "Transport & schweres Gerät", // deepl
        fr: "Transport & équipement lourd", // deepl
        it: "Trasporti e attrezzature pesanti", // deepl
        ja: "輸送および重機", // deepl
        ko: "운송 및 중장비",  // deepl
        es: "Transporte y equipo pesado", // deepl
      },
    ],
    [
      "eVTOL",
      {
        en: "eVTOL-Unternehmen",
        de: "eVTOL",
        fr: "eVTOL",
        it: "eVTOL",
        ja: "eVTOL",
        ko: "eVTOL",
        es: "eVTOL",
      },
    ],
    [
      "MRO",
      {
        en: "MRO",
        de: "Reparatur- und Wartungsunternehmen",
        fr: "MRO",
        it: "MRO",
        ja: "MRO",
        ko: "MRO",
        es: "MRO",
      },
    ],
    [
      "OEM",
      {
        en: "OEM",
        de: "OEM",
        fr: "OEM",
        it: "OEM",
        ja: "OEM",
        ko: "OEM",
        es: "OEM",
      },
    ],
    [
      "Tiers",
      {
        en: "Tiers",
        de: "Zulieferer (Tier1, Tier 2)",
        fr: "Tiers",
        it: "Livelli",
        ja: "自動車部品サプライヤー",
        ko: "Tiers",
        es: "Tiers",
      },
    ],
    [
      "None, looking into 3D printing",
      {
        en: "None, looking into 3D printing",
        de: "Keine, wir interessieren uns für 3D-Druck",
        fr: "Aucun, nous nous intéressons à l'impression 3D",
        it: "Nessuno, stiamo valutando la stampa 3D",
        ja: "運営していない。3Dプリンタ導入を検討中です",
        ko: "없음, 3D 프린팅에 대해 조사 중",
        es: "Ninguno, estoy considerando la impresión 3D",
      },
    ],
    [
      "Software reseller",
      {
        en: "Software reseller",
        de: "Software-Wiederverkäufer",
        fr: "Revendeur logiciel",
        it: "Rivenditore di software",
        ja: "ソフトウェア販売業者",
        ko: "소프트웨어 리셀러",
        es: "Distribuidor de software",
      },
    ],
    [
      "Machine manufacturer",
      {
        en: "Machine manufacturer",
        de: "Maschinenhersteller",
        fr: "Fabricant de machines",
        it: "Produttore di macchine",
        ja: "装置メーカー",
        ko: "기계 제조업체",
        es: "Fabricante de máquinas",
      },
    ],
    [
      "Independent software vendor/developer",
      {
        en: "Independent software vendor/developer",
        de: "Unabhängiger Software-Anbieter/Entwickler",
        fr: "Vendeur/développeur logiciel indépendant",
        it: "Fornitore/sviluppatore indipendente di software",
        ja: "独立系ソフトウェアベンダー／開発者",
        ko: "독자적 소프트웨어 공급업체/개발자",
        es: "Proveedor/desarrollador de software independiente",
      },
    ],
    [
      "Educational institution",
      {
        en: "Educational institution",
        de: "Bildungseinrichtung",
        fr: "Institution d'enseignement",
        it: "Istituto di formazione",
        ja: "教育機関",
        ko: "교육 기관",
        es: "Institución educativa",
      },
    ],
    [
      "Planning",
      {
        en: "Planning",
        de: "Planung",
        fr: "la planification",
        it: "Pianificazione",
        ja: "プランニング",
        ko: "기획",
        es: "La planificación",
      },
    ],
    [
      "Hospital research",
      {
        en: "Hospital research",
        de: "Krankenhausforschung",
        fr: "la recherche hospitalière",
        it: "Ricerca ospedaliera",
        ja: "病院研究",
        ko: "병원 연구",
        es: "La investigación hospitalaria",
      },
    ],
    [
      "3D printing",
      {
        en: "3D printing",
        de: "3D-Druck",
        fr: "l'impression 3D",
        it: "Stampa 3D",
        ja: "3Dプリント",
        ko: "3D 프린팅",
        es: "La impresión 3D",
      },
    ],
    [
      "Student",
      {
        en: "Student",
        de: "Student",
        fr: "Étudiant",
        it: "Studente",
        ja: "学生",
        ko: "학생",
        es: "Estudiante",
      },
    ],
    [
      "PhD researcher",
      {
        en: "PhD researcher",
        de: "Doktorand",
        fr: "Chercheur doctorant",
        it: "Dottore di ricerca",
        ja: "博士研究員",
        ko: "PhD 연구원",
        es: "Investigador de doctorado",
      },
    ],
    [
      "Professor",
      {
        en: "Professor",
        de: "Professor",
        fr: "Professeur",
        it: "Professore",
        ja: "教授",
        ko: "교수",
        es: "Profesor/a universitario/a",
      },
    ],
    [
      "Personal project",
      {
        en: "Personal project",
        de: "Persönliches Projekt",
        fr: "Projet personnel",
        it: "Progetto personale",
        ja: "個人的なプロジェクト",
        ko: "개인 프로젝트",
        es: "Proyecto personal",
      },
    ],
    [
      "Research project",
      {
        en: "Research project",
        de: "Forschungsprojekt",
        fr: "Projet de recherche",
        it: "Progetto di ricerca",
        ja: "研究プロジェクト",
        ko: "연구 프로젝트",
        es: "Proyecto de investigación",
      },
    ],
    [
      "Research project",
      {
        en: "Research project",
        de: "Forschungsprojekt",
        fr: "Projet de recherche",
        it: "Progetto di ricerca",
        ja: "研究プロジェクト",
        ko: "연구 프로젝트",
        es: "Proyecto de investigación",
      },
    ],
    [
      "Education project",
      {
        en: "Education project",
        de: "Bildungsprojekt",
        fr: "Projet d'enseignement",
        it: "Progetto formativo",
        ja: "教育プロジェクト",
        ko: "교육 프로젝트",
        es: "Proyecto educativo",
      },
    ],
    [
      "Abdominal",
      {
        en: "Abdominal",
        de: "Abdominaler Bereich",
        fr: "Abdominal",
        it: "Addominale",
        ja: "腹部領域",
        ko: "복부",
        es: "Abdominal",
      },
    ],
    [
      "Cardiovascular",
      {
        en: "Cardiovascular",
        de: "Kardiovaskulär",
        fr: "Cardiovasculaire",
        it: "Cardiovascolare",
        ja: "循環器領域",
        ko: "심혈관",
        es: "Cardiovascular",
      },
    ],
    [
      "Cranio-maxillofacial (CMF)",
      {
        en: "Cranio-maxillofacial (CMF)",
        de: "Mund-, Kiefer- und Gesichtschirurgie (MKG)",
        fr: "Crânio-maxillo-facial (CMF)",
        it: "Cranio maxillo facciale (CMF)",
        ja: "頭蓋顎顔面外科領域",
        ko: "두개악안면(CMF)",
        es: "Cráneo-maxilofacial (CMF)",
      },
    ],
    [
      "Dental",
      {
        en: "Dental",
        de: "Dentalbranche",
        fr: "Dentaire",
        it: "Dentale",
        ja: "歯科領域",
        ko: "치과",
        es: "Dental",
      },
    ],
    [
      "Education",
      {
        en: "Education",
        de: "Bildungswesen",
        fr: "Enseignement",
        it: "Istruzione",
        ja: "教育領域",
        ko: "교육",
        es: "Educación",
      },
    ],
    [
      "Gynaecology",
      {
        en: "Gynaecology",
        de: "Gynäkologie",
        fr: "Gynécologie",
        it: "Ginecologia",
        ja: "婦人科領域",
        ko: "여성의학과",
        es: "Ginecología",
      },
    ],
    [
      "Industrial computed tomography (CT)",
      {
        en: "Industrial computed tomography (CT)",
        de: "Industrielle Computertomographie (CT)",
        fr: "Tomodensitométrie",
        it: "Tomografia industriale computerizzata (CT)",
        ja: "産業用コンピュータ断層撮影装置（CT）",
        ko: "산업용 컴퓨터 단층 촬영(CT)",
        es: "Tomografía computarizada (TC) industrial",
      },
    ],
    [
      "Material Science",
      {
        en: "Material Science",
        de: "Materialwissenschaft",
        fr: "Science des matériaux",
        it: "Scienza dei materiali",
        ja: "材料科学分野",
        ko: "재료 과학",
        es: "Ciencia de los materiales",
      },
    ],
    [
      "Natural Science",
      {
        en: "Natural Science",
        de: "Naturwissenschaft",
        fr: "Sciences naturelles",
        it: "Scienze naturali",
        ja: "自然科学分野",
        ko: "자연 과학",
        es: "Ciencias naturales",
      },
    ],
    [
      "Natural Science",
      {
        en: "Natural Science",
        de: "Naturwissenschaft",
        fr: "Sciences naturelles",
        it: "Scienze naturali",
        ja: "自然科学分野",
        ko: "자연 과학",
        es: "Ciencias naturales",
      },
    ],
    [
      "Orthopaedics",
      {
        en: "Orthopaedics",
        de: "Orthopädie",
        fr: "Orthopédie",
        it: "Ortopedia",
        ja: "整形外科領域",
        ko: "정형외과",
        es: "Ortopedia",
      },
    ],
    [
      "Prosthetics",
      {
        en: "Prosthetics",
        de: "Prothesen",
        fr: "Prothèses",
        it: "Prostetica",
        ja: "義肢装具領域",
        ko: "보철",
        es: "Prótesis",
      },
    ],
    [
      "Pulmonology",
      {
        en: "Pulmonology",
        de: "Pulmologie",
        fr: "Pneumologie",
        it: "Pneumologia",
        ja: "呼吸器領域",
        ko: "호흡기학",
        es: "Neumología",
      },
    ],
    [
      "Radiology",
      {
        en: "Radiology",
        de: "Radiologie",
        fr: "Radiologie",
        it: "Radiologia",
        ja: "放射線領域",
        ko: "방사선과",
        es: "Radiología",
      },
    ],
    [
      "Urology",
      {
        en: "Urology",
        de: "Urologie",
        fr: "Urologie",
        it: "Urologia",
        ja: "泌尿器領域",
        ko: "비뇨기과",
        es: "Urología",
      },
    ],
    [
      "Veterinary",
      {
        en: "Veterinary",
        de: "Veterinärmedizin",
        fr: "Médecine vétérinaire",
        it: "Veterinaria",
        ja: "獣医領域",
        ko: "수의학",
        es: "Veterinaria",
      },
    ],
    [
      "None of the above",
      {
        en: "None of the above",
        de: "Keines der vorstehend aufgeführten",
        fr: "Aucun des domaines mentionnés ci-dessus",
        it: "Nessuno dei precedenti",
        ja: "上記以外の職務内容",
        ko: "해당 없음",
        es: "Ninguno de las anteriores",
      },
    ],
    [
      "I want to get a demo",
      {
        en: "I want to get a demo",
        de: "Ich möchte eine Demo erhalten",
        fr: "Je veux avoir une démo",
        it: "Desidero ricevere una demo",
        ja: "デモを希望します",
        ko: "데모 프로그램을 받고 싶습니다",
        es: "Me gustaría conseguir una demo",
      },
    ],
    [
      "I would like to talk to sales",
      {
        en: "I would like to talk to sales",
        de: "Ich würde gerne mit dem Vertrieb sprechen",
        fr: "Je souhaiterais parler au service commercial",
        it: "Vorrei parlare con il reparto vendite",
        ja: "営業担当に相談したい",
        ko: "영업부와 상담하고 싶습니다",
        es: "Me gustaría hablar con el departamento de ventas",
      },
    ],
    [
      "I have another question",
      {
        en: "I have another question",
        de: "Ich habe eine andere Frage",
        fr: "J'ai une autre question",
        it: "Ho un'altra domanda",
        ja: "他の質問があります",
        ko: "기타 문의 사항이 있습니다다",
        es: "Tengo otra pregunta",
      },
    ],
    [
      "Hip",
      {
        en: "Hip",
        de: "Hüfte",
        fr: "Hanche",
        it: "Anca",
        ja: "股関節分野",
        ko: "둔부",
        es: "Cadera",
      },
    ],
    [
      "Osteotomy",
      {
        en: "Osteotomy",
        de: "Osteotomie",
        fr: "Ostéotomie",
        it: "Osteotomia",
        ja: "骨切り術",
        ko: "골절술",
        es: "Osteotomía",
      },
    ],
    [
      "Shoulder",
      {
        en: "Shoulder",
        de: "Schulter",
        fr: "Épaule",
        it: "Spalla",
        ja: "肩関節分野",
        ko: "견각",
        es: "Hombro",
      },
    ],
    [
      "PhD Student",
      {
        en: "PhD Student",
        de: "Doktorand",
        fr: "Doctorant",
        it: "Dottorando",
        ja: "博士課程学生",
        ko: "PhD 과정",
        es: "Estudiante de doctorado",
      },
    ],
    [
      "Professor",
      {
        en: "Professor",
        de: "Professor",
        fr: "Professeur",
        it: "Professore",
        ja: "教授",
        ko: "교수",
        es: "Profesor/a universitario/a",
      },
    ],
    [
      "Operations for personalized devices",
      {
        en: "Operations for personalized devices",
        de: "Operationen für personalisierte Geräte",
        fr: "les opérations pour les appareils personnalisés",
        it: "Azienda di dispositivi personalizzati",
        ja: "パーソナライズデバイスの運用",
        ko: "개인 맞춤형 장치 분야",
        es: "Operaciones para dispositivos personalizados",
      },
    ],
    [
      "R&D",
      {
        en: "R&D",
        de: "F&E",
        fr: "la R&D",
        it: "R&S",
        ja: "研究開発部門",
        ko: "R&D",
        es: "I+D",
      },
    ],
    [
      "DPM/Podiatrist",
      {
        en: "DPM/Podiatrist",
        de: "DPM/Podologe",
        fr: "DPM/Podiatre",
        it: "Podologo",
        ja: "足病医／DPM",
        ko: "DPM/발 전문가",
        es: "DPM/Podólogo",
      },
    ],
    [
      "Orthopedist/O&P",
      {
        en: "Orthopedist/O&P",
        de: "Orthopäde/O&P",
        fr: "Orthopédiste/O&P",
        it: "Ortopedico",
        ja: "整形外科医／O＆P",
        ko: "정형외과/O&P",
        es: "Ortopeda/Órtesis y prótesis",
      },
    ],
    [
      "Chiropractor",
      {
        en: "Chiropractor",
        de: "Chiropraktiker",
        fr: "Chiropracteur",
        it: "Chiropratico",
        ja: "カイロプラクター",
        ko: "카이로프랙터",
        es: "Quiropráctico",
      },
    ],
    [
      "Physiotherapist",
      {
        en: "Physiotherapist",
        de: "Physiotherapeut",
        fr: "Kinésithérapeute",
        it: "Fisioterapista",
        ja: "理学療法士",
        ko: "물리치료사",
        es: "Fisioterapeuta",
      },
    ],
    [
      "Researcher",
      {
        en: "Researcher",
        de: "Forschung",
        fr: "Chercheur",
        it: "Ricercatore",
        ja: "研究者",
        ko: "연구원",
        es: "Investigador",
      },
    ],
    [
      "Distributor",
      {
        en: "Distributor",
        de: "Vertriebspartner",
        fr: "Distributeur",
        it: "Distributore",
        ja: "販売代理店",
        ko: "유통업체",
        es: "Distribuidor",
      },
    ],
    [
      "Agent",
      {
        en: "Agent",
        de: "Vertreter",
        fr: "Agent",
        it: "Agente",
        ja: "代理店",
        ko: "에이전시",
        es: "Agente",
      },
    ],
    [
      "IT department",
      {
        en: "IT department",
        de: "IT-Abteilung",
        fr: "Service informatique",
        it: "Ufficio IT",
        ja: "IT部門",
        ko: "IT 부서",
        es: "Departamento de informática",
      },
    ],
    [
      "Fused deposition Modeling (FDM)",
      {
        en: "Fused deposition Modeling (FDM)",
        de: "Fused Deposition Modeling (FDM)",
        fr: "Dépôt de fil fondu (FDM)",
        it: "Modellazione a deposizione fusa (FDM)",
        ja: "熱溶解積層（FDM）方式",
        ko: "융합 증착 모델링(FDM)",
        es: "Modelado por deposición fundida (FDM)",
      },
    ],
    [
      "Laser sintering",
      {
        en: "Laser sintering",
        de: "Lasersintern",
        fr: "Frittage laser",
        it: "Sinterizzazione laser",
        ja: "粉末焼結積層造形（SLS）方式",
        ko: "레이저 소결",
        es: "Sinterización por láser",
      },
    ],
    [
      "Manufacturing",
      {
        en: "Manufacturing",
        de: "Fertigung",
        fr: "Fabrication",
        it: "Manufatturiero",
        ja: "製造部門",
        ko: "제조",
        es: "Fabricación",
      },
    ],
    [
      "Metal 3D printing",
      {
        en: "Metal 3D printing",
        de: "Metall-3D-Druck",
        fr: "Impression 3D métal",
        it: "Stampa 3D in metallo",
        ja: "金属3Dプリンタ",
        ko: "금속 3D 프린팅",
        es: "Impresión 3D en metal",
      },
    ],
    [
      "Multi jet fusion",
      {
        en: "Multi jet fusion",
        de: "Multi-Jet-Fusion",
        fr: "Multi jet fusion",
        it: "Multi jet fusion",
        ja: "マルチジェットフュージョン方式",
        ko: "멀티 젯 퓨전",
        es: "Multi jet fusion",
      },
    ],
    [
      "Prototyping",
      {
        en: "Prototyping",
        de: "Prototypenfertigung",
        fr: "Prototypage",
        it: "Prototipazione",
        ja: "試作部門",
        ko: "프로토타이핑",
        es: "Prototipado",
      },
    ],
    [
      "R&D",
      {
        en: "R&D",
        de: "F&E",
        fr: "la R&D",
        it: "R&S",
        ja: "研究開発部門",
        ko: "R&D",
        es: "I+D",
      },
    ],
    [
      "Stereolithography",
      {
        en: "Stereolithography",
        de: "Stereolithographie",
        fr: "Stéréolithographie",
        it: "Stereolitografia",
        ja: "光造形（SLA／／DLP）方式",
        ko: "광조형",
        es: "Estereolitografía",
      },
    ],
    [
      "Master student",
      {
        en: "Master student",
        de: "Master-Student",
        fr: "Étudiant en master",
        it: "Studente magistrale",
        ja: "修士生",
        ko: "석사 과정 학생",
        es: "Estudiante de máster",
      },
    ],
    [
      "PhD researcher or professor",
      {
        en: "PhD researcher or professor",
        de: "Doktorand oder Professor",
        fr: "Chercheur doctorant ou professeur",
        it: "Dottore di ricerca o professore",
        ja: "博士研究員または教授",
        ko: "박사 연구원 또는 교수",
        es: "Investigador/a de doctorado o profesor/a universitario/a",
      },
    ],
    [
      "Foundries",
      {
        en: "Foundries",
        de: "Gießereien",
        fr: "Fonderies",
        it: "Fonderie",
        ja: "鋳造加工",
        ko: "파운드리",
        es: "Fundiciones",
      },
    ],
    [
      "Industrial goods & equipment",
      {
        en: "Industrial goods & equipment",
        de: "Industriegüter und -ausrüstung",
        fr: "Biens et équipements industriels",
        it: "Beni e attrezzature industriali",
        ja: "工業用品・設備",
        ko: "산업용품 및 장비",
        es: "Productos y equipos industriales",
      },
    ],
    [
      "Medical equipment & machinery",
      {
        en: "Medical equipment & machinery",
        de: "Medizinische Ausrüstung & Maschinen",
        fr: "Machines & équipements médicaux",
        it: "Attrezzature e macchinari medicali",
        ja: "医療機器・設備",
        ko: "의료 장비 및 기계",
        es: "Maquinaria y equipos médicos",
      },
    ],
    [
      "Tooling & milling",
      {
        en: "Tooling & milling",
        de: "Werkzeugbereitstellung & Fräsen",
        fr: "Outillage & fraisage",
        it: "Utensileria e fresatura",
        ja: "ツーリング・ミーリング",
        ko: "툴링 및 밀링",
        es: "Instrumental y fundición",
      },
    ],
    [
      "Order, quote or delivery",
      {
        en: "Order, quote or delivery",
        de: "Bestellung, Angebot oder Lieferung",
        fr: "Commande, devis ou livraison",
        it: "Ordine, preventivo o consegna",
        ja: "ご注文・お見積・配送について",
        ko: "주문, 견적 또는 배송",
        es: "Pedido, presupuesto o entrega",
      },
    ],
    [
      "Technical enquiry",
      {
        en: "Technical enquiry",
        de: "Technische Anfrage",
        fr: "Demande technique",
        it: "Domanda tecnica",
        ja: "技術的なお問い合わせ",
        ko: "기술 문의",
        es: "Consulta técnica",
      },
    ],
    [
      "Something else",
      {
        en: "Something else",
        de: "Etwas anderes",
        fr: "Autre chose",
        it: "Altro",
        ja: "その他",
        ko: "기타",
        es: "Otra cosa",
      },
    ],
    [
      "Hospital: university or teaching center",
      {
        en: "Hospital: university or teaching center",
        de: "Krankenhaus: Universität oder Lehrzentrum",
        fr: "Hôpital : université ou centre d'enseignement",
        it: "Ospedale: centro universitario o didattico",
        ja: "病院：大学・教育機関",
        ko: "병원: 대학 또는 교육 센터",
        es: "Hospital: universitario o centro de enseñanza",
      },
    ],
    [
      "Hospital: regional center",
      {
        en: "Hospital: regional center",
        de: "Krankenhaus: regionales Zentrum",
        fr: "Hôpital : centre régional",
        it: "Ospedale: centro regionale",
        ja: "病院：地域医療センター",
        ko: "병원: 지역 센터",
        es: "Hospital: centro regional",
      },
    ],
    [
      "Hospital: private practice",
      {
        en: "Hospital: private practice",
        de: "Krankenhaus: Privatpraxis",
        fr: "Hôpital : cabinet privé",
        it: "Ospedale: clinica privata",
        ja: "病院：個人医院",
        ko: "병원: 개인 진료",
        es: "Hospital: consulta privada",
      },
    ],
    [
      "Medical device company",
      {
        en: "Medical device company",
        de: "Unternehmen für Medizinprodukte",
        fr: "Entreprise de dispositifs médicaux",
        it: "Azienda di dispositivi medici",
        ja: "医療機器会社",
        ko: "의료 장치 회사",
        es: "Empresa de dispositivos médicos",
      },
    ],
    [
      "Casual use",
      {
        en: "Casual use",
        de: "Gelegentliche Nutzung", // deepl
        fr: "Utilisation occasionnelle", // deepl
        it: "Uso occasionale", // deepl
        ja: "カジュアルユース", // deepl
        ko: "캐주얼 사용", // deepl
        es: "Uso ocasional", // deepl
      },
    ],
    [
      "Pain relief",
      {
        en: "Pain relief",
        de: "Schmerzlinderung", // deepl
        fr: "Soulagement de la douleur", // deepl
        it: "Sollievo dal dolore", // deepl
        ja: "痛みの緩和", // deepl
        ko: "통증 완화", // deepl
        es: "Alivio del dolor", // deepl
      },
    ],
    [
      "Sports",
      {
        en: "Sports",
        de: "Sport", // deepl
        fr: "Sports", // deepl
        it: "Sport", // deepl
        ja: "スポーツ", // deepl
        ko: "스포츠", // deepl
        es: "Deportes", // deepl
      },
    ],
    [
      "Profile",
      {
        en: "Profile",
        de: "Profil", // deepl
        fr: "Profil", // deepl
        it: "Profilo", // deepl
        ja: "プロフィール", // deepl
        ko: "프로필", // deepl
        es: "Perfil", // deepl
      },
    ],
    [
      "Professional",
      {
        en: "Professional",
        de: "Professionell", // deepl
        fr: "Professionnel", // deepl
        it: "Professionale", // deepl
        ja: "プロフェッショナル", // deepl
        ko: "직업적인", // deepl
        es: "Profesional", // deepl
      },
    ]
  ]);


  const pardot_select = document.querySelectorAll("#pardot-form option");

  if (pardot_select) {
    pardot_select.forEach(element => {
      if (select_map.has(element.text)) {
        element.text = select_map.get(element.text)[`${language}`]
      }
    });
  }

  const pardot_checkBoxes = document.querySelectorAll("#pardot-form .value label");
  if (pardot_checkBoxes) {
    pardot_checkBoxes.forEach(element => {
      if (select_map.has(element.textContent)) {
        element.textContent = select_map.get(element.textContent)[`${language}`]
      }
    });
  }

  // GDPR text
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



  const gdpr_legit_block = document.getElementById('gdpr-legitimate')
  const gdpr_none_legit_block = document.getElementById('gdpr-none-legitimate')


  if (gdpr_legit_block) {
    gdpr_legit_block.innerHTML = language ? gdpr_legitimate[`${language}`] : gdpr_legitimate[`en`]
  }

  if (gdpr_none_legit_block) {
    gdpr_none_legit_block.innerHTML = language ? gdpr_none_legitimate[`${language}`] : gdpr_none_legitimate[`en`]
  }



}