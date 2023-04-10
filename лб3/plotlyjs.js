var trace1 = {
    x: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [5.0, 5.0, 4.8, 4.8, 4.9, 4.8, 4.9, 4.8, 4.7],
    marker: {
        color: '#387EB8',
        line: {
            width: 2.5
        }
    },
    name: "Беларусь",
};

var trace2 = {
    x: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [2.7, 2.5, 2.6, 3.0, 2.9, 2.5, 2.5, 2.7, 2.8],
    marker: {
        color: '#FFE052',
        line: {
            width: 2.5
        }
    },
    name: "Азербайджан",
};

var trace3 = {
    x: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [2.4, 2.3, 2.4, 2.4, 2.4, 2.2, 2.0, 2.0, 2.3],
    marker: {
        color: '#CC0000',
        line: {
            width: 2.5
        }
    },
    name: "Армения",
};

var trace4 = {
    x: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [8.4, 7.0, 7.0, 6.9, 6.3, 6.4, 6.3, 5.8, 6.1],
    marker: {
        color: '#6CAC48',
        line: {
            width: 2.5
        }
    },
    name: "Молдова",
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
    title: 'Plotly.js',
    font: { size: 18 }
};

var config = { responsive: true }

Plotly.newPlot('tester', data, layout, config);