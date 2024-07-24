# sso-app

SSO auth app using Google.

FRONTEND: React, Typescript, Router and @react-oauth/google.
BACKEND: Node, TypeScript, Express and google-auth-library.

## Instructions

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

# Clone this repository
```bash
git clone https://github.com/init1-dev/sso-app.git
```
# Setup .env: Frontend
- VITE_GOOGLE_CLIENT_ID : Use your GOOGLE_CLIENT_ID

# Setup .env: Backend
- SESSION_SECRET : Generate secret key using openssl, you can find it on your Git installation folder, by default: `C:\Program Files\Git\usr\bin\openssl.exe`
```bash
# If you already had it installed:
openssl rand -base64 32
# Using git openssl.exe
rand -base64 32
```
- GOOGLE_CLIENT_ID : Use your GOOGLE_CLIENT_ID

# Install dependencies and run
```bash
cd frontend
npm i
npm run dev
cd ../backend
npm i
npm run dev
```