import express from "express"
import mongoose from "mongoose"
import { employee } from "./modules/module.js"
const app = express()
const port = 3000

// Connecting my frontend
app.use(express.static("public"))

let conn = await mongoose.connect("mongodb://localhost:27017/Company")

app.post("/", async (req, res) => {
    await employee.deleteMany({})
    function random_name() {
        let nm = ["Tanmay", "Harry", "Rohan"]
        let name;
        if (Math.random() < 0.33) {
            name = nm[0]
        }
        else if (Math.random() > 0.33 && Math.random() < 0.66) {
            name = nm[1]
        }
        else {
            name = nm[2]
        }
        return name
    }

    function random_salary() {
        let salary = Math.floor(Math.random() * 1000000)
        return salary
    }

    function random_language() {
        let language;
        let lang = ["Python", "JavaScript", "CSS"]
        if (Math.random() < 0.33) {
            language = lang[0]
        }
        else if (Math.random() > 0.33 && Math.random() < 0.66) {
            language = lang[1]
        }
        else {
            language = lang[2]
        }
        return language
    }

    function random_city() {
        let city;
        let cit = ["Delhi", "Bangalore", "Pune"]
        if (Math.random() < 0.33) {
            city = cit[0]
        }
        else if (Math.random() > 0.33 && Math.random() < 0.66) {
            city = cit[1]
        }
        else {
            city = cit[2]
        }
        return city
    }

    function random_manager() {
        let manager;
        let man = [true, false]
        if (Math.random() < 0.5) {
            manager = man[0]
        }
        else {
            manager = man[1]
        }
        return manager
    }
    let emp = []
    for (let i = 0; i < 10; i++) {
        emp.push({ "Name": random_name(), "Salary": random_salary(), "Language": random_language(), "City": random_city(), "isManager": random_manager() })
    }
    await employee.insertMany(emp)

    res.send("10 new employees generated, old data deleted!")
})

app.listen(port, () => {
    console.log(`The app is running at port ${port}`)
})