# 📝 NoteFlow  
### Notes Management Application (Full Stack | MERN)

> NoteFlow is a full-stack notes management application built using the MERN stack. It allows users to create, view, update, and delete notes through a responsive user interface, backed by RESTful APIs with basic API rate limiting for request control.


---

## 🚀 Live Demo

- **Frontend:** https://noteflow-mern.vercel.app  
- **Backend API:** https://noteflow-mern.onrender.com/api/notes  

---

## ✨ Key Features

- RESTful API-based backend using Node.js and Express.js
- Create, read, update, and delete notes (CRUD operations)
- API rate limiting to prevent excessive requests
- Search notes by title
- Clear separation of frontend and backend responsibilities
- Responsive UI optimized for mobile and desktop
- Environment-based configuration for local and production setups

---

## 🧱 Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- DaisyUI
- Axios
- Lucide Icons

### Backend
- Node.js  
- Express.js  
- MongoDB (NoSQL)
- Upstash Redis (API Rate Limiting)
- RESTful APIs

### Tools
- Git & GitHub  

### Deployment
- Frontend: Vercel
- Backend: Render

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js  
- MongoDB  
- Git  


### Clone the Repository

git clone https://github.com/Kamalanjali/NoteFlow-MERN.git
cd NoteFlow-MERN

### Backend Setup

cd ../Backend
npm install


### Create a .env file inside the backend directory:

PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

### Run backend

npm start

### Frontend Setup

cd ../Frontend
npm install

### Create .env file in frontend directory

VITE_API_BASE_URL=http://localhost:5001/api

### Run frontend

npm run dev

---

## 🛡 Error Handling & API Stability

- APIs return appropriate HTTP status codes
- Centralized error handling to prevent application crashes
- Redis-based rate limiting to control excessive API requests
- Frontend handles API errors and displays meaningful feedback

---

## 🧠 Engineering Learnings

- Handling CORS issues between separately deployed frontend and backend services
- Managing environment variables securely across local and production environments
- Debugging Linux file-system case sensitivity issues during deployment
- Designing responsive navigation to prevent layout overflow on mobile devices

---

## 🔮 Future Enhancements

- User authentication and authorization
- Tag-based note organisation
- Rich text editor for notes
- Pagination and performance optimisation
- Dark mode support

---

## 📫 Contact

Feel free to connect via GitHub or LinkedIn for feedback or collaboration.
