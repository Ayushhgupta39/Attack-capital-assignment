## Full Stack Blog Application

This is a full stack blog application built as a Full stack assignment for the role of Full stack developer intern at Attack capital by Ayush Gupta. It is developed with a Node.js/Express backend and a Next.js (v14) TypeScript frontend. The application features user authentication, blog posting, and secure handling of user data, as well as a stylish, responsive interface powered by Tailwind CSS.

## Table of Contents
- [Full Stack Blog Application](#full-stack-blog-application)
- [Table of Contents](#table-of-contents)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
  - [Backend Structure](#backend-structure)
  - [Frontend Structure](#frontend-structure)
- [Tech Stack](#tech-stack)
- [Running the Application](#running-the-application)
  - [Running Backend](#running-backend)
  - [Running Frontend](#running-frontend)
- [Conclusion](#conclusion)

## Setup Instructions

### Backend Setup
1. **Install Dependencies**
   
   Navigate to the backend folder:
   ```bash
   cd backend
   ```
   Install all dependencies:
   ```bash
   npm install
   ```

2. **Environment Variables**
   
   Create a `.env` file in the root of the `backend` directory. Add the following variables:
   ```
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/personal-blog
   JWT_SECRET=<YOUR_SECRET_KEY>
   ```

3. **Build and Run**
   
   To run the backend in development mode:
   ```bash
   npm run dev
   ```
   To build the project:
   ```bash
   npm run build
   ```
   To run the production build:
   ```bash
   npm start
   ```

### Frontend Setup
1. **Install Dependencies**
   
   Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
   Install all dependencies:
   ```bash
   npm install 
   ```
    **Note:** Use ```npm install --force``` if faced any dependency conflict errors.
 
2. **Environment Variables**
   
   Create a `.env.local` file in the root of the `frontend` directory. Add the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_JWT_SECRET=<YOUR_SECRET_KEY>
   ```
   **Note:** Please keep the frontend and backend JWT_SECRET same.

3. **Build and Run**
   
   To run the frontend in development mode:
   ```bash
   npm run dev
   ```
   To build the project:
   ```bash
   npm run build
   ```
   To run the production build:
   ```bash
   npm start
   ```

## Project Structure

### Backend Structure
The backend follows a structured, organized approach to API development. Below is an overview of the project structure:

```
backend
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── src
│   ├── config
│   │   └── database.ts       # Database connection configuration
│   ├── controllers
│   │   ├── post.controller.ts # Logic for handling post-related operations
│   │   └── user.controller.ts # Logic for handling user-related operations
│   ├── index.ts              # Main server entry point
│   ├── models
│   │   ├── post.model.ts     # Post data model
│   │   └── user.model.ts     # User data model
│   ├── routes
│   │   ├── auth.routes.ts    # Routes for authentication endpoints
│   │   └── post.routes.ts    # Routes for post-related endpoints
│   └── utils
│       └── auth.ts           # JWT-based authentication utilities
└── tsconfig.json
```

**Important Decisions**:
- **JWT Authentication**: For user authentication and authorization.
- **bcrypt**: For secure password hashing.
- **Mongoose**: Used for interacting with MongoDB.

### Frontend Structure
The frontend is a modern single-page application using Next.js and Tailwind CSS. Below is an overview of the project structure:

```
frontend
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── login
│   │   │   │   └── page.tsx        # Login page component
│   │   │   └── signup
│   │   │       └── page.tsx        # Signup page component
│   │   ├── dashboard
│   │   │   ├── layout.tsx         # Dashboard layout
│   │   │   └── page.tsx           # Dashboard page
│   │   ├── favicon.ico
│   │   ├── fonts                  # Custom fonts
│   │   ├── globals.css            # Global CSS with Tailwind integration
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   └── posts
│   │       └── [id]
│   │           ├── error.tsx      # Error page for individual post
│   │           ├── layout.tsx     # Layout for individual post
│   │           ├── loading.tsx    # Loading state component
│   │           └── page.tsx       # Post details page
│   ├── components
│   │   ├── AuthProvider.tsx       # Authentication provider
│   │   ├── BlogCard.tsx          # Blog post preview card
│   │   ├── HomePage.tsx          # Home page component
│   │   └── Navbar.tsx            # Navigation bar component
│   ├── lib
│   │   ├── api.ts                # API communication utilities
│   │   ├── auth.ts               # Authentication utilities
│   │   └── server-api.ts         # Server-side API functions
│   ├── types
│   └── utils
│       └── decodeJWT.ts          # JWT decoding utility
├── tailwind.config.ts
└── tsconfig.json
```

**Important Decisions**:
- **Next.js Pages**: Server-side rendering (SSR) is used for SEO benefits and better page load performance.
- **JWT Handling**: JWT-based authentication for private routes.
- **Tailwind CSS**: To easily manage consistent styling across the application.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, BCryptJS.
- **Frontend**: Next.js, TypeScript, Tailwind CSS, React Hook Form for form handling, Zod for schema validation.
- **API Communication**: Axios for HTTP requests.

## Running the Application
To run the full stack application, make sure both backend and frontend servers are running concurrently.

### Running Backend
- Start the backend in development mode:
  ```bash
  cd backend
  npm run dev
  ```

### Running Frontend
- Start the frontend in development mode:
  ```bash
  cd frontend
  npm run dev
  ```

The application will now be accessible locally via:
- Backend: [http://localhost:5000](http://localhost:5000)
- Frontend: [http://localhost:3000](http://localhost:3000)

## Conclusion
This project offers a full stack implementation of a blog system, combining a secure, robust backend with a modern, user-friendly frontend. This README provides a detailed overview to help set up, understand the structure, and run the project effectively.

Thank you so much.
