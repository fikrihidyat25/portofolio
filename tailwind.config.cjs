module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: "#0F766E",
          dark: "#115E59",
          light: "#14B8A6",
          accent: "#0D9488"
        }
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)"
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    },
  },
  plugins: [],
};

