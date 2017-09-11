app.controller('volCtrl', ['$scope','$http','ModalService', 'volunteerService', function ($scope, $http, ModalService, volunteerService) {

    //filter variables
    $scope.sortType = 'FirstName'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchVols = '';     // set the default search/filter term

    //$scope.firstName = null;
    //$scope.lastName = null;
    //$scope.phone = null;
    //$scope.email = null;
    //$scope.phoneBank = false;
    //$scope.canvas = false;
    //$scope.standOut = false;

    $scope.volunteerList = [];
    $scope.volunteerList.list = [];
    $scope.volunteerList.selected = {};

    $scope.volunteerList = volunteerService.list;
    $scope.volunteerList.selected = volunteerService.selected;

    $scope.getTemplate = function (volunteer) {
        if(typeof $scope.volunteerList.selected === 'undefined'){
            return 'display';
        }
        else if (volunteer.Id === $scope.volunteerList.selected.Id) {
            return 'edit';
        }
        else {
            return 'display';
        }
    };

    $scope.removeRow = function (volunteer) {
        volunteerService.removeRow(volunteer);
    };

    $scope.editVol = function (volunteer) {
        $scope.volunteerList.selected = angular.copy(volunteer);
    };

    $scope.editSaveVol = function (volId) {
        volunteerService.editSaveVol(volId, $scope.volunteerList.selected);
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.volunteerList.selected = {};
    };

    //filter
    $scope.testFilter = function (host) {
        return $scope.filterItems[host.environment.title];
    };

    $scope.show = function () {
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: 'ModalController',
            preClose: (modal) => { modal.element.modal('hide'); },
            scope: $scope
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                console.log(result);
            });
        });
    };
}]);

app.controller('ModalController', ['$scope', 'volunteerService', function ($scope, volunteerService, close) {
    $scope.close = function (result) {
        close(result, 1000); // close, but give 500ms for bootstrap to animate
    };

    $scope.saveVol = function () {
        $scope.newSaveVol = new Volunteer($scope.firstName, $scope.lastName, $scope.phone, $scope.email, $scope.city, $scope.standOut, $scope.phoneBank, $scope.canvas);
        volunteerService.addVol($scope.newSaveVol);
        $(".modal").modal("hide");
    };
}]);