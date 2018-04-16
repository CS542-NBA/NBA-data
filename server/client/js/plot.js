// data=[['player1', 'player2', 'player3'], [30, 28, 27]]

function barPlot(data, div_id, statName) {
    var div_id;
    var y = data[1];
    var ymin = Math.min(...y);
    var ymax = Math.max(...y);

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
    var layout = {  xaxis:{type: 'category'},
                    yaxis: {range: [ymin/2, 1.1 * ymax]}};

    return Plotly.newPlot(div_id, data, layout);
}


function pieChart(data, div_id, labels) {
    var div_id;

    var data= [
        {
            values: data,
            labels: labels,
            type: 'pie'
        }
    ];
    var div_id;

    var layout = {
        height: 500,
        width: 600
    };

    return  Plotly.newPlot(div_id, data, layout);
}


function radarChart(data, div_id){
    var data;
    var div_id;
    stat_min = 0.0;
    stat_max = [31.6, 14.1, 11.2, 2.0, 2.6];


    for(i=0; i<data.length; i++){
        data[i] = (data[i] - stat_min)/stat_max[i]-stat_min;
    }
    
    
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
                visible: false,
                range: [0, 1]
            }
        },
        showlegend: false
    }
    return Plotly.newPlot(div_id, data, layout)
}

