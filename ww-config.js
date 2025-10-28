export default {
  editor: {
    label: {
      en: "Smart Section",
    },
    icon: "section",
  },
  properties: {
    // Content Properties
    heading: {
      label: { en: "Heading" },
      type: "Text",
      section: "settings",
      defaultValue: "Welcome to Your App",
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Main heading text",
      },
      /* wwEditor:end */
    },
    subheading: {
      label: { en: "Subheading" },
      type: "Text",
      section: "settings",
      defaultValue: "Build amazing experiences with our platform",
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Subheading text",
      },
      /* wwEditor:end */
    },
    showCTA: {
      label: { en: "Show Call-to-Action" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },
    ctaText: {
      label: { en: "CTA Button Text" },
      type: "Text",
      section: "settings",
      defaultValue: "Get Started",
      bindable: true,
      hidden: (content) => !content?.showCTA,
    },
    ctaLink: {
      label: { en: "CTA Link" },
      type: "Text",
      section: "settings",
      defaultValue: "#",
      bindable: true,
      hidden: (content) => !content?.showCTA,
    },

    // Layout Properties
    alignment: {
      label: { en: "Content Alignment" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
          { value: "right", label: "Right" },
        ],
      },
      defaultValue: "center",
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Valid values: left | center | right",
      },
      /* wwEditor:end */
    },
    minHeight: {
      label: { en: "Minimum Height" },
      type: "Length",
      section: "settings",
      defaultValue: "400px",
      bindable: true,
    },
    padding: {
      label: { en: "Padding" },
      type: "Length",
      section: "settings",
      defaultValue: "40px",
      bindable: true,
    },

    // Style Properties
    backgroundColor: {
      label: { en: "Background Color" },
      type: "Color",
      section: "style",
      defaultValue: "#1a1a2e",
      bindable: true,
    },
    useGradient: {
      label: { en: "Use Gradient Background" },
      type: "OnOff",
      section: "style",
      defaultValue: true,
      bindable: true,
    },
    gradientColor: {
      label: { en: "Gradient Color" },
      type: "Color",
      section: "style",
      defaultValue: "#16213e",
      bindable: true,
      hidden: (content) => !content?.useGradient,
    },
    textColor: {
      label: { en: "Text Color" },
      type: "Color",
      section: "style",
      defaultValue: "#ffffff",
      bindable: true,
    },
    headingSize: {
      label: { en: "Heading Size (Desktop)" },
      type: "Length",
      section: "style",
      defaultValue: "48px",
      bindable: true,
    },
    headingSizeMobile: {
      label: { en: "Heading Size (Mobile)" },
      type: "Length",
      section: "style",
      defaultValue: "32px",
      bindable: true,
    },

    // Button Style
    buttonBackground: {
      label: { en: "Button Background" },
      type: "Color",
      section: "style",
      defaultValue: "#0f3460",
      bindable: true,
      hidden: (content) => !content?.showCTA,
    },
    buttonTextColor: {
      label: { en: "Button Text Color" },
      type: "Color",
      section: "style",
      defaultValue: "#ffffff",
      bindable: true,
      hidden: (content) => !content?.showCTA,
    },
    buttonHoverBackground: {
      label: { en: "Button Hover Background" },
      type: "Color",
      section: "style",
      defaultValue: "#e94560",
      bindable: true,
      hidden: (content) => !content?.showCTA,
    },
    borderRadius: {
      label: { en: "Border Radius" },
      type: "Length",
      section: "style",
      defaultValue: "12px",
      bindable: true,
    },
  },
  triggerEvents: [
    {
      name: "cta-click",
      label: { en: "On CTA Click" },
      event: { value: "" },
    },
  ],
};
