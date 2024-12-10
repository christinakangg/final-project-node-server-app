import express from 'express'
import "dotenv/config";
import mongoose from 'mongoose';
import cors from "cors";
import session from "express-session";
import UserRoutes from './project/users/routes.js';


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://user:project2024@project.wlnci.mongodb.net/project?retryWrites=true&w=majority&appName=project"
mongoose.connect(CONNECTION_STRING);
console.log(CONNECTION_STRING)
const app = express()

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
})
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "project",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }

app.use(session(sessionOptions));  
app.use(express.json());
UserRoutes(app)
app.listen(process.env.PORT || 4000)
