// studentModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define student schema
const studentSchema = new Schema({
   
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    dob: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    enrolledCourses:{
       type:String
    },
    qualification: {
       type:String
    },
    created_at: {
        type: String,
        default:Date.now()
    },
    updated_at: {
        type: String,
        default:null
    },
    deleted_at: {
        type: String,
        default: null,
    },
});



// Define student model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;