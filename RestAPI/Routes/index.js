const express = require('express');

const router = express.Router();

const studentsController = require('../Controllers/Students');
//application routes router.METHOD(PATH,HANDLER)
router.get('/getStudents', studentsController.getStudents);
router.post('/createStudents', studentsController.createStudents);
router.put('/updateStudents/:id', studentsController.updateStudents);
router.delete('/deleteStudents/:id', studentsController.deleteStudents);


module.exports = router;
