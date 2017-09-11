<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="VolunteerManagementApp.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Home</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

    <link rel="stylesheet" href="assets/css/vol-app.css" />

    <script src="assets/js/jquery-2.2.0.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="assets/js/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The description of my page" />
</head>
<body>
    <form id="form1" runat="server">
    <div ng-app="myApp">

        <div ng-view></div>

    </div>

    <script src="assets/js/ng-table-to-csv.js"></script>
    <script src="assets/classes/Volunteer.js"></script>
    <script src="assets/js/angular-modal-service.js"></script>
    <script src="app/myApp.js"></script>
    <script src="app/myCtrl.js"></script>
    <script src="assets/js/sha1hash.js"></script>
    <script src="app/components/volunteers/volunteerService.js"></script>
    <script src="app/components/volunteers/volCtrl.js"></script>
    </form>
</body>
</html>
