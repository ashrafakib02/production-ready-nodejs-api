# 🚀 Production-Ready Node.js Backend API

> Secure, scalable REST API demonstrating real-world backend engineering — not just CRUD.

[![CI](https://github.com/ashrafakib02/production-ready-nodejs-api/actions/workflows/ci.yml/badge.svg)](https://github.com/ashrafakib02/production-ready-nodejs-api/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma-316192?style=flat-square&logo=postgresql)](https://www.postgresql.org)
[![Swagger](https://img.shields.io/badge/Docs-Swagger-85EA2D?style=flat-square&logo=swagger)](https://production-ready-nodejs-api-p9t1.onrender.com/api-docs)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

## 🌐 Live Links

| Service | URL |
|---|---|
| API Base | [production-ready-nodejs-api-p9t1.onrender.com](https://production-ready-nodejs-api-p9t1.onrender.com) |
| Swagger Docs | [/api-docs](https://production-ready-nodejs-api-p9t1.onrender.com/api-docs) |

---

## 📸 Screenshots

### Swagger API Documentation
![Swagger](./screenshots/swagger.png)

---

## 🧠 What Problem This Solves

Most Node.js tutorials stop at basic CRUD. Real production backends need:

- **Secure auth** — JWT with bcrypt password hashing
- **Multi-user isolation** — users only see their own data
- **Efficient querying** — pagination, filtering, search at the API level
- **Observability** — structured logging, meaningful error responses
- **Security hardening** — rate limiting, Helmet headers, input validation
- **Reliable deployments** — automated CI/CD with GitHub Actions

This project addresses all of the above. Built on patterns used across 6+ production APIs over 18 months, reducing integration times by 35% and maintaining 99.95% uptime SLAs.

---

## ⚡ Features

- JWT authentication with protected routes
- Password hashing with bcrypt
- Task CRUD with per-user ownership validation
- Pagination, filtering, sorting, and search
- Helmet security headers
- Rate limiting (express-rate-limit)
- Swagger API documentation
- Structured logging with Morgan
- Jest test suite
- CI/CD with GitHub Actions
- Clean layered architecture (routes → controllers → services → Prisma)

---

## 🧱 Architecture

```
Client
  ↓
Routes
  ↓
Controllers (request/response)
  ↓
Services (business logic)
  ↓
Prisma ORM
  ↓
PostgreSQL
```

Clean separation of concerns. Each layer has a single responsibility.

---

## 📂 Project Structure

```
src/
├── config/          # Environment & app config
├── controllers/     # Request handlers
├── middlewares/     # Auth, error handling, validation
├── routes/          # API route definitions
├── services/        # Business logic
├── validators/      # Input validation schemas
└── utils/           # Helpers & utilities

tests/               # Jest test suites
```

---

## 🔗 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Register user |
| POST | `/api/v1/auth/login` | Login |

### User
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/users/me` | Get profile (protected) |

### Tasks
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/tasks` | Create task |
| GET | `/api/v1/tasks` | Get all tasks (paginated) |
| GET | `/api/v1/tasks/:id` | Get task by ID |
| PUT | `/api/v1/tasks/:id` | Update task |
| DELETE | `/api/v1/tasks/:id` | Delete task |

---

## 📦 Example Request

```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

## ⚠️ Error Response Format

```json
{
  "status": "error",
  "message": "User already exists",
  "data": null
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | JWT + bcrypt |
| Validation | express-validator |
| Security | Helmet, rate-limit |
| Logging | Morgan |
| Testing | Jest + Supertest |
| Docs | Swagger / OpenAPI |
| CI/CD | GitHub Actions |
| Hosting | Render |

---

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/ashrafakib02/production-ready-nodejs-api
cd production-ready-nodejs-api

# 2. Install
npm install

# 3. Configure environment
cp .env.example .env
# Fill in: DATABASE_URL, JWT_SECRET, PORT

# 4. Run migrations
npx prisma migrate dev

# 5. Start server
npm run dev
```

### Scripts

```bash
npm run dev     # Development with hot reload
npm start       # Production
npm test        # Run Jest tests
npm run lint    # ESLint
```

---

## 👨‍💻 Author

**Ashraful Islam** — Backend Engineer  
5+ years building scalable APIs and distributed systems across Bangladesh, India, and Sri Lanka.  
Engineered RESTful APIs for 6+ production projects, reducing integration times by 35% and achieving 99.95% uptime SLAs.

- LinkedIn: [linkedin.com/in/ashrafakib](https://linkedin.com/in/ashrafakib)
- Email: ashrafakib02@gmail.com
- Open to remote backend / full-stack roles
