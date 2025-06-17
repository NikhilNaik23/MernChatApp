# 💬 ChatApp – Real-Time Messaging Platform

ChatApp is a full-stack real-time chat application built with the MERN stack. It allows users to create accounts, send and receive messages instantly, see who's online, and enjoy a smooth chatting experience with typing indicators and private conversations.

---

## 🚀 Features

- 🔐 JWT-based User Authentication (Login/Register)
- 💬 Real-time private messaging using **Socket.IO**
- ✍️ Typing indicators
- 📡 Online/offline status tracking
- 📱 Fully responsive UI for both desktop and mobile
- 🧠 Scalable and modular backend architecture

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- Context API & Hooks
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JSON Web Tokens (JWT)
- bcrypt.js

---

## 📁 Folder Structure (Backend)
- controllers
- db
- middleware
- models
- routes
- socket
- utils
- server.js

  
---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/NikhilNaik23/MernChatApp.git
cd MernChatApp
```
### 2. Backend Setup

```bash
npm install
npm run dev
```
## Make sure to configure your .env file:
- PORT=5000
- MONGO_URI=your_mongo_connection_string
- JWT_SECRET=your_secret_key

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

