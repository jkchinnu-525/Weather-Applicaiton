# Weather Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Dependencies](#Dependencies)
- [Configuration](#configuration)
- [Deployment](#deployment)

## Introduction
This is a web application designed to provide a seamless user experience for managing users, including authentication, event updates. The application is built with a modern stack of technologies including React, Node.js, Express, and Supabase.
In the project i have made use of openweathermap.api in order to fetch climate of different cities in the world.And have also created many backend routes using express.js.I have linked supabase as well as mongodb for user authentication.While authentication made use of jsonwebtoken,bcrypt like libraries.

## Features
- User authentication with JWT
- Profile management
- Storage using MongoDB
- Responsive design

## Technologies
- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: Supabase

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- MongoDB & SupaBase project set up with authentication and storage

### Clone the Repository
```
https://github.com/jkchinnu-525/Weather-Applicaiton.git
cd task 
```
## Dependencies
```
cd api --> npm install
cd client --> npm install
```
## Configuration

In [.env]() file
```
Mongo_Url = "your_mongo_url"
jwt_secret = 'your_jwt_secret'
```
## Deployment
This application is deployed on render while it can 
also be deployed using services like:
- Vercel
- Netlify

