import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      monospaced: ["Source Code Pro", "monospace"],
    },
    extend: {
      backgroundImage: {
        "image-custom": "url('img/space.jpg')",
      },
      colors: {
        "black-semitransparent": "rgba(0, 0, 0, .4)",
      },
    },
  },
} as Options;
