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

function pardot_add_error_message(language) {
  const error_texts = {
    first_name: {
      en: "Please provide your first name",
      de: "TO TRANLSATE - Please provide your first name",
    },
    last_name: {
      en: "Please provide your last name",
      de: "TO TRANLSATE - Please provide your last name",
    },
    email: {
      en: "Please provide your email address, formatted as  example@domain.com",
      de: "TO TRANLSATE - Please provide your email address, formatted as  example@domain.com",
    },
  };

  for (const [key] of Object.entries(error_texts)) {
    if (error_texts[`${key}`][`${language}`]) {
      console.log("it works");
      document.querySelector(`.${key} .error_texts`)
        ? (document.querySelector(`.${key} .error_texts`).textContent =
            error_texts[`${key}`][`${language}`])
        : "";
    }
  }
}
