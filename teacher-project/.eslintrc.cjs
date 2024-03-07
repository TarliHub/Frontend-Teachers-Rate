module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "react/prop-types": 0, // It means we can write any function/component without PropTypes. (A good practice is to use PropTypes)
        indent: ["error", 4], // It rule makes the indentation of 4 spaces, for more readability of the code.
        "linebreak-style": ["error", "windows"], // It rule makes the linebreaks consistent across operating systems.
        quotes: ["error", "double"], // This rule enforces the use of double quotes for string literals.
        semi: ["error", "always"],
    },
};
