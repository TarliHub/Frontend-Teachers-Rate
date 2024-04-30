import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                formBgColor: "rgba(217, 217, 217, 0.58)",
                headerFormBgColor: "rgba(217, 217, 217)",
                primaryBlue: "#0582CA",
                secondaryBlue: "#00B7F3",
                primaryBg: "#D9D9D9",
                formTextColor: "#03071E",
            },
        },
    },
    plugins: [],
};
export default config;
