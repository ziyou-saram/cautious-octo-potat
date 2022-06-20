module.exports = {
  content: ["./*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
