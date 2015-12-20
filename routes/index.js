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
function login(req,res){
	var username=req.param('username');
	var password=req.param('password');
	console.log("Username is "+username);
	console.log("password is "+password);
	if(username=='admin@studentghar.com'&& password=='admin1234'){
		console.log("Admin");
		res.send({"status":"success",'username':'admin'});
	}
	else{
		console.log("user");
		res.send({"status":"success",'username':'santosh'});	
	}
		
}
function loginUser(req,res){
	var username=req.params.username;
		
	res.render('user', { title: 'Courses'});	
}
function mycourses(req,res){
	var username=req.params.username;
	res.render('userLearning', { title: 'Courses'});	
}
function userCurrentPlaying(req,res){
	var course = req.param('course');
	var user = req.param('user');
	console.log("Course  is "+course);
	res.send({"status":"success",course:course,user:user});

}

function currentPlaying(req,res){
	var course=req.params.course;
	res.render('userCurrentPlayingCourse', { title: 'Courses'});

}
function userProfile(req,res){
	var user = req.param('user');
	console.log("User  is "+user);
	res.send({"status":"success",user:user});

}
function profile(req,res){
	var user=req.params.username;
	res.render('userProfile', { title: 'Courses'});

}
function editProfile(req,res){
	var user = req.param('user');
	console.log("User  is "+user);
	res.send({"status":"success",user:user});

}
function userEditProfile(req,res){
	var user=req.params.username;
	res.render('editProfile', { title: 'Courses'});	
}
function settings(req,res){
	var user = req.param('user');
	console.log(user);
	res.send({"status":"success","user":user});
}
function userSettings(req,res){
	var user=req.params.username;
	res.render('settings', { title: 'Courses'});	
}

function admin(req,res){
	res.render('admin', { title: 'Courses'});
}

function logout(req,res){
	var user = req.param('user_id');
	console.log("Destroy user session");
	res.send({"status":"success"});

}

router.get('/',home);
router.get('/afterCourses/:search',afterCourses);
router.post('/courses',courses);
router.post('/particularCourse',particularCourse);
router.get('/afterparticularCourse/:course_id',afterparticularCourse);
router.post('/login',login);
router.get('/login/:username',loginUser);
router.get('/login/:username/learning',mycourses);
router.post('/userCurrentPlaying',userCurrentPlaying);
router.get('/login/:username/learning/:course',currentPlaying);
router.post('/userProfile',userProfile);
router.get('/login/:username/profile',profile);
router.post('/editProfile',editProfile);
router.get('/login/:username/editprofile',userEditProfile);
router.get('/login/:username/settings',userSettings);
router.post('/settings',settings);
router.post('/logout',logout);
router.get('/admin',admin);
module.exports = router;

