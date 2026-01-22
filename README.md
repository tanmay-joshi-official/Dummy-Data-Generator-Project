# Dummy Employee Data Generator

A simple full-stack mini project that generates dummy employee data and stores it in MongoDB.  
With a single button click, old data is deleted and new random employee records are inserted.

---

## 🚀 Features
- Generate random employee data
- Delete previous records before inserting new data
- MongoDB integration using Mongoose
- Simple frontend trigger using Fetch API
- Clean and minimal UI

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript

---

## ⚙️ How It Works
1. User clicks **Generate Data** button
2. Frontend sends a POST request to backend
3. Backend:
   - Deletes old employee records
   - Generates 10 new random employees
   - Inserts them into MongoDB
4. Success message is returned

---

## 🧠 What I Learned
- Connecting frontend with backend using Fetch API
- Creating POST routes in Express
- Performing bulk database operations (`deleteMany`, `insertMany`)
- Designing schemas using Mongoose
- Serving static files using Express
- Understanding full request–response flow

---

## Conclusion
⭐ If you found this project helpful, please consider giving it a star!
