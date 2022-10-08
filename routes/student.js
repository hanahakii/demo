var express = require('express');
const StudentModel = require('../models/studentModel');
var router = express.Router();

router.get('/', (req, res) => {
    StudentModel.find((err,data) => {
        if (!err) {
            res.render('student/index', { students: data });
        }
    })
});

module.exports = router;