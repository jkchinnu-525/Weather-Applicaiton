import express from "express";
import {
  allEvents,
  deleteEvent,
  events,
  sessions,
  signin,
  signup,
  updateEvent,
  weather,
} from "../routehandlers/userHandler.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);
router.post("/events", events);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);
router.get("/events", allEvents);
router.get("/sessions", sessions);
router.get("/weather/:location", weather);

export default router;
