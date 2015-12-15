


var app=angular.module('studentGhar',[]);
app.controller('studentGharController',function($scope,$http,$location){

	$scope.serachCourses=function(){
		//sweetAlert("clicked");
		//alert($scope.search);
		$http({
			method:'POST',
			url:'/courses',
			data: { "search": $scope.search}
		}).success(function (data){
			if(data.status=='success'){
				window.location = '/afterCourses/'+data.search;
			}
			else{
				sweetAlert("Oops!",data.search,"error");
			}
			

		}).error(function (error){
			sweetAlert("Oops! some thing went wrong",error,"error");

		});
	};


});

app.controller('courseController',function($scope,$http,$location){
	var cc = this;
	$scope.learning=true;
	$scope.wishList=true;
	$scope.active="active";
	$scope.unactive="unactive";
	$scope.profile=true;
	$scope.photo=false;
	$scope.account=false;
	$scope.creditcard=false;
	$scope.danzerzone=false;
	$scope.privacy=true;
	$scope.notifications=false;

	$scope.learning1=function(){
		//alert("clicked");
		$scope.active="active";
		$scope.unactive="unactive";
		$scope.learning=true;
		$scope.wishList=true;
	};
	$scope.wishList1=function(){

		$scope.active="unactive";
		$scope.unactive="active";
		//alert("clicked");
		$scope.learning=false;
		$scope.wishList=false;	
	};
	cc.login=function(){
		//alert("clicked");
		//alert($scope.search);
		$http({
			method:'GET',
			url:'/login',
			data: { }
		}).success(function (data){
			if(data.status=='success'){

				window.location = '/login/'+data.username;
				//sweetAlert("Success");
						/*		sweetAlert({   
					title: "Error!",   
					text: "Here's my error message!",   
					type: "error",   
					confirmButtonText: "Cool" });*/

			}
			else{
				sweetAlert("Oops! some thing went wrong",error,"error");	
			}
			

		}).error(function (error){
			sweetAlert("Oops! some thing went wrong",error,"error");
				sweetAlert({   
					title: "Error!",   
					text: "Here's my error message!",   
					type: "error",   
					confirmButtonText: "Cool" });
		});	
		
	};
	cc.myCourses=function(){
		//alert("clicked");
		//alert($scope.search);
		$http({
			method:'GET',
			url:'/login',
			data: { }
		}).success(function (data){
			if(data.status=='success'){
				window.location = '/login/'+data.username+'/learning';
			}
			else{
				sweetAlert("Oops! some thing went wrong",error,"error");				
			}
			

		}).error(function (error){
			sweetAlert("Oops! some thing went wrong",error,"error");

		});

	};
	
	$scope.particularCourse=function(x){
		if(x===2||x===3){
			sweetAlert("Courses did not build yet");
		}
		else{
				$http({
					method:'POST',
					url:'/particularCourse',
					data: { 'course_id':x}
				}).success(function (data){
					if(data.status=='success'){
						window.location = '/afterparticularCourse/'+data.course_id;
					}
					else{
						sweetAlert("Oops! some thing went wrong",error,"error");				
					}
					

				}).error(function (error){
					sweetAlert("Oops! some thing went wrong",error,"error");

				});

		}
	};
	cc.userCurrentPlaying=function(x){
		//alert(x);
		$http({
					method:'POST',
					url:'/userCurrentPlaying',
					data: { 'course':x,'user':'santosh'}
				}).success(function (data){
					if(data.status=='success'){
						window.location = '/login/'+data.user+'/learning/'+data.course;
					}
					else{
						sweetAlert("Oops! some thing went wrong",error,"error");				
					}
					

				}).error(function (error){
					sweetAlert("Oops! some thing went wrong",error,"error");

				});


	};
	cc.userProfile=function(user){
		$http({
					method:'POST',
					url:'/userProfile',
					data: { 'user':user}
				}).success(function (data){
					if(data.status=='success'){
						window.location = '/login/'+data.user+'/profile/';
					}
					else{
						sweetAlert("Oops! some thing went wrong",error,"error");				
					}
					

				}).error(function (error){
					sweetAlert("Oops! some thing went wrong",error,"error");

				});
	};
	cc.editProfile=function(userName){
		$http({
					method:'POST',
					url:'/editProfile',
					data: { 'user':userName}
				}).success(function (data){
					if(data.status=='success'){
						window.location = '/login/'+data.user+'/settings/';
					}
					else{
						sweetAlert("Oops! some thing went wrong",error,"error");				
					}
					

				}).error(function (error){
					sweetAlert("Oops! some thing went wrong",error,"error");

				});

	};
	 cc.profile=function(){
	 	$scope.profile=true;
		$scope.photo=false;
		$scope.account=false;
		$scope.creditcard=false;
		$scope.danzerzone=false;

	 };
	 cc.photo=function(){
	 	$scope.profile=false;
		$scope.photo=true;
		$scope.account=false;
		$scope.creditcard=false;
		$scope.danzerzone=false;
	 };
	 cc.account=function(){
	 	$scope.profile=false;
		$scope.photo=false;
		$scope.account=true;
		$scope.creditcard=false;
		$scope.danzerzone=false;
	 };
	 cc.creditcard=function(){
	 	$scope.profile=false;
		$scope.photo=false;
		$scope.account=false;
		$scope.creditcard=true;
		$scope.danzerzone=false;
	 };
	 cc.danzerzone=function() {
	 	$scope.profile=false;
		$scope.photo=false;
		$scope.account=false;
		$scope.creditcard=false;
		$scope.danzerzone=true;
	 };
	 cc.privacy=function(){
	 	$scope.privacy=true;
	 	$scope.notifications=false;
	 };
	 cc.notifications=function(){
	 	$scope.privacy=false;
	 	$scope.notifications=true;
	
	 };
	 cc.settings=function(user){
	 	//alert("clicked");
	 	//alert(user);
		$http({
			method:'POST',
			url:'/settings',
			data: { 'user':user}
			}).success(function (data){
			if(data.status=='success'){
				//alert("success");
				window.location = '/login/'+data.user+'/settings/';
			}
			else{
				sweetAlert("Oops! some thing went wrong",error,"error");				
			}
			}).error(function (error){
					sweetAlert("Oops! some thing went wrong",error,"error");

		});

	 };
	 cc.logout=function(){
		$http({
			method:'POST',
			url:'/logout',
			data: { 'user_id':1}
			}).success(function (data){
			if(data.status=='success'){
				window.location = '/';
			}
			else{
				sweetAlert("Oops! some thing went wrong",error,"error");				
			}
			}).error(function (error){
					sweetAlert("Oops! some thing went wrong",error,"error");

				});

	 };
	
});
