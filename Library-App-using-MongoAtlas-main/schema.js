//import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    Name: String,
    Book: String,
    Due: String
});

module.exports = mongoose.model("firstmongoose", studentSchema, "Library_Data")