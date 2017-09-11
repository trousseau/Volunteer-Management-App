app.factory('volunteerService', function ($http) {
    var volunteer = {};

    volunteer.list = [];
    volunteer.selected = {};

    $http.get("assets/data/volInit.json")
    .then(function (response) {
        var volObj = response.data.volunteerInitList;
        //$scope.volObj = JSON.parse(response.data);

        var length = volObj.length;

        for (var i = 0; i < length; i++) {
            var newVol = new Volunteer(volObj[i].FirstName, volObj[i].LastName, volObj[i].Phone, volObj[i].Email, volObj[i].City, volObj[i].Standout, volObj[i].PhoneBank, volObj[i].Canvas);
            volunteer.addVol(newVol);
        }
    }, function(response) {
        //Second function handles error
        console.log(response);
    });

    volunteer.addVol = function (vol) {
        volunteer.list.push(vol);
    };

    volunteer.saveVol = function (newSaveVol) {
        volunteer.addVol(newSaveVol);
        $(".modal").modal("hide");
    };

    volunteer.removeRow = function (vol) {
        var length = volunteer.list.length;

        if (length === 0 ) {
            volunteer.list = [];
        }
        else {
            for (var i = 0; i < length; i++) {
                if (volunteer.list[i].Id === vol.Id) {
                    volunteer.list.splice(i, 1);
                }
            }
        }
    };

    volunteer.editSaveVol = function (volId,volSelected) {
        var length = volunteer.list.length;
        for (var i = 0; i < length; i++) {
            if (volunteer.list[i].Id === volSelected.Id) {
                volunteer.list[i] = angular.copy(volSelected);
            }
        }
    };

    return volunteer;
});