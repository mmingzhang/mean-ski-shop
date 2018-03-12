// Controllers

function ContactCtrl($scope, Page, contactServices, $http) {
    $scope.contactUser = {'name': '', 'email': '', 'telphone': '', 'message': ''};

    $scope.btnSendMsg = function () {

        if ($scope.contactForm.$valid === true) {
            $scope.contactUser.email = $scope.contactUser_email;
            console.log($scope.contactUser);
            // Send contactData to node server
            contactServices.create($scope.contactUser);

        }
    }
}