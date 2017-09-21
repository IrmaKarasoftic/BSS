(function () {
    var MmsWebSite = angular.module('MmsWebSite');

    MmsWebSite.controller('dataController', ['$scope', 'dataService', function ($scope, dataService) {

        $scope.loadData = function () {
            $scope.waitData = true;
            dataService.list("data", function (data) {
                if (data) {
                    $scope.data = data;
                    $scope.waitData = false;
                    $scope.configurePostBreakfast(data);
                    $scope.configurePreBreakfast(data);
                    $scope.configurePreLunch(data);
                    $scope.configurePostLunch(data);
                    $scope.configurePreSupper(data);
                    $scope.configurePostSupper(data);
                    $scope.configureRegularInsulineDose(data);

                }
                else {
                    notificationsConfig.error("Error!");
                }
            })
        };

        $scope.configurePreBreakfast = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.preBreakfastBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var date = dateTime.getDate() + '/' + dateTime.getMonth();
                    graphLabels.push(date);
                    var color;
                    if (label.value >= 80 && label.value < 100) color = 'rgba(0, 183, 61, 0.2)';
                    else if ((label.value >= 100 && label.value < 125) || label.value < 170) color = 'rgba(203, 234, 0, 0.2)'
                    else color = 'rgba(255, 59, 0, 0.2)';
                    backgroundColors.push(color);
                });
            var ctx = document.getElementById("myChart0").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Pre Breakfast Blood Glucose Dose',
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
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
        $scope.configurePostBreakfast = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.postBreakfastBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var date = dateTime.getDate() + '/' + dateTime.getMonth();
                    graphLabels.push(date);
                    var color;
                    if (label.value >= 170 && label.value < 195) color = 'rgba(0, 183, 61, 0.2)';
                    else if ((label.value >= 195 && label.value < 225) || label.value < 170) color = 'rgba(203, 234, 0, 0.2)'
                    else color = 'rgba(255, 59, 0, 0.2)';
                    backgroundColors.push(color);
                });
            var ctx = document.getElementById("myChart1").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Post Breakfast Blood Glucose Dose',
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
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

        $scope.configurePreLunch = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.preLunchBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var date = dateTime.getDate() + '/' + dateTime.getMonth();
                    graphLabels.push(date);
                    var color;
                    if (label.value >= 80 && label.value < 100) color = 'rgba(0, 183, 61, 0.2)';
                    else if ((label.value >= 100 && label.value < 125) || label.value < 170) color = 'rgba(203, 234, 0, 0.2)'
                    else color = 'rgba(255, 59, 0, 0.2)';
                    backgroundColors.push(color);
                });
            var ctx = document.getElementById("myChart2").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Pre Lunch Blood Glucose Dose',
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
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
        $scope.configurePostLunch = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.postLunchBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var date = dateTime.getDate() + '/' + dateTime.getMonth();
                    graphLabels.push(date);
                    var color;
                    if (label.value >= 170 && label.value < 195) color = 'rgba(0, 183, 61, 0.2)';
                    else if ((label.value >= 195 && label.value < 225) || label.value < 170) color = 'rgba(203, 234, 0, 0.2)'
                    else color = 'rgba(255, 59, 0, 0.2)';
                    backgroundColors.push(color);
                });
            var ctx = document.getElementById("myChart3").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Post Lunch Blood Glucose Dose',
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
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

        $scope.configurePreSupper = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.preSupperBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var date = dateTime.getDate() + '/' + dateTime.getMonth();
                    graphLabels.push(date);
                    var color;
                    if (label.value >= 80 && label.value < 100) color = 'rgba(0, 183, 61, 0.2)';
                    else if ((label.value >= 100 && label.value < 125) || label.value < 170) color = 'rgba(203, 234, 0, 0.2)'
                    else color = 'rgba(255, 59, 0, 0.2)';
                    backgroundColors.push(color);
                });
            var ctx = document.getElementById("myChart4").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Pre Supper Blood Glucose Dose',
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
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
        $scope.configurePostSupper = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.postSupperBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var date = dateTime.getDate() + '/' + dateTime.getMonth();
                    graphLabels.push(date);
                    var color;
                    if (label.value >= 170 && label.value < 195) color = 'rgba(0, 183, 61, 0.2)';
                    else if ((label.value >= 195 && label.value < 225) || label.value < 170) color = 'rgba(203, 234, 0, 0.2)'
                    else color = 'rgba(255, 59, 0, 0.2)';
                    backgroundColors.push(color);
                });
            var ctx = document.getElementById("myChart5").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Post Supper Blood Glucose Dose',
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
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

        $scope.configureRegularInsulineDose = function (data) {
            var graphLabels = [];
            var values = [];
            var backgroundColors = [];
            var aa = data[1];
            angular.forEach(data.regularInsulinDose,
                (label) => {
                    if (label.length > 150) {
                        graphLabels.push(label[0].value);
                        values.push(label.length);
                        backgroundColors.push(getRandomColor());
                    }
                });
            var ctx = document.getElementById("myChart6").getContext('2d');

            var myChart = new Chart(ctx,
                {
                    type: 'doughnut',
                    data: {
                        labels: graphLabels,
                        datasets: [
                            {
                                label: 'Regular Insulin Dose',
                                data: values,
                                backgroundColor: backgroundColors
                            }
                        ]
                    },
                });
        }
        $scope.loadData();

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }]);
}());
