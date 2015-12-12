var express = require('express');
var router = express.Router();

var ejs = require("ejs");
var mysql = require('./mysql');

/*var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'santoshtodoapp@gmail.com',
        pass: 'todoapp123'
    }
}, {
    // default values for sendMail method
    from: 'santoshtodoapp@gmail.com',
    headers: {
        'My-Awesome-Header': '123'
    }
});

var i=0;*/



function home(req,res){
	
	/*if(i===0){
		transporter.sendMail({
    		to: 'santoshsibyala@gmail.com',
    		subject: 'hello123',
    		text: 'hello world asasas!'
		});
	}
	i++;*/
	res.render('index', { title: 'Student Ghar'});


}

function courses(req,res){
	var search = req.param('search');
	console.log("Search is "+search);
	//console.log("Entered Courses");
	res.send({"status":"success",'search':search});

}
function afterCourses(req,res){
	var search=req.params.search;
	console.log(search);
	res.render('courses', { title: 'Courses',search:search});
}

function particularCourse(req,res){
	var course_id = req.param('course_id');
	console.log("Course id is "+course_id);
	res.send({"status":"success",course_id:course_id});
}

function afterparticularCourse(req,res){
	var course_id=req.params.course_id;
	console.log(course_id);
	res.render('particularCourse', { title: 'Courses'});

}

router.get('/',home);
router.get('/afterCourses/:search',afterCourses);
router.post('/courses',courses);
router.post('/particularCourse',particularCourse);
router.get('/afterparticularCourse/:course_id',afterparticularCourse);


module.exports = router;

