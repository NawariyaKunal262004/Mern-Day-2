# MERN Backend – Day 2

**Express.js Backend Architecture with Authentication**

This repository is part of a structured MERN stack learning journey, focused on building a clean, scalable backend using Node.js and Express.js.
Day 2 primarily focuses on project architecture, routing patterns, middleware flow, and API structuring used in real-world backend systems.

---

## 📌 Objective of Day 2

The goal of Day 2 was to:

- Design a production-style Express backend
- Separate concerns using controllers, routes, middlewares, and utilities
- Implement basic authentication flow
- Protect routes using middleware
- Maintain a consistent API response structure

---

## 🧱 Project Structure

```
day2-backend/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── health.controller.js
│   │   └── profile.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── health.routes.js
│   │   └── profile.routes.js
│   │
│   ├── utils/
│   │   └── api.response.js
│   │
│   ├── app.js
│   │── server.js
│
├── .env
├── package.json
└── README.md
```

**Why this structure?**

- Follows industry-standard Express architecture
- Easy to scale when database and advanced auth are added
- Keeps logic readable and maintainable
- Prevents tightly coupled code

---

## ⚙️ Tech Stack Used

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- dotenv
- Postman (for API testing)

---

## 🔁 API Response Format

All APIs follow a uniform response structure:

```
{
  "success": true,
  "data": {},
  "message": "Readable message"
}
```

This ensures:

- Clean frontend integration
- Predictable API behavior
- Easier debugging and error handling

---

## 🚀 Available APIs

**Health Check**

- GET `/api/health` — Used to verify server availability.

**Authentication**

- POST `/api/login` — Basic login flow implemented (JWT structure added, refinement planned).

**Profile**

- GET `/api/profile` — Protected route (requires authentication middleware).
- POST `/api/profile` — Accepts and returns profile data.

---

## 🛡 Middleware Implementation

**Auth Middleware**

- Extracts token from request headers
- Validates JWT (basic implementation)
- Protects sensitive routes like `/profile`

**Global Error Middleware**

- Catches unhandled errors
- Prevents server crashes
- Sends standardized error responses

---

## 📍 Current Status

- Backend structure is locked
- APIs are stable
- Authentication flow is partially implemented
- JWT logic will be refined in the next phase
- No database connected yet (intentional)

---

## 🔜 What’s Next (Day 3)

- MongoDB integration
- User schema and models
- Password hashing
- Proper JWT lifecycle (access & refresh)
- Real authentication flow

---

## 🧠 Learning Focus

This project emphasizes:

- Understanding how backend systems are structured
- Writing maintainable code
- Thinking beyond “just making it work”
- Building a base suitable for real applications

---

✅ **Notes**

This repository is part of a daily learning series.
Each day builds on the previous one without breaking structure.
