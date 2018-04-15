function barplot(data, div_id='123', statName='Scores') {
    var data = [
        {
            x: data[0],
            y: data[1],
            type : 'bar',
            marker: {
                color: 'rgba(58,200,225,.5)'
            }
        }
    ];
    var title = 'NBA Top 5 ' + statName
    var layout = {title: title};
    return Plotly.newPlot(div_id, data, layout)
}



function pieChart(data=[60, 21], div_id='123', labels=['Win', 'Loss']) {
    var data= [
        {
            values: data,
            labels: labels,
            type: 'pie'
        }
    ];

    var layout = {
        height: 400,
        width: 500
    };

    return  Plotly.newPlot(div_id, data, layout);
}

function radarChart(data=[0.5, 0.6, 0.5, 0.2, 0.3], div_id='123'){
    data = [{
        type: 'scatterpolar',
        r: data,
        theta: ['Scores', 'Rebound', 'Assist', 'Steal', 'Block'],
        fill: 'toself'
    }]

    var layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 20]
            }
        },
        showlegend: false
    }
    return Plotly.newPlot(div_id, data, layout)
}