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
                    var mjesec = dateTime.getMonth() + 1;
                    var date = dateTime.getDate() + '/' + mjesec;
                    graphLabels.push(date);
                    var color;
                    if (label.value > 50 && label.value < 80) color = 'rgba(66, 134, 244, 0.2)'; //ispod normale plava
                    else if (label.value >= 80 && label.value < 150) color = 'rgba(203, 234, 0, 0.2)'; //normalna zuta
                    else color = 'rgba(255, 59, 0, 0.2)'; // iznad normale crvena
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
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "mg/dL",
                                        fontColor: "black"
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        max: 350
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Datum mjerenja",
                                        fontColor: "black"
                                    },
                                }
                            ]
                        },
                    },
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
                    var mjesec = dateTime.getMonth() + 1;
                    var date = dateTime.getDate() + '/' + mjesec;
                    graphLabels.push(date);
                    var color;
                    if (label.value > 170 && label.value < 195) color = 'rgba(66, 134, 244, 0.2)'; //ispod normale plava
                    else if (label.value >= 195 && label.value < 225) color = 'rgba(203, 234, 0, 0.2)'; //normalna zuta
                    else color = 'rgba(255, 59, 0, 0.2)'; // iznad normale crvena
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
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 350
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "mg/dL",
                                        fontColor: "black"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Datum mjerenja",
                                        fontColor: "black"
                                    },
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
            angular.forEach(data.preLunchBloodGlucoseDose,
                (label) => {
                    values.push(label.value);
                    var dateTime = new Date(label.dateMeasured);
                    var mjesec = dateTime.getMonth() + 1;
                    var date = dateTime.getDate() + '/' + mjesec;
                    graphLabels.push(date);
                    var color;
                    if (label.value > 50 && label.value < 80) color = 'rgba(66, 134, 244, 0.2)'; //ispod normale plava
                    else if (label.value >= 80 && label.value < 150) color = 'rgba(203, 234, 0, 0.2)'; //normalna zuta
                    else color = 'rgba(255, 59, 0, 0.2)'; // iznad normale crvena
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
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 500
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "mg/dL",
                                        fontColor: "black"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Datum mjerenja",
                                        fontColor: "black"
                                    },
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
                    var mjesec = dateTime.getMonth() + 1;
                    var date = dateTime.getDate() + '/' + mjesec;
                    graphLabels.push(date);
                    var color;
                    if (label.value > 170 && label.value < 195) color = 'rgba(66, 134, 244, 0.2)'; //ispod normale plava
                    else if (label.value >= 195 && label.value < 225) color = 'rgba(203, 234, 0, 0.2)'; //normalna zuta
                    else color = 'rgba(255, 59, 0, 0.2)'; // iznad normale crvena
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
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 500
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "mg/dL",
                                        fontColor: "black"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Datum mjerenja",
                                        fontColor: "black"
                                    },
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
                    var mjesec = dateTime.getMonth() + 1;
                    var date = dateTime.getDate() + '/' + mjesec;
                    graphLabels.push(date);
                    var color;
                    if (label.value > 50 && label.value < 80) color = 'rgba(66, 134, 244, 0.2)'; //ispod normale plava
                    else if (label.value >= 80 && label.value < 150) color = 'rgba(203, 234, 0, 0.2)'; //normalna zuta
                    else color = 'rgba(255, 59, 0, 0.2)'; // iznad normale crvena
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
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 500
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "mg/dL",
                                        fontColor: "black"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Datum mjerenja",
                                        fontColor: "black"
                                    },
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
                    var mjesec = dateTime.getMonth() + 1;
                    var date = dateTime.getDate() + '/' + mjesec;
                    graphLabels.push(date);
                    var color;
                    if (label.value > 170 && label.value < 195) color = 'rgba(66, 134, 244, 0.2)'; //ispod normale plava
                    else if (label.value >= 195 && label.value < 225) color = 'rgba(203, 234, 0, 0.2)'; //normalna zuta
                    else color = 'rgba(255, 59, 0, 0.2)'; // iznad normale crvena
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
                                data: values,
                                backgroundColor: backgroundColors,
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 500
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "mg/dL",
                                        fontColor: "black"
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Datum mjerenja",
                                        fontColor: "black"
                                    },
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
            $scope.brojIspitanika = 0;
            angular.forEach(data.regularInsulinDose,
                (label) => {
                    $scope.brojIspitanika = $scope.brojIspitanika + label.length;
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
                                data: values,
                                backgroundColor: backgroundColors
                            }
                        ],
                    },
                    options: {
                        animation: {
                            animateRotate: false,
                            animateScale: true
                        }
                    }
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
