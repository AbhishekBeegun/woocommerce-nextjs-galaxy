/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    textColor: {
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",
  
    },
    backgroundColor: {
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",
      "dark":"black",
   
    },
    extend: {},
  },
  plugins: [],
}
