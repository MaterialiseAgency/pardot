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

let language = "fr";

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
