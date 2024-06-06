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
      zh: "名",
    },
    last_name: {
      en: "Last name",
      de: "Nachname",
      fr: "Nom",
      it: "Cognome",
      ja: "姓（半角英字）",
      ko: "성",
      es: "Apellidos",
      zh: "姓",
    },
    email: {
      en: "Email",
      de: "E-Mail",
      fr: "Adresse électronique",
      it: "Email",
      ja: "メールアドレス",
      ko: "이메일",
      es: "Correo electrónico",
      zh: "电子邮件",
    },
    company: {
      en: "Organization",
      de: "Organisation",
      fr: "Organisation",
      it: "Organizzazione",
      ja: "組織名",
      ko: "조직",
      es: "Organización",
      zh: "单位",
    },
    job_title: {
      en: "Job title",
      de: "Stellenbezeichnung",
      fr: "Poste",
      it: "Posizione",
      ja: "役職",
      ko: "직위",
      es: "Cargo",
      zh: "职务",
    },
    country: {
      en: "Сountry",
      de: "Land",
      fr: "État",
      it: "Regione",
      ja: "国",
      ko: "주 (미국)",
      es: "Región",
      zh: "国家",
    },
    state: {
      en: "State",
      de: "Bundesland",
      fr: "État",
      it: "Regione",
      ja: "州",
      ko: "주 (미국)",
      es: "Región",
      zh: "州",
    },
    Province: {
      en: "Province",
      de: "Provinz",
      fr: "Province/Région",
      it: "Provincia",
      ja: "都道府県",
      ko: "주 (캐나다)",
      es: "Provincia",
      zh: "省",
    },
    zip: {
      en: "Zip",
      de: "Code postal",
      fr: "Postleitzahl",
      it: "Codice postale",
      ja: "郵便番号",
      ko: "우편 번호",
      es: "Código postal",
      zh: "邮编",
    },
    address_one:{
      en: "Address",
      de: "Address",
      fr: "Address",
      it: "Address",
      ja: "Address",
      ko: "주소",
      es: "Address",
      zh: "地址",
    },
    city:{
      en: "City",
      de: "City",
      fr: "City",
      it: "City",
      ja: "City",
      ko: "도시",
      es: "City",
      zh: "城市",
    },   
    MED_WF_Field_of_Interest: {
      en: "Organization type",
      de: "Organisationstyp",
      fr: "Type d'organisation",
      it: "Tipo di organizzazione",
      ja: "組織の種類",
      ko: "조직 유형",
      es: "Tipo de organización",
      zh: "单位类型",
    },
    WF_MED_Organization_Type_Other: {
      en: "Please specify:",
      de: "Bitte genau angeben:",
      fr: "Veuillez spécifier :",
      it: "Specifica:",
      ja: "具体的にご入力ください",
      ko: "다음을 지정:",
      es: "Especifique por favor:",
      zh: "请具体说明",
    },
    phone: {
      en: "Phone ",
      de: "Telefon",
      fr: "Téléphone",
      it: "Telefono",
      ja: "電話番号",
      ko: "전화",
      es: "Teléfono",
      zh: "电话",
    },
    WF_MED_Comments: {
      en: "How can we help you?",
      de: "Wie können wir Ihnen helfen?​",
      fr: "Comment pouvons-nous vous aider?​",
      it: "Quali sono le sfide principali che stai cercando di affrontare?",
      ja: "お問い合わせ内容",
      ko: "해결하려는 주요 문제가무엇인가요?",
      es: "¿Como le podemos ayudar?​",
      zh: "您正试图解决的主要挑战是什么？",
    },
    WF_XBU_Contact_origin: {
      en: "How did you hear about Materialise?",
      de: "Wie haben Sie von Materialise erfahren?",
      fr: "Comment avez-vous connu Materialise ?",
      it: "Come sei venuto a conoscenza di Materialise?",
      ja: "どのようにMaterialiseをお知りになりましたか？",
      ko: "Materialise를 어떻게 알게 되었나요?",
      es: "¿Cómo conoció Materialise?",
      zh: "您是如何知道Materialise玛瑞斯的？",
    },
    WF_SOFT_Technologies: {
      en: "What 3D printing technologies are you using/planning to use?",
      de: "Welche 3D-Drucktechnologien verwenden Sie/planen Sie zu verwenden?",
      fr: "Quelles technologies d'impression 3D utilisez-vous / prévoyez-vous d'utiliser ?",
      it: "Quali tecnologie di stampa 3D usi / hai intenzione di usare?",
      ja: "どの造形技術の3Dプリンタを導入済み・導入予定ですか？",
      ko: "어떤 3D 프린팅 기술을 사용 중 또는 사용할 계획인가요?",
      es: "¿Qué tecnologías de impresión 3D utiliza o tiene previsto utilizar?",
      zh: "您正在使用/计划使用的3D打印技术有哪些？",
    },
    WF_SOFT_3D_Printer: {
      en: "Which 3D printer(s) are you using/planning to use?",
      de: "Welche(n) 3D-Drucker verwenden Sie oder planen Sie zu verwenden?",
      fr: "Quelle(s) imprimante(s) 3D prévoyez-vous d'utiliser ou utilisez-vous ?",
      it: "Quale stampante (o stampanti) 3D usi o hai intenzione di usare?",
      ja: "どのメーカーの3Dプリンタを使用中・使用予定ですか？",
      ko: "어떤 3D 프린터를 사용 중 또는 사용할 계획인가요?",
      es: "¿Qué impresora(s) 3D está(n) utilizando o tiene(n) previsto utilizar?",
      zh: "您正在使用/计划使用的3D打印机是哪种(些)？",
    },
    WF_MAN_Enquiry_type: {
      en: "What is your inquiry about?",
      de: "Worum geht es in Ihrer Anfrage?",
      fr: "Quel est l'objet de votre demande ?",
      it: "Qual è l'oggetto della tua richiesta?",
      ja: "お問い合わせ内容をご記入ください",
      ko: "무엇에 관한 문의인가요?",
      es: "¿De qué trata su consulta?",
      zh: "您需要询价的产品是什么？",
    },
    WF_MAN_Comments: {
      en: "Please describe your request:",
      de: "Bitte beschreiben Sie Ihre Anfrage:",
      fr: "Veuillez décrire votre demande :",
      it: "Descrivi la tua richiesta:",
      ja: "お問い合わせ内容をご記入ください",
      ko: "문의 사항을 설명:",
      es: "Describa su consulta por favor:",
      zh: "请描述您的要求",
    },
    WF_MAN_Industry: {
      en: "Industry",
      de: "Branche",
      fr: "Industrie",
      it: "Settore",
      ja: "業種",
      ko: "산업",
      es: "Sector",
      zh: "所在行业",
      pl: "Przemysł",
    },
    WF_MAN_Industry_other: {
      en: "Please specify:",
      de: "Bitte genau angeben:",
      fr: "Veuillez spécifier :",
      it: "Specifica:",
      ja: "具体的にご入力ください",
      ko: "다음을 지정:",
      es: "Especifique por favor:",
      zh: "请具体说明：",
      pl: "Proszę określić:",
    },
    Role: {
      en: "Funtion",
      de: "Funktion",
      fr: "Fonction",
      it: "Funzione",
      ja: "職務内容",
      ko: "직책",
      es: "Puesto de trabajo",
      zh: "所需功能",
    },
    WF_SOFT_Partner_profile: {
      en: "Please select your company profile",
      de: "Bitte wählen Sie Ihr Unternehmensprofil",
      fr: "Veuillez sélectionner le profil de votre entreprise",
      it: "Seleziona il profilo della tua azienda",
      ja: "御社の事業概要を選択してください",
      ko: "회사 프로필을 선택하세요",
      es: "Seleccione el perfil de su empresa",
      zh: "请选择您的公司简介",
    },
    WF_MTN_Type_of_enquiry: {
      en: "What is your inquiry about?",
      de: "Worum geht es in Ihrer Anfrage?",
      fr: "Quel est l'objet de votre demande ?",
      it: "Qual è l'oggetto della tua richiesta?",
      ja: "お問い合わせ内容をご記入ください",
      ko: "무엇에 관한 문의인가요?",
      es: "¿De qué trata su consulta?",
      zh: "您需要询价的产品是什么？",
    },
    WF_MTN_Comments: {
      en: "Please describe your inquiry:",
      de: "Bitte beschreiben Sie Ihre Anfrage:",
      fr: "Veuillez décrire votre demande :",
      it: "Descrivi la tua richiesta:",
      ja: "お問い合わせ内容をご記入ください",
      ko: "문의 사항을 설명:",
      es: "Describa su consulta por favor:",
      zh: "请描述您的询价：",
    },
    Sector: {
      en: "Sector",
      de: "Sektor",
      fr: "Secteur",
      it: "Settore",
      ja: "業種",
      ko: "분야",
      es: "Sector",
      zh: "所在部门",
    },
    WF_SOFT_Number_of_printers: {
      en: "How many 3D printers does your company have/plan to have in the near future?",
      de: "Wie viele 3D-Drucker hat Ihr Unternehmen oder plant deren Anschaffung für die nahe Zukunft?",
      fr: "Combien d'imprimantes 3D votre entreprise a-t-elle ou prévoit-elle d'avoir dans un avenir proche ?",
      it: "Quante stampanti 3D possiede o ha intenzione di possedere la tua azienda nel prossimo futuro?",
      ja: "3Dプリンタを何台保有・近い将来保有する予定ですか？",
      ko: "귀하의 회사는 몇 대의 3D 프린터를 보유 중 또는 곧 보유할 계획인가요?",
      es: "¿Cuántas impresoras 3D tiene su empresa o planea tener en un futuro cercano?",
      zh: "贵公司拥有/计划在不久的将来拥有多少台3D打印机？",
    },
    WF_SOFT_Challenges: {
      en: "What are you hoping to achieve with our software?",
      de: "Was möchten Sie mit unserer Software erreichen?",
      fr: "Qu'espérez-vous réaliser avec notre logiciel ?",
      it: "Quali obiettivi vorresti raggiungere con il nostro software?",
      ja: "Materialiseのソフトウェアで何を実現したいとお考えですか",
      ko: "저희 소프트웨어를 통해 달성하고자 하는 것이 무엇인가요?",
      es: "¿Qué esperas conseguir con nuestro software?",
      zh: "您希望用我们的软件实现什么？",
    },
    WF_SOFT_Course:{
      en: "Which course(s) would you like to use our software for?",
      de: "Für welche(n) Kurs(e) möchten Sie unsere Software nutzen?",
      fr: "Pour quel(s) cours souhaiteriez-vous utiliser notre logiciel ?",
      it: "Per quali corsi vorresti usare il nostro software?",
      ja: "弊社のソフトウェアをお試しになるのにどのコースをご希望ですか",
      ko: "어떤 과정에 저희 소프트웨어를 사용하고자 하시나요?",
      es: "¿Para qué curso(s) te gustaría utilizar nuestro software?",
      zh: "您想在什么课程中用我们的软件？",
    },
    MED_Segment: {
      en: "What’s your field of work or interest?",
      de: "Interessengebiet",
      fr: "Domaine d'intérêt",
      it: "Campo di interesse",
      ja: "興味のある分野",
      ko: "관심 분야",
      es: "Campo de interés",
      zh: "感兴趣的领域",
    },
    Local_Last_Name: {
      en: "Last name",
      de: "Last name",
      fr: "Last name",
      it: "Last name",
      ja: "姓",
      ko: "Last name",
      es: "Last name",
      zh: "姓",
    },
    Local_First_Name: {
      en: "First name",
      de: "First name",
      fr: "First name",
      it: "First name",
      ja: "名",
      ko: "First name",
      es: "First name",
      zh: "名",
    },
    WF_MAN_Aero_company_type: {
      en: "Which of these best describes your company ?",
      de: "Welche der folgenden Aussagen beschreibt Ihr Unternehmen am besten?",
      fr: "Quelles caractéristiques décrivent le mieux votre entreprise ?",
      it: "Quale di questi descrive meglio la tua azienda?",
      ja: "御社の業種に最も近いものをお選びください",
      ko: "다음 중 귀하의 회사를 가장 잘 설명하는 것은 무엇인가요?",
      es: "¿Cuál de estas opciones describe mejor a su empresa?",
      zh: "以下哪一项最能描述您的公司？",
    },
    MTN_Profession: {
      en: "Profession",
      de: "Stellenbezeichnung",
      fr: "Poste",
      it: "Posizione",
      ja: "役職",
      ko: "직위",
      es: "Cargo",
      zh: "职务",
    }, 
    Business_Line: {
      en: "I work in:",
      de: "Ich arbeite in:",
      fr: "Je travaille dans :",
      it: "Lavoro in:",
      ja: "職場は、",
      ko: "현재 직무:",
      es: "Trabajo en:",
      zh: "我工作的领域是：",
    }, 
    WF_SOFT_3D_printing_sites: {
      en: "How many 3D printing-related sites does your company operate?",
      de: "Wie viele 3D-Druck-bezogene Websites betreibt Ihr Unternehmen?",
      fr: "Combien de sites liés à l'impression 3D votre entreprise exploite-t-elle ?",
      it: "Quanti centri di stampa 3D gestisce la tua azienda?",
      ja: "3D造形工場をいくつ運営していますか？",
      ko: "운영하고 있는 3D 프린팅 관련 사이트는 몇 개인가요?",
      es: "¿Cuántos sitios relacionados con la impresión 3D tiene su empresa?",
      zh: "贵公司运行多少个3D打印相关的工作站？",
    }, WF_XBU_Newsletter_subscribe: {
      en: "I want to receive updates and news from Materialise. I can unsubscribe at any time or change the types of communication I receive in the preference center.",
      de: "Ich möchte Updates und Neuigkeiten von Materialise erhalten. Ich kann mich jederzeit abmelden oder die Art der mir zugesandten Informationen im Preference Center ändern.",
      fr: "Je veux recevoir des mises à jour et des nouveautés Materialise. Je peux me désabonner à tout moment ou modifier les types de communication que je reçois dans le centre de préférences.",
      it: "Desidero ricevere aggiornamenti e novità da Materialise. Posso annullare l'iscrizione in qualsiasi momento o modificare i tipi di comunicazione che ricevo nel centro preferenze.",
      ja: "Materialiseからの最新情報やニュースを受け取る プリファレンスセンターで、メール購読を解除したり、受信する情報の種類をいつでも変更可能です。",
      ko: "Materialise의 업데이트와 소식을 받고 싶습니다. 언제든지 수신을 거부하거나 기본 설정 센터에서 수신 유형을 변경할 수 있습니다.",
      es: "Quiero recibir actualizaciones y noticias de Materialise. Puedo cancelar la suscripción en cualquier momento o cambiar los tipos de comunicación que recibo en el centro de preferencias.",
      zh: "我希望收到来自Materialise玛瑞斯的信息更新和资讯。我可以在首选项中心随时取消订阅或更改我收到的信息类型。",
    },
    WF_MTN_Phits: {
      en: "I would like to use phits for",
      de: "Ich möchte phits verwenden für", // deepl
      fr: "Je voudrais utiliser les phits pour", // deepl
      it: "Vorrei utilizzare i phit per", // deepl
      ja: "フィッツを使いたいのは", // deepl
      ko: "나는 핏을 사용하고 싶다", // deepl
      es: "Me gustaría utilizar phits para", // deepl
      zh: "我想用phits用于以下目的",
    },

    WF_SOFT_Subtitle_1: {
    en: "Tell us more about your request",
    de: "Erzählen Sie uns mehr über Ihr Anliegen",
    fr: "Dites-nous en plus sur votre demande",
    it: "Fornisci ulteriori dettagli sulla tua richiesta",
    ja: "お問い合わせの内容について詳しくご説明ください。",
    ko: "문의사항에 대해 조금 더 자세히 알려주세요",
    es: "Cuéntanos más sobre tu solicitud",
    zh: "告诉我们您的需求",
   },
    WF_SOFT_Subtitle_2: {
      en: "Company information",
      de: "Firmeninformation",
      fr: "Informations sur la société",
      it: "Informazioni sull'azienda",
      ja: " 会社情報",
      ko: "회사 정보",
      es: "Información sobre la empresa",
      zh: "公司信息",
    },
    WF_SOFT_Subtitle_3:{
      en: "How can we contact you?",
      de: "Wie können wir sie kontaktieren?",
      fr: "Comment pouvons-nous vous contacter?",
      it: "Indica il modo migliore per contattarti",
      ja: "弊社よりご連絡を差し上げる際のコンタクト先をご記入ください。",
      ko: "어떻게 연락드리면 될까요?",
      es: "¿Cómo podemos contactarte?",
      zh: "我们如何联系您？",
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
        ja: "送信", // deepl
        ko: "문의하기", // deepl
        es: "Enviar un mensaje", // deepl
        zh: "发送消息",
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
        zh: "下载",
      },
    ],
    [
      "Watch recording",
      {
        en: "Watch recording",
        de: "Aufzeichnung ansehen", // deepl
        fr: "Regarder l'enregistrement", // deepl
        it: "Guarda la registrazione", // deepl
        ja: "録画の視聴", // deepl
        ko: "녹화 보기", // deepl
        es: "Ver grabación", // deepl
        zh: "观看录像",
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
        zh: "下载白皮书",
      },
    ],
    [
      "Request trial access",
      {
        en: "Request trial access",
        de: "Testversion anfordern", // deepl
        fr: "Demander un essai", // deepl
        it: "Richiedi l'accesso alla prova", // deepl
        ja: "トライアルを申し込む", // deepl
        ko: "평가판 요청", // deepl
        es: "Solicitar prueba", // deepl
        zh: "请求试用权限",
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
        zh: "医疗器械研发",
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
        zh: "个性化设备设计与规划",
      },
    ],
    // [
    //   "Academic research & education",
    //   {
    //     en: "Academic research & education",
    //     de: "Akademische Forschung & Ausbildung",
    //     fr: "Recherche & éducation universitaires",
    //     it: "Ricerca e formazione accademica",
    //     ja: "学術研究・教育",
    //     ko: "학술 연구 및 교육",
    //     es: "Educación e investigación académica",
    //   },
    // ],
    // [
    //   "Hospital",
    //   {
    //     en: "Hospital",
    //     de: "Krankenhaus",
    //     fr: "Hôpital",
    //     it: "Ospedale",
    //     ja: "病院",
    //     ko: "병원",
    //     es: "Hospital",
    //   },
    // ],
    // [
    //   "Other",
    //   {
    //     en: "Other",
    //     de: "Andere",
    //     fr: "Autre",
    //     it: "Altro",
    //     ja: "その他",
    //     ko: "기타",
    //     es: "Otros",
    //   },
    // ],
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
        zh: "是",
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
        zh: "否",
      },
    ],
    // [
    //   "Abdominal",
    //   {
    //     en: "Abdominal",
    //     de: "Abdominaler Bereich",
    //     fr: "Abdominal",
    //     it: "Addominale",
    //     ja: "腹部領域",
    //     ko: "복부",
    //     es: "Abdominal",
    //   },
    // ],
    // [
    //   "Cardiovascular",
    //   {
    //     en: "Cardiovascular",
    //     de: "Kardiovaskulär",
    //     fr: "Cardiovasculaire",
    //     it: "Cardiovascolare",
    //     ja: "循環器領域",
    //     ko: "심혈관",
    //     es: "Cardiovascular",
    //   },
    // ],
    // [
    //   "Cranio-maxillofacial (CMF)",
    //   {
    //     en: "Cranio-maxillofacial (CMF)",
    //     de: "Mund-, Kiefer- und Gesichtschirurgie (MKG)",
    //     fr: "Crânio-maxillo-facial (CMF)",
    //     it: "Cranio maxillo facciale (CMF)",
    //     ja: "頭蓋顎顔面外科領域",
    //     ko: "두개악안면(CMF)",
    //     es: "Cráneo-maxilofacial (CMF)",
    //   },
    // ],
    // [
    //   "Dental",
    //   {
    //     en: "Dental",
    //     de: "Dentalbranche",
    //     fr: "Dentaire",
    //     it: "Dentale",
    //     ja: "歯科領域",
    //     ko: "치과",
    //     es: "Dental",
    //   },
    // ],
    // [
    //   "Education",
    //   {
    //     en: "Education",
    //     de: "Bildungswesen",
    //     fr: "Enseignement",
    //     it: "Istruzione",
    //     ja: "教育領域",
    //     ko: "교육",
    //     es: "Educación",
    //   },
    // ],
    // [
    //   "Gynaecology",
    //   {
    //     en: "Gynaecology",
    //     de: "Gynäkologie",
    //     fr: "Gynécologie",
    //     it: "Ginecologia",
    //     ja: "婦人科領域",
    //     ko: "여성의학과",
    //     es: "Ginecología",
    //   },
    // ],
    // [
    //   "Industrial computed tomography (CT)",
    //   {
    //     en: "Industrial computed tomography (CT)",
    //     de: "Industrielle Computertomographie (CT)",
    //     fr: "Tomodensitométrie",
    //     it: "Tomografia industriale computerizzata (CT)",
    //     ja: "産業用コンピュータ断層撮影装置（CT）",
    //     ko: "산업용 컴퓨터 단층 촬영(CT)",
    //     es: "Tomografía computarizada (TC) industrial",
    //   },
    // ],
    // [
    //   "Material science",
    //   {
    //     en: "Material science",
    //     de: "Materialwissenschaft",
    //     fr: "Science des matériaux",
    //     it: "Scienza dei materiali",
    //     ja: "材料科学分野",
    //     ko: "재료 과학",
    //     es: "Ciencia de los materiales",
    //   },
    // ],
    // [
    //   "Natural science",
    //   {
    //     en: "Natural science",
    //     de: "Naturwissenschaft",
    //     fr: "Sciences naturelles",
    //     it: "Scienze naturali",
    //     ja: "自然科学分野",
    //     ko: "자연 과학",
    //     es: "Ciencias naturales",
    //   },
    // ],
    // [
    //   "Orthopaedics",
    //   {
    //     en: "Orthopaedics",
    //     de: "Orthopädie",
    //     fr: "Orthopédie",
    //     it: "Ortopedia",
    //     ja: "整形外科領域",
    //     ko: "정형외과",
    //     es: "Ortopedia",
    //   },
    // ],
    // [
    //   "Prosthetics",
    //   {
    //     en: "Prosthetics",
    //     de: "Prothesen",
    //     fr: "Prothèses",
    //     it: "Prostetica",
    //     ja: "義肢装具領域",
    //     ko: "보철",
    //     es: "Prótesis",
    //   },
    // ],
    // [
    //   "Pulmonology",
    //   {
    //     en: "Pulmonology",
    //     de: "Pulmologie",
    //     fr: "Pneumologie",
    //     it: "Pneumologia",
    //     ja: "呼吸器領域",
    //     ko: "호흡기학",
    //     es: "Neumología",
    //   },
    // ],
    // [
    //   "Radiology",
    //   {
    //     en: "Radiology",
    //     de: "Radiologie",
    //     fr: "Radiologie",
    //     it: "Radiologia",
    //     ja: "放射線領域",
    //     ko: "방사선과",
    //     es: "Radiología",
    //   },
    // ],
    // [
    //   "Urology",
    //   {
    //     en: "Urology",
    //     de: "Urologie",
    //     fr: "Urologie",
    //     it: "Urologia",
    //     ja: "泌尿器領域",
    //     ko: "비뇨기과",
    //     es: "Urología",
    //   },
    // ],
    // [
    //   "Veterinary",
    //   {
    //     en: "Veterinary",
    //     de: "Veterinärmedizin",
    //     fr: "Médecine vétérinaire",
    //     it: "Veterinaria",
    //     ja: "獣医領域",
    //     ko: "수의학",
    //     es: "Veterinaria",
    //   },
    // ],
    // [
    //   "Aerospace",
    //   {
    //     en: "Aerospace",
    //     de: "Luft- und Raumfahrt",
    //     fr: "Aéronautique",
    //     it: "Aerospaziale",
    //     ja: "航空宇宙",
    //     ko: "항공우주",
    //     es: "Industria aeroespacial",
    //   },
    // ],
    // [
    //   "Architecture",
    //   {
    //     en: "Architecture",
    //     de: "Architektur",
    //     fr: "Architecture",
    //     it: "Architettura",
    //     ja: "建築",
    //     ko: "농업",
    //     es: "Arquitectura",
    //     zh: "建筑",
    //   },
    // ],
    // [
    //   "Art",
    //   {
    //     en: "Art",
    //     de: "Kunst",
    //     fr: "Art",
    //     it: "Arte",
    //     ja: "アート",
    //     ko: "예술",
    //     es: "Arte",
    //     zh: "艺术",
    //   },
    // ],
    // [
    //   "Automotive",
    //   {
    //     en: "Automotive",
    //     de: "Automotive",
    //     fr: "Automobile",
    //     it: "Automotive",
    //     ja: "自動車",
    //     ko: "자동차",
    //     es: "Sector automoción/motor",
    //     zh: "汽车",
    //   },
    // ],
    // [
    //   "Consumer goods",
    //   {
    //     en: "Consumer goods",
    //     de: "Konsumgüter",
    //     fr: "Biens de consommation",
    //     it: "Beni di consumo",
    //     ja: "コンシューマ製品",
    //     ko: "소비재",
    //     es: "Bienes de consumo",
    //     zh: "消费品",
    //   },
    // ],
    // [
    //   "Design bureau",
    //   {
    //     en: "Design bureau",
    //     de: "Konstruktionsbüro",
    //     fr: "Bureau d'étude",
    //     it: "Ufficio di progettazione",
    //     ja: "デザイン",
    //     ko: "설계 사무소",
    //     es: "Estudio de diseño",
    //     zh: "设计单位",
    //   },
    // ],
    // [
    //   "Energy",
    //   {
    //     en: "Energy",
    //     de: "Energie",
    //     fr: "Énergie",
    //     it: "Energia",
    //     ja: "エネルギー", // deepl
    //     ko: "에너지",
    //     es: "Energía",
    //     zh: "能源",
    //   },
    // ],
    // [
    //   "Oil & gas",
    //   {
    //     en: "Oil & gas",
    //     de: "Öl & Gas",
    //     fr: "Pétrole & gaz",
    //     it: "Petrolio e gas",
    //     ja: "石油・ガス",
    //     ko: "오일 및 가스",
    //     es: "Petróleo y gas",
    //     zh: "石油和天然气",
    //   },
    // ],
    // [
    //   "Footwear",
    //   {
    //     en: "Footwear",
    //     de: "Footwear",
    //     fr: "Chaussures",
    //     it: "Calzature",
    //     ja: "フットウェア",
    //     ko: "풋웨어",
    //     es: "Calzado",
    //     zh: "鞋类",
    //   },
    // ],
    // [
    //   "Eyewear",
    //   {
    //     en: "Eyewear", // deepl
    //     de: "Brillen", // deepl
    //     fr: "Lunettes", // deepl
    //     it: "Occhiali da vista",
    //     ja: "アイウェア", // deepl
    //     ko: "안경", // deepl
    //     es: "Gafas", // deepl
    //     zh: "眼镜",
    //   },
    // ],
    // [
    //   "Food & beverages",
    //   {
    //     en: "Food & beverages", // deepl
    //     de: "Speisen & Getränke", // deepl
    //     fr: "Nourriture et boissons", // deepl
    //     it: "Cibo e bevande", // deepl
    //     ja: "飲食物", // deepl
    //     ko: "음식 및 음료", // deepl
    //     es: "Alimentos y bebidas", // deepl
    //     zh: "食品和饮料",
    //   },
    // ],
    // [
    //   "HighTech equipment",
    //   {
    //     en: "HighTech equipment",
    //     de: "HighTech-Ausstattung", // deepl
    //     fr: "Équipements de haute technologie", // deepl
    //     it: "Attrezzatura ad alta tecnologia", // deepl
    //     ja: "ハイテク機器", // deepl
    //     ko: "하이테크 장비", // deepl
    //     es: "equipo de alta tecnología", // deepl
    //     zh: "高科技设备",
    //   },
    // ],
    // [
    //   "Medical technology",
    //   {
    //     en: "Medical technology",
    //     de: "Medizinische Technologie", // deepl
    //     fr: "Technologie médicale", // deepl
    //     it: "Tecnologia medica", // deepl
    //     ja: "医療技術", // deepl
    //     ko: "의학 기술", // deepl
    //     es: "Tecnología Medica", // deepl
    //   },
    // ],
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
        zh: "交通和重型设备",
      },
    ],
    [
      "eVTOL",
      {
        en: "eVTOL",
        de: "eVTOL",
        fr: "eVTOL",
        it: "eVTOL",
        ja: "eVTOL",
        ko: "eVTOL",
        es: "eVTOL",
        zh: "eVTOL飞行器",
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
        zh: "MRO服务",
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
        zh: "OEM",
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
        zh: "级别",
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
        zh: "无，正考虑进入3D打印领域",
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
        zh: "软件经销商",
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
        zh: "设备制造商",
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
        zh: "独立软件供应商/开发商",
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
        zh: "教育机构",
      },
    ],
    // [
    //   "Planning",
    //   {
    //     en: "Planning",
    //     de: "Planung",
    //     fr: "la planification",
    //     it: "Pianificazione",
    //     ja: "プランニング",
    //     ko: "기획",
    //     es: "La planificación",
    //   },
    // ],
    // [
    //   "Hospital research",
    //   {
    //     en: "Hospital research",
    //     de: "Krankenhausforschung",
    //     fr: "la recherche hospitalière",
    //     it: "Ricerca ospedaliera",
    //     ja: "病院研究",
    //     ko: "병원 연구",
    //     es: "La investigación hospitalaria",
    //   },
    // ],
    // [
    //   "3D printing",
    //   {
    //     en: "3D printing",
    //     de: "3D-Druck",
    //     fr: "l'impression 3D",
    //     it: "Stampa 3D",
    //     ja: "3Dプリント",
    //     ko: "3D 프린팅",
    //     es: "La impresión 3D",
    //   },
    // ],
    // [
    //   "Student",
    //   {
    //     en: "Student",
    //     de: "Student",
    //     fr: "Étudiant",
    //     it: "Studente",
    //     ja: "学生",
    //     ko: "학생",
    //     es: "Estudiante",
    //   },
    // ],
    // [
    //   "PhD researcher",
    //   {
    //     en: "PhD researcher",
    //     de: "Doktorand",
    //     fr: "Chercheur doctorant",
    //     it: "Dottore di ricerca",
    //     ja: "博士研究員",
    //     ko: "PhD 연구원",
    //     es: "Investigador de doctorado",
    //   },
    // ],
    // [
    //   "Professor",
    //   {
    //     en: "Professor",
    //     de: "Professor",
    //     fr: "Professeur",
    //     it: "Professore",
    //     ja: "教授",
    //     ko: "교수",
    //     es: "Profesor/a universitario/a",
    //   },
    // ],
    // [
    //   "Personal project",
    //   {
    //     en: "Personal project",
    //     de: "Persönliches Projekt",
    //     fr: "Projet personnel",
    //     it: "Progetto personale",
    //     ja: "個人的なプロジェクト",
    //     ko: "개인 프로젝트",
    //     es: "Proyecto personal",
    //   },
    // ],
    // [
    //   "Research project",
    //   {
    //     en: "Research project",
    //     de: "Forschungsprojekt",
    //     fr: "Projet de recherche",
    //     it: "Progetto di ricerca",
    //     ja: "研究プロジェクト",
    //     ko: "연구 프로젝트",
    //     es: "Proyecto de investigación",
    //   },
    // ],
    // [
    //   "Research project",
    //   {
    //     en: "Research project",
    //     de: "Forschungsprojekt",
    //     fr: "Projet de recherche",
    //     it: "Progetto di ricerca",
    //     ja: "研究プロジェクト",
    //     ko: "연구 프로젝트",
    //     es: "Proyecto de investigación",
    //   },
    // ],
    // [
    //   "Education project",
    //   {
    //     en: "Education project",
    //     de: "Bildungsprojekt",
    //     fr: "Projet d'enseignement",
    //     it: "Progetto formativo",
    //     ja: "教育プロジェクト",
    //     ko: "교육 프로젝트",
    //     es: "Proyecto educativo",
    //   },
    // ],
    // [
    //   "Abdominal",
    //   {
    //     en: "Abdominal",
    //     de: "Abdominaler Bereich",
    //     fr: "Abdominal",
    //     it: "Addominale",
    //     ja: "腹部領域",
    //     ko: "복부",
    //     es: "Abdominal",
    //   },
    // ],
    // [
    //   "Cardiovascular",
    //   {
    //     en: "Cardiovascular",
    //     de: "Kardiovaskulär",
    //     fr: "Cardiovasculaire",
    //     it: "Cardiovascolare",
    //     ja: "循環器領域",
    //     ko: "심혈관",
    //     es: "Cardiovascular",
    //   },
    // ],
    // [
    //   "Cranio-maxillofacial (CMF)",
    //   {
    //     en: "Cranio-maxillofacial (CMF)",
    //     de: "Mund-, Kiefer- und Gesichtschirurgie (MKG)",
    //     fr: "Crânio-maxillo-facial (CMF)",
    //     it: "Cranio maxillo facciale (CMF)",
    //     ja: "頭蓋顎顔面外科領域",
    //     ko: "두개악안면(CMF)",
    //     es: "Cráneo-maxilofacial (CMF)",
    //   },
    // ],
    // [
    //   "Dental",
    //   {
    //     en: "Dental",
    //     de: "Dentalbranche",
    //     fr: "Dentaire",
    //     it: "Dentale",
    //     ja: "歯科領域",
    //     ko: "치과",
    //     es: "Dental",
    //   },
    // ],
    // [
    //   "Education",
    //   {
    //     en: "Education",
    //     de: "Bildungswesen",
    //     fr: "Enseignement",
    //     it: "Istruzione",
    //     ja: "教育領域",
    //     ko: "교육",
    //     es: "Educación",
    //   },
    // ],
    // [
    //   "Gynaecology",
    //   {
    //     en: "Gynaecology",
    //     de: "Gynäkologie",
    //     fr: "Gynécologie",
    //     it: "Ginecologia",
    //     ja: "婦人科領域",
    //     ko: "여성의학과",
    //     es: "Ginecología",
    //   },
    // ],
    // [
    //   "Industrial computed tomography (CT)",
    //   {
    //     en: "Industrial computed tomography (CT)",
    //     de: "Industrielle Computertomographie (CT)",
    //     fr: "Tomodensitométrie",
    //     it: "Tomografia industriale computerizzata (CT)",
    //     ja: "産業用コンピュータ断層撮影装置（CT）",
    //     ko: "산업용 컴퓨터 단층 촬영(CT)",
    //     es: "Tomografía computarizada (TC) industrial",
    //   },
    // ],
    // [
    //   "Material Science",
    //   {
    //     en: "Material Science",
    //     de: "Materialwissenschaft",
    //     fr: "Science des matériaux",
    //     it: "Scienza dei materiali",
    //     ja: "材料科学分野",
    //     ko: "재료 과학",
    //     es: "Ciencia de los materiales",
    //   },
    // ],
    // [
    //   "Natural Science",
    //   {
    //     en: "Natural Science",
    //     de: "Naturwissenschaft",
    //     fr: "Sciences naturelles",
    //     it: "Scienze naturali",
    //     ja: "自然科学分野",
    //     ko: "자연 과학",
    //     es: "Ciencias naturales",
    //   },
    // ],
    // [
    //   "Natural Science",
    //   {
    //     en: "Natural Science",
    //     de: "Naturwissenschaft",
    //     fr: "Sciences naturelles",
    //     it: "Scienze naturali",
    //     ja: "自然科学分野",
    //     ko: "자연 과학",
    //     es: "Ciencias naturales",
    //   },
    // ],
    // [
    //   "Orthopaedics",
    //   {
    //     en: "Orthopaedics",
    //     de: "Orthopädie",
    //     fr: "Orthopédie",
    //     it: "Ortopedia",
    //     ja: "整形外科領域",
    //     ko: "정형외과",
    //     es: "Ortopedia",
    //   },
    // ],
    // [
    //   "Prosthetics",
    //   {
    //     en: "Prosthetics",
    //     de: "Prothesen",
    //     fr: "Prothèses",
    //     it: "Prostetica",
    //     ja: "義肢装具領域",
    //     ko: "보철",
    //     es: "Prótesis",
    //   },
    // ],
    // [
    //   "Pulmonology",
    //   {
    //     en: "Pulmonology",
    //     de: "Pulmologie",
    //     fr: "Pneumologie",
    //     it: "Pneumologia",
    //     ja: "呼吸器領域",
    //     ko: "호흡기학",
    //     es: "Neumología",
    //   },
    // ],
    // [
    //   "Radiology",
    //   {
    //     en: "Radiology",
    //     de: "Radiologie",
    //     fr: "Radiologie",
    //     it: "Radiologia",
    //     ja: "放射線領域",
    //     ko: "방사선과",
    //     es: "Radiología",
    //   },
    // ],
    // [
    //   "Urology",
    //   {
    //     en: "Urology",
    //     de: "Urologie",
    //     fr: "Urologie",
    //     it: "Urologia",
    //     ja: "泌尿器領域",
    //     ko: "비뇨기과",
    //     es: "Urología",
    //   },
    // ],
    // [
    //   "Veterinary",
    //   {
    //     en: "Veterinary",
    //     de: "Veterinärmedizin",
    //     fr: "Médecine vétérinaire",
    //     it: "Veterinaria",
    //     ja: "獣医領域",
    //     ko: "수의학",
    //     es: "Veterinaria",
    //   },
    // ],
    // [
    //   "None of the above",
    //   {
    //     en: "None of the above",
    //     de: "Keines der vorstehend aufgeführten",
    //     fr: "Aucun des domaines mentionnés ci-dessus",
    //     it: "Nessuno dei precedenti",
    //     ja: "上記以外の職務内容",
    //     ko: "해당 없음",
    //     es: "Ninguno de las anteriores",
    //   },
    // ],
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
        zh: "我想看演示",
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
        zh: "我想和销售人员沟通",
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
        zh: "我还有其他问题",
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
        zh: "臀部",
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
        zh: "截骨术",
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
        zh: "肩部",
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
        zh: "博士生",
      },
    ],
    // [
    //   "Professor",
    //   {
    //     en: "Professor",
    //     de: "Professor",
    //     fr: "Professeur",
    //     it: "Professore",
    //     ja: "教授",
    //     ko: "교수",
    //     es: "Profesor/a universitario/a",
    //   },
    // ],
    // [
    //   "Operations for personalized devices",
    //   {
    //     en: "Operations for personalized devices",
    //     de: "Operationen für personalisierte Geräte",
    //     fr: "les opérations pour les appareils personnalisés",
    //     it: "Azienda di dispositivi personalizzati",
    //     ja: "パーソナライズデバイスの運用",
    //     ko: "개인 맞춤형 장치 분야",
    //     es: "Operaciones para dispositivos personalizados",
    //   },
    // ],
    // [
    //   "R&D",
    //   {
    //     en: "R&D",
    //     de: "F&E",
    //     fr: "la R&D",
    //     it: "R&S",
    //     ja: "研究開発部門",
    //     ko: "R&D",
    //     es: "I+D",
    //   },
    // ],
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
        zh: "DPM/足科医生",
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
        zh: "骨科医生/O&P",
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
        zh: "脊骨神经科医生",
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
        zh: "理疗师",
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
        zh: "研究人员",
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
        zh: "分销商",
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
        zh: "代理商",
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
        zh: "IT部门",
      },
    ],
    [
      "Fused deposition Modeling (FDM)",
      {
        en: "Fused deposition Modeling (FDM)",
        de: "Fused Deposition Modeling (FDM)",
        fr: "Dépôt de fil fondu (FDM)",
        it: "Modellazione a deposizione fusa (FDM)",
        ja: "熱溶解積層方式",
        ko: "융합 증착 모델링(FDM)",
        es: "Modelado por deposición fundida (FDM)",
        zh: "熔融沉积成型 (FDM)",
      },
    ],
    [
      "Laser sintering",
      {
        en: "Laser sintering",
        de: "Lasersintern",
        fr: "Frittage laser",
        it: "Sinterizzazione laser",
        ja: "粉末焼結積層造形",
        ko: "레이저 소결",
        es: "Sinterización por láser",
        zh: "激光烧结",
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
        zh: "制造",
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
        zh: "金属3D打印",
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
        zh: "多射流熔融成型",
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
        zh: "原型制作",
      },
    ],
    // [
    //   "R&D",
    //   {
    //     en: "R&D",
    //     de: "F&E",
    //     fr: "la R&D",
    //     it: "R&S",
    //     ja: "研究開発部門",
    //     ko: "R&D",
    //     es: "I+D",
    //   },
    // ],
    [
      "Stereolithography",
      {
        en: "Stereolithography",
        de: "Stereolithographie",
        fr: "Stéréolithographie",
        it: "Stereolitografia",
        ja: "光造形方式",
        ko: "광조형",
        es: "Estereolitografía",
        zh: "立体光刻",
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
        zh: "硕士生",
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
        zh: "博士研究员或教授",
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
        zh: "铸造厂",
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
        zh: "工业品及设备",
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
        zh: "医疗设备和机械",
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
        zh: "加工和铣削",
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
        zh: "订单、报价或交货",
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
        zh: "技术咨询",
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
        zh: "其它",
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
        zh: "医院：大学或教学中心",
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
        zh: "醫院：區域中心",
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
        zh: "医院：私营医疗院所",
      },
    ],
    // [
    //   "Medical device company",
    //   {
    //     en: "Medical device company",
    //     de: "Unternehmen für Medizinprodukte",
    //     fr: "Entreprise de dispositifs médicaux",
    //     it: "Azienda di dispositivi medici",
    //     ja: "医療機器会社",
    //     ko: "의료 장치 회사",
    //     es: "Empresa de dispositivos médicos",
    //   },
    // ],
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
        zh: "随意使用",
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
        zh: "止痛",
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
        zh: "运动",
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
        zh: "轮廓", //deepl
      },
    ],
    [
      "Professional",
      {
        en: "Professional",
        de: "Professional", // deepl
        fr: "Professional", // deepl
        it: "Professional", // deepl
        ja: "Professional", // deepl
        ko: "Professional", // deepl
        es: "Professional", // deepl
        zh: "Professional",
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
    en: `The personal data that you provide us will be used to process your request and/or registration and in accordance with our <a class="text-mtls-color-text-link" href="https://www.materialise.com/en/data-privacy-notice" target="_blank">Privacy Notice</a>.<br>*You can unsubscribe at any time or change the types of communication you receive in our preference center.`,
    de: `Die von Ihnen zur Verfügung gestellten personenbezogenen Daten werden zur Bearbeitung Ihrer Anfrage bzw. Registrierung und in Übereinstimmung mit unserer <a class="text-mtls-color-text-link" href="https://www.materialise.com/de/datenschutzerklarung" target="_blank">Datenschutzrichtlinie</a> verwendet.`,
    fr: `Les données personnelles que vous nous fournissez seront utilisées pour traiter votre demande et/ou votre inscription conformément à notre <a class="text-mtls-color-text-link" href="https://www.materialise.com/fr/avis-relatif-a-la-protection-des-donnees" target="_blank">Avis de confidentialité</a>.`,
    it: `I dati personali che ci fornisci verranno utilizzati per gestire la tua richiesta e/o registrazione in conformità con la nostra <a class="text-mtls-color-text-link" href="https://www.materialise.com/it/informativa-sulla-privacy" target="_blank">Informativa sulla privacy</a>.`,
    ja: `お客様より当社に提供いただく個人情報は、お客様からのリクエストおよび/または登録を当社の<a class="text-mtls-color-text-link" href="https://www.materialise.com/ja/data-privacy-notice" target="_blank">プライバシーに関する通知</a>に従って処理するために使用されます。`,
    ko: `귀하가 제공하는 개인정보는 당사의 <a class="text-mtls-color-text-link" href="https://www.materialise.com/ko/data-privacy-notice" target="_blank">개인정보처리방침</a>에 따라 귀하의 요청 및/또는 등록을 처리하는 데 사용됩니다.`,
    es: `Los datos personales que nos proporcione se utilizarán para procesar su solicitud o su registro, de conformidad con nuestro <a class="text-mtls-color-text-link" href="https://www.materialise.com/es/aviso-sobre-la-privacidad-de-los-datos" target="_blank">Aviso de Privacidad</a>.`,
    zh: `您向我们提供的个人数据将遵照我们的 <a class="text-mtls-color-text-link" href="https://www.materialise.com/en/data-privacy-notice" target="_blank">隐私声明</a> 被用于处理您的请求和/或注册。<br>*您可以在首选项中心随时取消订阅或更改您收到的信息类型。`,
    pl: `The personal data that you provide us will be used to process your request and/or registration and in accordance with our <a class="text-mtls-color-text-link" href="https://www.materialise.com/en/data-privacy-notice" target="_blank">Privacy Notice</a>.<br>*You can unsubscribe at any time or change the types of communication you receive in our preference center.`,
    
  }

  const gdpr_none_legitimate = {
    en: `The personal data that you provide us will only be used to process your request and/or registration in accordance with our <a class="text-mtls-color-text-link" href="https://www.materialise.com/en/data-privacy-notice" target="_blank">Privacy Notice</a> .<br>*You can unsubscribe at any time or change the types of communication you receive in our preference center.`,
    de: `Die von Ihnen zur Verfügung gestellten personenbezogenen Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Registrierung in Übereinstimmung mit unserer <a class="text-mtls-color-text-link" href="https://www.materialise.com/de/datenschutzerklarung" target="_blank">Datenschutzrichtlinie</a> verwendet.<br>*In jeder E-Mail, die Sie von uns erhalten, finden Sie einen Link, über den Sie das Abonnement kündigen bzw. die Art der Kommunikation ändern können, die von unserer Seite aus erfolgt.`,
    fr: `Les données personnelles que vous nous fournissez seront uniquement utilisées pour traiter votre demande et/ou votre inscription conformément à notre <a class="text-mtls-color-text-link" href='https://www.materialise.com/fr/avis-relatif-a-la-protection-des-donnees' target=''_blank''>Avis de confidentialité</a>.<br>*Vous trouverez dans tous les e-mails que nous vous enverrons un lien pour vous désabonner ou modifier les types de communications que vous recevez de notre part.`,
    it: `I dati personali che ci fornisci verranno utilizzati esclusivamente per gestire la tua richiesta e/o registrazione in conformità con la nostra <a class="text-mtls-color-text-link" href='https://www.materialise.com/it/informativa-sulla-privacy' target=''_blank''>Informativa sulla privacy</a>. <br>*In ogni e-mail che ti invieremo troverai un link per annullare l''iscrizione o modificare il tipo di comunicazioni che ricevi da noi.`,
    ja: `お客様より当社に提供いただく個人情報は、お客様からのリクエストおよび/または登録を当社の<a class="text-mtls-color-text-link" href="https://www.materialise.com/ja/data-privacy-notice" target="_blank">プライバシーに関する通知</a>に従って処理するためにのみ使用されます。<br>*当社から送信するメールには、いずれも配信を停止する、または当社から受信する情報のタイプを変更するためのリンクが含まれています。`,
    ko: `귀하가 제공하는 개인정보는 당사의 <a class="text-mtls-color-text-link" href="https://www.materialise.com/ko/data-privacy-notice" target="_blank">개인정보처리방침</a>에 따라 귀하의 요청 및/또는 등록을 처리하는 데만 사용됩니다.<br>*당사가 귀하에게 발송하는 모든 이메일에는 구독 해지 또는 통신문의 유형 변경에 대한 링크를 찾아보실 수 있습니다.`,
    es: `Los datos personales que nos proporcione se utilizarán únicamente para procesar su solicitud o su registro, de conformidad con nuestro <a class="text-mtls-color-text-link" href="https://www.materialise.com/es/aviso-sobre-la-privacidad-de-los-datos" target="_blank">Aviso de Privacidad</a>.<br>*En todos los correos electrónicos que le enviemos, encontrará un enlace donde poder cancelar la suscripción o modificar los tipos de comunicaciones que desee recibir.`,
    zh: `您向我们提供的个人数据将遵照我们的 <a class="text-mtls-color-text-link" href="https://www.materialise.com/en/data-privacy-notice" target="_blank">隐私声明</a> 仅被用于处理您的请求和/或注册。<br>*您可以在首选项中心随时取消订阅或更改您收到的信息类型。`,
    pl: `The personal data that you provide us will only be used to process your request and/or registration in accordance with our <a class="text-mtls-color-text-link" href="https://www.materialise.com/en/data-privacy-notice" target="_blank">Privacy Notice</a> .<br>*You can unsubscribe at any time or change the types of communication you receive in our preference center.`,
    
  }

  const form_header = {
    en: "Download the whitepaper",
    de: "Whitepaper runterladen", // deepl
    fr: "Téléchargez le livre blanc", // deepl
    it: "Scarica il libro bianco", // deepl
    ja: "ホワイトペーパーをダウンロード", // deepl
    ko: "백서 다운로드", // deepl
    es: "Descargar el libro blanco", // deepl
    zh: "下载白皮书",
  }



  const gdpr_legit_block = document.getElementById('gdpr-legitimate')
  const gdpr_none_legit_block = document.getElementById('gdpr-none-legitimate')
  const form_header_block = document.getElementById('form_header')


  if (gdpr_legit_block) {
    gdpr_legit_block.innerHTML = language ? gdpr_legitimate[`${language}`] : gdpr_legitimate[`en`]
  }

  if (gdpr_none_legit_block) {
    gdpr_none_legit_block.innerHTML = language ? gdpr_none_legitimate[`${language}`] : gdpr_none_legitimate[`en`]
  }

  if (form_header_block) {
    form_header_block.innerHTML = language ? form_header[`${language}`] : form_header[`en`]
  }



}