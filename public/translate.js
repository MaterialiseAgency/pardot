function pardot_translate(language) {
  const labels = {
    first_name: {
      en: "First name",
      de: "Vorname",
      fr: "Prénom",
      it: "Nome",
      ja: "名",
      ko: "이름",
      es: "Nombre",
    },
    last_name: {
      en: "Last Name",
      de: "Nachname",
      fr: "Nom",
      it: "Cognome",
      ja: "姓",
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
      en: "Company/Organization/Hospital",
      de: "Unternehmen/Organisation/Krankenhaus",
      fr: "Entreprise/organisation/hôpital",
      it: "Azienda/Organizzazione/Ospedale",
      ja: "会社名／組織名／病院名",
      ko: "회사/조직/병원",
      es: "Empresa/Organización/Hospital",
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
  };

  /* 
  en: "",
    de: "",
        fr: "",
        it: "",
        ja: "",
        ko: "",
        es: "",
*/

  for (const [key] of Object.entries(labels)) {
    if (labels[`${key}`][`${language}`]) {
      document.querySelector(`.${key} label`)
        ? (document.querySelector(`.${key} label`).textContent =
            labels[`${key}`][`${language}`])
        : "";
    }
  }
}
