/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1C3D5B",
          DEFAULT: "var(--primary-color)",
        },
        secondary: "var(--secondary-color)",
        gray: "var(--gray-color)",
        lightGray: "var(--light-gray-color)",
      },
      fontFamily: {
        sans: "var(--secondary-font)",
        heading: "var(--primary-font)",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "4.5rem" }],
        h2: ["2.5rem", { lineHeight: "3.5rem" }],
        h3: ["2rem", { lineHeight: "2.5rem" }],
        h4: ["1.75rem", { lineHeight: "2.25rem" }],
        h5: ["1.5rem", { lineHeight: "2rem" }],
        h6: ["1.25rem", { lineHeight: "1.75rem" }],
        p: ["1rem", { lineHeight: "1.75rem" }],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      boxShadow: {
        custom: "0px 4px 32px rgba(0, 0, 0, 0.08)", // 8% opacity is 0.08
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.109375) 31.6%, rgba(10, 38, 64, 0) 72.89%, #0A2640 97.87%)",
      },
    },
  },
  plugins: [],
};
