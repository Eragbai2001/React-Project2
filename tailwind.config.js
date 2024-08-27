/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#E7F6DF",
        "customary-bg": "#FFFFFF",
        "customary-lg": "#07B195",
        color: " hsl(193, 38%, 86%)",
      },
      spacing: {
        128: "140px", // Custom size for 32rem
        144: "60px", // Custom size for 36rem
        142: "39px", // Custom size for 36rem
        140: "20rem", // Custom size for 36rem
        141: "500px", // Custom size for 36rem
      },
      borderWidth: {
        3: "3px", // Custom border width
        // Add other custom widths here
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1115px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "639px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"], // Add this line
      },
    },
  },
  variants: {},
  plugins: [],
};
