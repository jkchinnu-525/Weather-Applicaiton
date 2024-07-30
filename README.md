# Task[Weather]

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Dependencies](#Dependencies)
- [Configuration](#configuration)
- [Deployment](#deployment)

## Introduction
This is a web application designed to provide a seamless user experience for managing user profiles, including authentication, profile updates, and file uploads using Firebase. The application is built with a modern stack of technologies including React, Redux, Node.js, Express, and Firebase.

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
git clone https://github.com/jkchinnu-525/task.git
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
The application can be deployed using services like:
- Render
- Vercel
- Netlify

