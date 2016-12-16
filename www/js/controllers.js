angular.module('starter.controllers', [])

//controller for Login
.controller('LoginCtrl', ['$scope', '$location', '$http', '$ionicPopup', function($scope, $location, $http, $ionicPopup) {
    $scope.formData = {};

    $scope.Login = () => {
        details = {
            uname: $scope.formData.uname,
            pwd: $scope.formData.pwd
        };

        $http.post('http://localhost:4000/login/', details)
            .then(data => {
                if (data.data.loggedIn)
                    $location.path('/app/gohome');
                else {
                    $ionicPopup.alert({
                        title: "Miracle ME alerts you",
                        content: "Invalid username and password"
                    });
                }
            })
            .catch(err => console.error(err));
    };

    $scope.signup = function() {
        $location.path('/signup');
    };
}])
//controller for signup
.controller('SignUpCtrl', ['$scope', '$location', '$http', '$ionicPopup', function($scope, $location, $http, $ionicPopup) {
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

        $http.post('http://localhost:4000/signup/', details)
            .then(data => {
                if (data.data.success)
                    $location.path('/login');
                else {
                    $ionicPopup.alert({
                        title: "Miracle ME alerts you",
                        content: "Failed to create account: " + data.data.details
                    });
                }
            })
            .catch(err => console.error(err));
    };
}])

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
