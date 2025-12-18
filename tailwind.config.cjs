/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            raleway: ["Raleway", "sans-serif"],
        },
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#6EAC30",
                    dark: "#2E7A12",
                    soft: "#EAF7E4",
                },
            },
            boxShadow: {
                soft: "0 10px 30px rgba(15, 23, 42, 0.10)",
                card: "0 14px 40px rgba(15, 23, 42, 0.12)",
            },
        },
    },
    plugins: [],
};
