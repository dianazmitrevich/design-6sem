const ctx = document.getElementById("myChart");
const images = [
    ['Беларусь', 'belarus.png'],
    ['Азербайджан', 'az.png'],
    ['Армения', 'armenia.png'],
    ['Молдова', 'moldova.png'],
];

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
            {
                label: 'Беларусь',
                data: [5.0, 5.0, 4.8, 4.8, 4.9, 4.8, 4.9, 4.8, 4.7],
                borderWidth: 1
            },
            {
                label: 'Азербайджан',
                data: [2.7, 2.5, 2.6, 3.0, 2.9, 2.5, 2.5, 2.7, 2.8],
                borderWidth: 1
            },
            {
                label: 'Армения',
                data: [2.4, 2.3, 2.4, 2.4, 2.4, 2.2, 2.0, 2.0, 2.3],
                borderWidth: 1
            },
            {
                label: 'Молдова',
                data: [8.4, 7.0, 7.0, 6.9, 6.3, 6.4, 6.3, 5.8, 6.1],
                borderWidth: 1
            },
        ]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 9
            }
        },
        plugins: {
            tooltip: {
                enabled: false,

                external: function (context) {
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(getBody);

                        let innerHtml = '<thead>';

                        titleLines.forEach(function (title) {
                            innerHtml += '<tr><th>' + title + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function (body, i) {
                            const colors = tooltipModel.labelColors[i];
                            let style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 2px';
                            const span = '<span style="' + style + '">' + body + '</span>';
                            innerHtml += '<tr><td>' + span + '</td></tr>';

                            let image = "";
                            for (let index = 0; index < images.length; index++) {
                                if (body[0].includes(images[index][0])) {
                                    image = images[index][1];
                                }
                            }

                            innerHtml += '<tr><td><img class="country-image" src="' + image + '"></td></tr>';
                        });
                        innerHtml += '</tbody>';

                        let tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position = context.chart.canvas.getBoundingClientRect();
                    const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.font = bodyFont.string;
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        }
    }
});