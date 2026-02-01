# Restaurant Admin Dashboard – Intern Technical Assessment

## Project Overview
This project is a basic full-stack Restaurant Admin Dashboard built as part of an intern technical assessment.

It allows restaurant owners to manage menu items by creating them, viewing them, and toggling their availability. The focus of this project is on implementing core backend logic, database integration, and frontend–backend communication.

---

## Tech Stack
- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB Atlas
- API Testing: Postman

---

## Features Implemented
- Create menu items
- Fetch all menu items
- Toggle menu item availability
- RESTful APIs using Express
- MongoDB integration using Mongoose
- React frontend consuming backend APIs
- Backend structured using config, models, controllers, and routes

---


## Project Structure

```text
root/
├── server/                # Backend code
│   ├── config/            # DB connection setup
│   ├── controllers/       # Business logic (what the buttons do)
│   ├── models/            # Database schemas (how data looks)
│   ├── routes/            # API endpoints
│   └── server.js          # Entry point for the server
└── client/                # Frontend code
    └── src/
        └── App.js         # Main React application

### Menu APIs

**GET /menu**  
Fetches all menu items from the database.

**POST /menu**  
Creates a new menu item.



Request Body:
```json
{
  "name": "Veg Burger",
  "category": "Fast Food",
  "price": 120
}

 ## Backend
 cd server
npm install
node server.js

Backend run on http://localhost:4000

##Frontend
cd client
npm install
npm start
Fronted run on http://localhost:3004

## What I Learned

Building REST APIs using Express

Connecting MongoDB Atlas using Mongoose

Structuring backend code using controllers and routes

Testing APIs using Postman

Connecting a React frontend to a backend using Axios

Debugging issues such as IP whitelisting and proxy configuration

Limitations & Future Improvements

Search and filtering

Order management

Input validation

Improved UI using Tailwind CSS

Pagination and analytics