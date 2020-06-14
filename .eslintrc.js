module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  'multiline-ternary': never,

  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
