//statName='Scores'
//e.g. data= [['player1', 'player2'], [20, 10]]
function barPlot(data, div_id, statName) {
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
    var div_id;
    var title = 'NBA Top 5 ' + statName
    var layout = {title: title};
    return Plotly.newPlot(div_id, data, layout)
}


//labels=['Win', 'Loss']
function pieChart(data, div_id, labels) {
    var data= [
        {
            values: data,
            labels: labels,
            type: 'pie'
        }
    ];
    var div_id;

    var layout = {
        height: 400,
        width: 500
    };

    return  Plotly.newPlot(div_id, data, layout);
}
//e.g. data=[0.5, 0.6, 0.5, 0.2, 0.3]
function radarChart(data, div_id){
    data = [{
        type: 'scatterpolar',
        r: data,
        theta: ['Scores', 'Rebound', 'Assist', 'Steal', 'Block'],
        fill: 'toself'
    }]
  var div_id;

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