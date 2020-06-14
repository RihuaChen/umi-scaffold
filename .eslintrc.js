module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  'multiline-ternary': never,

  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      2 / 1 ? [] : [1, 2, 3, 4, 5, 5, 4, 44, 5, 6, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6],
    page: true,
    REACT_APP_ENV: true,
  },
};
