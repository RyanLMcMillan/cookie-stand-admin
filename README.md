# Lab -Class 37
## Project - Cookie Stand Admin
### Author: Ryan McMillan

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

### Collaborators 
- Riki Plaza
- Alec Torres
- Jamall Malik