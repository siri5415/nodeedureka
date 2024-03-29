// import the models
const Student = require('../Models/Students')

exports.getStudents = (req,res) =>{
    Student.find().then(result =>{
       res.status(200).json({
        students : result,
        message:'Successfully fetched the list of students'
       });
    }).catch(err =>{
     res.status(500).json({
        error: err,
        message: 'Error fetching the list of students'
     });
    });
}

exports.createStudents = (req,res) =>{
   const  {
      name,
      roll_no,
      class_no
   } = req.body;

   //create an object of the model class
   const studentObj = new Student({
      Name: name ,
      "Roll No": roll_no,
      class: class_no
   })

   //call the save method on the model object
   studentObj.save().then(result =>{
       res.status(200).json({
        students : result,
        message:'Successfully created the  student'
       });
    }).catch(err =>{
     res.status(500).json({
        error: err,
        message: 'Error creating the  student'
     });
    })
}

exports.updateStudents = (req,res) =>{
         const { 
            name, 
            roll_no, 
            class_no 
         } = req.body;
    const studentId = req.params.id;
    const studentObj = new Student({
         Name: name,
         "Roll No": roll_no,
         class: class_no,
       });
    Student.findByIdAndUpdate({ _id: studentId }, studentObj)
      .then((result) => {
        res.status(200).json({
          students: result,
          message: "Successfully updated the  student",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          message: "Error updating the  student",
        });
      });

}


exports.deleteStudents = (req, res) => {
   const studentId = req.params.id;

   Student.findByIdAndDelete({ _id: studentId })
     .then((result) => {
       res.status(200).json({
         students: result,
         message: "Successfully deleted the  student",
       });
     })
     .catch((err) => {
       res.status(500).json({
         error: err,
         message: "Error deleting the  student",
       });
     });

};