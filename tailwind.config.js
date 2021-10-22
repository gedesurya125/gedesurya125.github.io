module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        keepGrow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        rubberBand: {
          "0%": { transform: "scaleY(1.4) scaleX(0.6)" },
          "10%": { transform: "scaleY(0.7) scaleX(1.3)" },
          "20%": { transform: "scaleY(1.2) scaleX(0.8)" },
          "30%": { transform: "scaleY(0.85) scaleX(1.15)" },
          "40%": { transform: "scaleY(1.12) scaleX(0.88)" },
          "50%": { transform: "scaleY(0.9) scaleX(1.1)" },
          "60%": { transform: "scaleY(1.08) scaleX(0.92)" },
          "70%": { transform: "scaleY(0.94) scaleX(1.06)" },
          "80%": { transform: "scaleY(1.03) scaleX(0.97)" },
          "90%": { transform: "scaleY(0.99) scaleX(1.01)" },
          "100%": { transform: "scaleY(1) scaleX(1)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rubber: "rubberBand 0.9s linear 1 forwards",
        keepGrow: "keepGrow 0.3s ease 1 forwards",
      },
    },
  },
  variants: {
    extend: {
      translate: ["hover", "group-hover"],
      animation: ["hover", "focus"],
      cursor: ["hover"],
    },
  },
  plugins: [],
};
