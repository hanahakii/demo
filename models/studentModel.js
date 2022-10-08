const mongoose = require('mongoose');

const schema = mongoose.Schema;
const model = mongoose.Models;

var StudentSchema = new schema({
    name: String,
dob: Date,
gender: String,
email: String,
grade: Number,
year: Number,
image: String,
},
    {
    VersionKey: false
    })
var StudentModel = mongoose.model('Sinh vien', StudentSchema, 'student')
module.exports = StudentModel;