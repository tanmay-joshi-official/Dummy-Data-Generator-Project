import mongoose from "mongoose"

let data = new mongoose.Schema({"Name": String, "Salary": Number, "Language": String, "City": String, "isManager": Boolean})

export const employee = mongoose.model('employee', data)