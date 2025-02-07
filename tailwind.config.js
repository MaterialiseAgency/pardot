
module.exports = { 
  plugins: [
  ],  
  purge: [
     './public/pages/form.html',
  ],
  content: [ './public/pages/**/*.{html,js}', './components/**/*.{html,js}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // based on https://www.figma.com/file/7V2FWyKI6ACqpS3zPpuiyy/Grid?node-id=124%3A120
    screens: {
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "900px",
      // => @media (min-width: 900px) { ... }

      lg: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1870px",
      // => @media (min-width: 1870px) { ... }
    },
    fontFamily: {
      Nunito: ["Nunito Sans"],
      Metronic: ["Metronic Pro Regular"],
      Roboto: ["Roboto"],
    },

    extend: {
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumnStart: {
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      gridColumnEnd: {
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
      colors: {
        mat_primary: "#F58025",
        mat_primar_light: "#FCD7BA",
        mat_gray: "#EAEAEA",
        mat_gray_light: "#F7F7F7",
        mat_black: "#030303",
        mat_black_light: "#343434",
        mat_form_fields: "#F7F9FC",
        mat_gray_bold: "#8F8F8F",
      },
      colors: {
        "secondary_500": "#F0B323",
        "sub-text": "#4E5D6B",
        "color-primary-800": "#001D36",
        "mtls-color-text": "#0D0D17",
        "mtls-color-text-weak": "#4E5D6B",
        "mtls-color-text-disabled": "#B3BAC3",
        "mtls-color-text-active": "#004684",
        "mtls-color-primary-900": "#000911",
        "mtls-color-primary-810": "#00182C",
        "mtls-color-primary-800": "#001D36",
        "mtls-color-primary-700": "#00305B",
        "mtls-color-primary-600": "#E61E50",
        "mtls-color-primary-500": "#0058A5",
        "mtls-color-primary-400": "#397EB9",
        "mtls-color-primary-300": "#CCCCCC",
        "mtls-color-primary-200": "#ACC9E2",
        "mtls-color-primary-100": "#E6EEF6",
        "mtls-color-primary-white": "#FFFFFF",
        "mtls-color-accent-500": "#1D74C0",
        "mtls-color-secondary-900": "#181204",
        "mtls-color-secondary-800": "#43320A",
        "mtls-color-secondary-700": "#6E5210",
        "mtls-color-secondary-600": "#C5931D",
        "mtls-color-secondary-500": "#F0B323",
        "mtls-color-secondary-550": "#D9A21F",
        "mtls-color-secondary-400": "#F5CE72",
        "mtls-color-secondary-300": "#F8DC9A",
        "mtls-color-secondary-200": "#FBEAC1",
        "mtls-color-secondary-100": "#FEF7E9",
        "mtls-color-neutral-900": "#090E11",
        "mtls-color-neutral-850": "#383C3E",
        "mtls-color-neutral-800": "#344450",
        "mtls-color-neutral-700": "#4E5D6B",
        "mtls-color-neutral-600": "#687787",
        "mtls-color-neutral-500": "#8C96A2",
        "mtls-color-neutral-400": "#B3BAC3",
        "mtls-color-neutral-border-default-300": "#D9DDE1",
        "mtls-color-neutral-200": "#EFF1F3",
        "mtls-color-neutral-100": "#F7F8F9",
        "mtls-color-background-secondary-200": "#FBEAC1",
        "mtls-color-background-secondary-100": "#FEF7E9",
        "mtls-color-background-neutral-200": "#EFF1F3",
        "mtls-color-background-neutral-100": "#F7F8F9",
        "mtls-color-background-primary-100": "#E6EEF6",
        "mtls-color-info-text": "#0B2E4B",
        "mtls-color-info-highlight": "#2699FB",
        "mtls-color-info-background": "#E9F5FF",
        "mtls-color-warning-text": "#171100",
        "mtls-color-warning-highlight": "#EAAE00",
        "mtls-color-warning-background": "#FDF7E6",
        "mtls-color-danger-text": "#110001",
        "mtls-color-danger-highlight": "#A50005",
        "mtls-color-danger-background": "#F6E6E6",
        "mtls-color-text-link": "#3366CC",
        "mtls-color-text-link-hover": "#7C9DDE",
        "mtls-color-text-link-visited": "#884488",
        "mtls-color-background-link-hover": "#EBF0FA",
        "mtls-color-primary-background-button-hover-700": "#00305B",
        "mtls-color-primary-background-button-500": "#0058A5",
        "mtls-color-border-button-primary-active-700": "#ACC9E2",
        "mtls-color-text-button-secondary-900": "#181204",
        "mtls-color-button-secondary-500": "#F0B323",
      },
      fontSize: {
        "size-100": "0.875rem",
        "size-200": "1rem",
        "size-300": "1.125rem",
        "size-400": "1.25rem",
        "size-500": "1.375rem",
        "size-600": "1.5rem",
        "size-700": "1.75rem",
        "size-800": "2.25rem",
        "size-900": "3rem",
      },
      letterSpacing: {
        "letter-spacing-neg-2": "-0.02em",
        "letter-spacing-neg-1": "-0.01em",
        "letter-spacing-normal": "normal",
        "letter-spacing-pos-1": "0.01em",
        "letter-spacing-pos-2": "0.02em",
      },
      fontWeight: {
        "weight-extra-light": "200",
        "weight-light": "300",
        "weight-regular": "400",
        "weight-semibold": "600",
        "weight-bold": "700",
      },
      lineHeight: {
        "line-height-1": "1",
        "line-height-2": "1.2",
        "line-height-3": "1.5",
        "line-height-4": "1.6",
        "line-height-5": "1.78",
      },
      borderRadius: {
        0: "none",
        10: "2px",
        20: "4px",
        30: "8px",
        circle: "50%",
      },
      borderWidth: {
        0: "0",
        10: "1px",
        20: "2px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
      textColor: ["active", "visited"],
    },
  },
 
};
