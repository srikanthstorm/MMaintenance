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
.controller('SignUpCtrl', function($scope, $http, $ionicPopup) {
    $scope.formData = {};

    $scope.gohome = () => {
        var details = {
            uname: $scope.formData.uname,
            fname: $scope.formData.fname,
            lname: $scope.formData.lname,
            mail: $scope.formData.mail,
            mno: $scope.formData.mno,
            pwd: $scope.formData.pwd
        };

        $http.post('http://localhost:4000/signup/', details);
        $http.path('/login');
    };
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
