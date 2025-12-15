# 📝 NoteFlow  
### Notes Management Application (Full Stack | MERN)

> NoteFlow is a full-stack notes management application built using the MERN stack. It allows users to create, view, update, and delete notes through a responsive user interface, backed by RESTful APIs and protected with API rate limiting.

---

## ✨ Key Features

- Create, read, update, and delete notes (CRUD operations)
- RESTful API-based backend using Node.js and Express.js
- Responsive user interface built with React
- Centralized backend error handling
- API rate limiting to prevent excessive requests and abuse
- Clear separation of frontend and backend responsibilities

---

## 🧱 Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- DaisyUI  

### Backend
- Node.js  
- Express.js  
- Upstash Redis (API Rate Limiting)  

### Database
- MongoDB (NoSQL)

### Tools
- Git & GitHub  
- RESTful APIs  

---

## 🧠 Application Architecture

- **Frontend:** Built with React to handle UI rendering and user interactions  
- **Backend:** RESTful APIs implemented using Node.js and Express.js  
- **Database:** MongoDB stores notes as documents in collections  
- **Rate Limiting:** Upstash Redis tracks and limits API requests  
- **Communication:** Frontend interacts with backend via HTTP requests and JSON responses  

---

## 🔐 API Rate Limiting

To simulate real-world backend protection, NoteFlow implements **rate limiting using Upstash Redis**.

- Rate limits are applied at the API level  
- Redis stores request counters with expiration windows  
- Requests exceeding the allowed limit receive appropriate HTTP error responses  
- Helps improve backend reliability and prevents API abuse  

This approach provides lightweight, serverless rate limiting without additional infrastructure overhead.

---

## 🔁 API Endpoints (Overview)

| Method | Endpoint            | Description              |
|------|---------------------|--------------------------|
| GET  | `/api/notes`        | Fetch all notes          |
| POST | `/api/notes`        | Create a new note        |
| PUT  | `/api/notes/:id`    | Update an existing note  |
| DELETE | `/api/notes/:id`  | Delete a note            |

> _Endpoints may vary based on implementation._

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js  
- MongoDB  
- Git  


### Clone the Repository

git clone https://github.com/your-username/noteflow.git
cd noteflow

### Backend Setup

cd backend
npm install
npm start


### Create a .env file inside the backend directory:

MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token


### Frontend Setup

cd frontend
npm install
npm start

---

## 🛡 Error Handling & API Protection

- APIs return appropriate HTTP status codes
- Centralized error handling to prevent application crashes
- Redis-based rate limiting to control excessive API requests
- Frontend handles API errors and displays meaningful feedback

---

## 🔮 Future Enhancements

- User authentication and authorization
- Search and filtering for notes
- Pagination for large datasets
- Configurable rate limits
- Cloud deployment

---
## 📚 Learning Outcomes

- This project helped me gain hands-on experience with:
- Building full-stack applications using the MERN stack
- Designing and consuming RESTful APIs
- Implementing Redis-based API rate limiting
- Frontend–backend integration
- Debugging and error handling
- Working with NoSQL databases

---

## 🚧 Project Status

In Progress – Core features implemented; enhancements and deployment planned.

---

## 🔗 Links

-GitHub Repository: https://github.com/Kamalanjali/NoteFlow-MERN/tree/main

-Live Demo: deployment in progress

## 📫 Contact

Feel free to connect via GitHub or LinkedIn for feedback or collaboration.
