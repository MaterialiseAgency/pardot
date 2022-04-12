function pardot_translate(language) {
  const labels = {
    first_name: {
      en: "First name",
      de: "Vorname",
    },
    last_name: {
      en: "Last Name",
      de: "Nachname",
    },
    email: {
      en: "Email",
      de: "",
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
}
