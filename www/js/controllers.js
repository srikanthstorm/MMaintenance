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
                {
                    window.uname = details.uname;
                    $location.path('/app/gohome');
                }
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
            pwd: $scope.formData.pwd,
            desg: $scope.formData.desg
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
.controller('gohomeCtrl', ['$scope', '$location', '$http', '$ionicPopup', function($scope, $location, $http, $ionicPopup) {
    $scope.formData = {};
    $scope.formData.assignee = 'Admin';

    $scope.createIssue = () => {
        var fileUpload = document.getElementById('fileUpload');

        function doUpload() {
            $http.post('http://localhost:4000/createPost/', $scope.formData)
                .then(data => {
                    if (data.data.success)
                        $location.path('/app/gohome');
                    else {
                        $ionicPopup.alert({
                            title: "Miracle ME alerts you",
                            content: "Failed to create post: " + data.data.details
                        });
                    }
                })
                .catch(err => console.error(err));
        }

        if (fileUpload.files && fileUpload.files[0]) {
            var fr = new FileReader();
            fr.onload = e => {
                $scope.formData.image = e.target.result;
                document.getElementById('imageView').src = e.target.result;
                doUpload();
            };

            fr.readAsDataURL(fileUpload.files[0]);
        }
        else doUpload();
    };
}])

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
