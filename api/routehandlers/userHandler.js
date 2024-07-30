import express from "express";
import jwt from "jsonwebtoken";
import axios from "axios";
import bcrypt from "bcryptjs";
import Event from "../models/eventschema.js";
import User from "../models/userschema.js";
import Session from "../models/sessionschema.js";
import { errorHandler } from "../utils/errorHandler.js";

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log("Here is the password");
  console.log(password);
  const hashedpassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedpassword, email });
  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully " });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  const ipAddress = req.ip;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, "Invalid password"));
    }
    const session = new Session({
      userId: user._id,
      ipAddress,
    });
    await session.save();
    const token = jwt.sign({ id: user._id }, process.env.jwt_secret);
    const { password: hashedPassword, ...rest } = user._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({
        message: "Login Successfull",
        sessionId: session._id,
        userId: user._id,
      });
  } catch (error) {
    next(error);
  }
};
export const events = async (req, res) => {
  try {
    const { name, description, location, date, time } = req.body;
    const newEvent = new Event({ name, description, location, date, time });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const updatedEvent = req.body;
  try {
    const event = await Event.findByIdAndUpdate(eventId, updatedEvent, {
      new: true,
      runValidators: true,
    });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findByIdAndDelete(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const allEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("userId");
    res.status(200).json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving events", error: error.message });
  }
};

export const sessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate("userId");
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const weather = async (req, res) => {
  const API_KEY = "f4bf660cea3c7bff59a301e2cfb50b85";
  const location = req.params.location;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: location,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    const data = response.data;
    const weather = {
      location: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };

    res.status(200).json(weather);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching weather data", error: error.message });
  }
};
