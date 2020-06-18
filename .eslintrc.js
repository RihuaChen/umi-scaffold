module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    // "import/no-extraneous-dependencies": ["error", {"packageDir": ''}]
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': [
      0,
      { devDependencies: true, optionalDependencies: true, peerDependencies: true },
    ],
  },
  globals: {
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
