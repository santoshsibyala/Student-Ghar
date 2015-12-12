var app=angular.module('studentGhar',[]);
app.controller('studentGharController',function($scope,$http,$location){

	$scope.serachCourses=function(){
		alert("clicked");
		alert($scope.search);
		$http({
			method:'POST',
			url:'/courses',
			data: { "search": $scope.search}
		}).success(function (data){
				//alert("data is "+data);
				//alert("After sucess is"+data.search);
				//alert("Courses loaded successfully");
				//alert("/afterCourses/"+data.search);
				window.location = '/afterCourses/'+data.search;
			

		}).error(function (error){
			alert("This error "+error+" occured while loading courses");

		});
	};


});

app.controller('courseController',function($scope,$http,$location){
	var cc = this;
	cc.login=function(){
		alert("clicked");
		//alert($scope.search);
		$http({
			method:'GET',
			url:'/login',
			data: { }
		}).success(function (data){
				//alert("data is "+data);
				//alert("After sucess is"+data.search);
				//alert("Courses loaded successfully");
				//alert("/afterCourses/"+data.search);
				window.location = '/login/'+data.username;
			

		}).error(function (error){
			alert("This error "+error+" occured while loading courses");

		});	
		
	}
	$scope.particularCourse=function(x){
		if(x===2||x===3){
			alert("Courses did not build yet");
		}
		else{
				$http({
					method:'POST',
					url:'/particularCourse',
					data: { 'course_id':x}
				}).success(function (data){
						alert(data.course_id);
						//alert("After sucess is"+data.search);
						//alert("Courses loaded successfully");
						//alert("/afterCourses/"+data.search);
						window.location = '/afterparticularCourse/'+data.course_id;
					

				}).error(function (error){
					alert("This error "+error+" occured while loading courses");

				});

		}
	};
	/*$scope.login=function(){
		alert("clicked");
		//alert($scope.search);
		$http({
			method:'GET',
			url:'/login',
			data: { }
		}).success(function (data){
				//alert("data is "+data);
				//alert("After sucess is"+data.search);
				//alert("Courses loaded successfully");
				//alert("/afterCourses/"+data.search);
				window.location = '/login/'+data.username;
			

		}).error(function (error){
			alert("This error "+error+" occured while loading courses");

		});	
	};*/
});
