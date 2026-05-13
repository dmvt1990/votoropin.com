/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF7F0",
        "bg-sunken": "#F2EDE0",
        ink: "#1A1A1A",
        "ink-soft": "#3D3D3A",
        "ink-mute": "#8A857C",
        rule: "#D9D2C0",
        accent: "#6B1F2E",
        "accent-soft": "#9B3148",
        positive: "#2D5A3D",
        negative: "#8B2C2C",
        gold: "#A78534",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-md": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.025em",
        wider2: "0.12em",
        widest2: "0.18em",
      },
      maxWidth: {
        prose2: "65ch",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#3D3D3A",
            "--tw-prose-headings": "#1A1A1A",
            "--tw-prose-links": "#6B1F2E",
            "--tw-prose-bold": "#1A1A1A",
            "--tw-prose-counters": "#8A857C",
            "--tw-prose-bullets": "#D9D2C0",
            "--tw-prose-hr": "#D9D2C0",
            "--tw-prose-quotes": "#1A1A1A",
            "--tw-prose-quote-borders": "#6B1F2E",
            "--tw-prose-captions": "#8A857C",
            "--tw-prose-th-borders": "#D9D2C0",
            "--tw-prose-td-borders": "#D9D2C0",
          },
        },
      }),
    },
  },
  plugins: [],
};
