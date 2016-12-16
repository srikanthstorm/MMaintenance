angular.module('starter.controllers', [])

//controller for Login
.controller('LoginCtrl', function($scope, $location, $ionicPopup) {
  $scope.Login = function() {
    var uname = document.getElementById('name').value;
    var pword = document.getElementById('pswd').value;
    if (uname == "Admin" && pword == "Admin") {
      $location.path('/app/gohome');
    } else {
      $ionicPopup.confirm({
        title: "Miracle ME alerts you",
        content: "Invalid username and password."
      })
    }
  }
  
    $scope.signup = function() {
$location.path('/signup');
      }

})
//controller for signup
.controller('SignUpCtrl', function($scope, $location, $ionicPopup) {
    

})

//controller for  Form
.controller('gohomeCtrl', function($scope, $http) {


})

//controller for Sample AJAX
.controller('HomeCtrl', function($scope) {

})

//controller for Sample List
.controller('SampleListCtrl', function($scope) {

})

//controller for Logout
.controller('LogoutCtrl', function($scope, $location) {
  $scope.logout = function() {
    $location.path('/login');
  }
});
