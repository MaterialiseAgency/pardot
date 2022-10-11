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
      "",
      {
        en: "",
        de: "",
        fr: "",
        it: "",
        ja: "",
        ko: "",
        es: "",
      },
    ],
    [
      "",
      {
        en: "",
        de: "",
        fr: "",
        it: "",
        ja: "",
        ko: "",
        es: "",
      },
    ]
  ]);

  const pardot_select = document.querySelectorAll("option");

  if (pardot_select) {
    pardot_select.forEach(element => {
      if (select_map.has(element.text)) {
        element.text = select_map.get(element.text)[`${language}`]
      }
    });


  }
}