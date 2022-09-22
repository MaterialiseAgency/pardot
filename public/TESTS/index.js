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

const pardot_submit_text = document.querySelector(".pardot-form-button").value;

const map = new Map([
  [
    "Send message",
    {
      en: "First name",
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
      de: "Herunterladen",
      fr: "Télécharger",
      it: "Scaricare",
      ja: "ダウンロード",
      ko: "다운로드",
      es: "Descargar",
    },
  ],
]);

if (document.querySelector(".pardot-form-button")) {
  document.querySelector(".pardot-form-button").value =
    map.get(pardot_submit_text).fr;
}
