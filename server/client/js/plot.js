function barplot(playerName, stat, div_id) {
    var data = [
        {
            x: playerName,
            y: stat,
            type : 'bar',
            marker: {
                color: 'rgb(100, 200, 300)'
            }
        }
    ];

    var layout = {title: 'NBA STAT BARPLOT'};
    return Plotly.newPlot(div_id, data, layout)
}

function piechart(values, div) {
    var data= [
        {
            values: values,
            labels: ['Win', 'Loss'],
            type: 'pie'
        }
    ];

    var layout = {
        height: 400,
        width: 500
    };

    return  Plotly.newPlot(div, data, layout);
}