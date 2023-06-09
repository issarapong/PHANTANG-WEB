## 1. Install package
```
pnpm create vite . --template react 
pnpm add react-router-dom
pnpm add react-redux @reduxjs/toolkit
pnpm add axios
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```
## 2. config tailwind  

https://tailwindcss.com/docs/guides/create-react-app  

## 3. run with 
```
pnpm run dev
```

## 5. Integrate-page-router
```
📦PHANTANG-WEB
 ┣ 📂public
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜react.svg
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜Container.jsx
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜GroupPage.jsx
 ┃ ┃ ┣ 📜HomePage.jsx
 ┃ ┃ ┣ 📜LoginPage.jsx
 ┃ ┃ ┣ 📜ProfilePage.jsx
 ┃ ┃ ┗ 📜RegisterPage.jsx
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜Router.jsx
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.eslintrc.cjs
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┗ 📜vite.config.js
 ```
 ## 6. Integrate-form-register-login  


 ## 7. Integrate-redux-axios-api 

 ### Redux
/src/features/auth/slice/auth-slice.js
/src/store/index.js

### Axios API

/src/config/env.js
/src/api/axios.js
## Auth
/src/utils/localstorage.js

### Register
src/features/auth/components/RegisterForm.jsx

### Login
/src/features/auth/components/LoginForm.jsx






## ERROR
e.preventDefault();  // ต้องกำหนดไว้ไม่งั้น Metthod ที่ส่งไปหลังบ้านจะ เป็น Get แทน