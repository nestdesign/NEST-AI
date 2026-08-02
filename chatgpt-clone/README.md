Quick start (Hindi)

1) Clone or make a new folder and put the files from this folder `chatgpt-clone`:
   - server.js
   - package.json
   - public/index.html

2) Install:
   npm install

3) Create .env file in project root with:
   OPENAI_API_KEY=sk-...

4) Start:
   npm start

5) Open:
   http://localhost:3000

Notes:
- This app forwards chat messages to OpenAI Chat Completions (gpt-3.5-turbo). Change model or options in server.js.
- For production, secure the server and limit requests (rate limit, auth).
