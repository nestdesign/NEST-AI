Add ESLint config and a basic test scaffold.

Next steps to enable tests fully:

1) Install dev dependencies (example):
   npm install --save-dev eslint
   npm install --save-dev mocha

2) Add a test script in chatgpt-clone/package.json:
   "scripts": {
     "test": "mocha test/**/*.test.js"
   }

3) Run tests locally:
   cd chatgpt-clone
   npm install
   npm test
