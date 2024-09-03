/** @type {import('tailwindcss').Config} */
export default {
    content: ["./views/**/*.ejs"],
    theme: {
        extend: {
            colors: {
                basic: "#48426D",
                primary: "#312C51",
                secondary: "#F0C38E",
                tertiary: "#F1AA9B",
                whiteBase: "#F2F1EF",
            },
        },
    },
    plugins: [],
};
