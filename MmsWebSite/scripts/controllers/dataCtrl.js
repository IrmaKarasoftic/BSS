(function () {
    var MmsWebSite = angular.module('MmsWebSite');

    MmsWebSite.controller('dataController', ['$scope', 'dataService', function ($scope, dataService) {

        $scope.loadData = function () {
            $scope.waitData = true;
            dataService.list("data", function (data) {
                if (data) {
                    $scope.data = data;
                    $scope.waitData = false;
                    $scope.configure(data);
                }
                else {
                    notificationsConfig.error("Error!");
                }
            })
        };
        $scope.configure = function (data) {
            var graphLabels = [];
            var aa = data[1];
            angular.forEach(data.postBreakfastBloodGlucoseDose,
                (label) => {
                    graphLabels.push(label.value);
                });
            var ctx = document.getElementById("myChart0").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Post Breakfast Blood Glucose Dose',
                                data: graphLabels,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }
                });
        }

        $scope.loadData();
    }]);
}());
