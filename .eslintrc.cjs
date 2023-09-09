module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
		"prettier/@typescript-eslint"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: "prettier/@typescript-eslint",
  plugins: ['react-refresh', "@typescript-eslint"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
