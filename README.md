# 🏦 RevoBank API

A RESTful Banking API built with TypeScript as part of **RevoU Full Stack Software Engineering (FSSE) Milestone 4**.

🚀 **Live Demo:** [https://milestone-4-wmibrahim-production.up.railway.app/api#/](https://milestone-4-wmibrahim-production.up.railway.app/api#/)

📄 **API Documentation (Swagger):** [https://milestone-4-wmibrahim-production.up.railway.app/api#/](https://milestone-4-wmibrahim-production.up.railway.app/api#/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

---

## 📌 Overview

RevoBank API is a backend service that simulates core banking operations such as user registration, authentication, account management, and transactions. Built using Node.js and TypeScript with a focus on clean architecture and RESTful design principles.

---

## 🛠 Tech Stack

| Category     | Technology                     |
|--------------|-------------------------------|
| Language     | TypeScript                    |
| Runtime      | Node.js                       |
| Framework    | Express.js                    |
| Database     | Supabase (PostgreSQL)         |
| Auth         | JWT (JSON Web Token)          |
| Deploy       | Railway (via nixpacks)        |
| Containerize | Docker                        |

---

## ✨ Features

- 🔐 **User Authentication** — Register & login with JWT-based auth
- 👤 **User Management** — CRUD operations for user profiles
- 🏦 **Account Management** — Create and manage bank accounts
- 💸 **Transactions** — Deposit, withdrawal, and transfer between accounts
- 📄 **Transaction History** — View detailed transaction logs
- 🛡️ **Role-Based Access Control** — Secure endpoints by user role

---

## 📂 Project Structure

```
milestone-4-wmibrahim/
├── revobank-api/           # Main API source code
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── middlewares/    # Auth & validation middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic
│   │   └── index.ts        # App entry point
│   ├── Dockerfile
│   └── package.json
├── nixpacks.toml           # Railway deployment config
├── .railpackrc             # Railpack config
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- PostgreSQL or MySQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/Revou-FSSE-Oct25/milestone-4-wmibrahim.git
cd milestone-4-wmibrahim/revobank-api

# Install dependencies
npm install

# Copy env file and configure
cp .env.example .env
```

### Running Locally

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

### Using Docker

```bash
# Build and run with Docker
docker build -t revobank-api .
docker run -p 3000:3000 --env-file .env revobank-api
```

---

## 🔑 Environment Variables

Create a `.env` file in the `revobank-api/` directory:

```env
# Server
PORT=3000
NODE_ENV=development

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint             | Description       | Auth Required |
|--------|----------------------|-------------------|---------------|
| POST   | `/api/auth/register` | Register new user | No            |
| POST   | `/api/auth/login`    | Login & get token | No            |

### Users

| Method | Endpoint          | Description        | Auth Required |
|--------|-------------------|--------------------|---------------|
| GET    | `/api/users/me`   | Get current user   | Yes           |
| PUT    | `/api/users/me`   | Update profile     | Yes           |
| DELETE | `/api/users/me`   | Delete account     | Yes           |

### Accounts

| Method | Endpoint            | Description             | Auth Required |
|--------|---------------------|-------------------------|---------------|
| POST   | `/api/accounts`     | Create bank account     | Yes           |
| GET    | `/api/accounts`     | Get all user accounts   | Yes           |
| GET    | `/api/accounts/:id` | Get account by ID       | Yes           |

### Transactions

| Method | Endpoint               | Description              | Auth Required |
|--------|------------------------|--------------------------|---------------|
| POST   | `/api/transactions`    | Create transaction       | Yes           |
| GET    | `/api/transactions`    | Get transaction history  | Yes           |

---

## ☁️ Deployment

This project is deployed on **[Railway](https://railway.com/project/07120e72-1136-4a58-82d6-8ddbe3c4fcae)** with **[Supabase](https://supabase.com)** as the managed PostgreSQL database.

### Stack
| Service  | Platform |
|----------|----------|
| API Host | [Railway](https://milestone-4-wmibrahim-production.up.railway.app/api#/) |
| Database | [Supabase](https://supabase.com/dashboard/org/fkjvmaitnucdwpzbvohv) |

### Deploy to Railway

1. Push your code to GitHub
2. Connect the repo to Railway
3. Add your environment variables in the Railway dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET`
4. Railway will auto-detect and deploy using `nixpacks.toml`

---

## 👤 Author

**wmibrahim**
- GitHub: [@wmibrahim](https://github.com/wmibrahim)
- RevoU FSSE Oct 2025 Cohort

---

## 📝 License

This project is created for educational purposes as part of the RevoU Full Stack Software Engineering program.

---

> Built with ❤️ as part of RevoU FSSE Milestone 4