# Lab -Class 37, 38, & 39
## Project - Cookie Stand Admin
### Author: Ryan McMillan

## Deployed Site
- [Click Here](https://cookie-stand-admin-omega-nine.vercel.app/)

## Setup 
Tailwind

Next.js

## How to initialize/run your application
```
npx create-next-app my-project
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
@tailwind base;
@tailwind components;
@tailwind utilities;
npm run dev
```

- Login & pw
  - admin

- ENV REQUIREMENTS
```
NEXT_PUBLIC_API_URL=(insert link here)
NEXT_PUBLIC_RESOURCE_URL=(insert link here)
```

### Collaborators 
- Riki Plaza
- Alec Torres
- Jamall Malik
