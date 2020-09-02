module.exports = {
  plugins: ["react-native"],
  extends: ["plugin:react-native/all"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },
};
