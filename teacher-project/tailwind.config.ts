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
                buttonColor: "#0582CA",
            },
        },
    },
    plugins: [],
};
export default config;
