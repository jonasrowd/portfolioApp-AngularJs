var app = angular.module("portfolioApp", []);

app.controller("appController", ($scope) => {

    $scope.fullName = "Jonas Machado";

    $scope.aboutMe = [
        "Totvs Protheus Advpl Developer",
        "Arquiteto de Soluções Customizadas At Capgemini",
        "Analista de Sistemas"
    ];

    $scope.thumbnails = [
        "aurora.jpg", "milkyway.jpg", "startrail.jpg"
    ];

    $scope.email = "nhjmachado@gmail.com";

});
