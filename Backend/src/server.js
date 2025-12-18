import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
//console.log("Redis URL:", process.env.UPSTASH_REDIS_REST_URL);

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://noteflow-mern.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json()); //this middleware will parse the JSON bodies : req.body
app.use(rateLimiter);
//this is our simple custom middleware

// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});
