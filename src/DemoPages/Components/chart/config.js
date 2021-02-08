export const basicOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    responsive: true,
};

export let purpleChartOptions = {
    ...basicOptions,
    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
    },
    scales: {
        yAxes: [{
            barPercentage: 6,
            gridLines: {
                drawBorder: false,
                color: '#EDEFF5',
                zeroLineColor: "#EDEFF5",
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 1800,
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }],
        plotOptions: {
            column: {
                borderRadiusTopLeft: 5,
                borderRadiusTopRight: 5,
            },
        },

        xAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: "#EDEFF5",
            },
            ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }]
    }
}

export let multiChartOptions = {
    ...basicOptions,
    legend: {
        display: true
    },
    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    scales: {
        yAxes: [{
            barPercentage: 1.2,
            gridLines: {
                drawBorder: false,
                color: '#EDEFF5',
                zeroLineColor: "#EDEFF5",
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 45,
                padding: 10,
                fontColor: "#9a9a9a"
            }
        }],
        plotOptions: {
            column: {
                borderRadiusTopLeft: 5,
                borderRadiusTopRight: 5,
            },
        },

        xAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: "#EDEFF5",
            },
            ticks: {
                padding: 0,
                fontColor: "#9a9a9a"
            }
        }]
    }
}


export let barChartOptions = {
    ...basicOptions,
    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    scales: {
        yAxes: [{

            gridLines: {
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: "transparent",
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                padding: -50,
                fontColor: "transparent"
            }
        }],
        xAxes: [{

            gridLines: {
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: "transparent",
            },
            ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
            }
        }]
    }

}