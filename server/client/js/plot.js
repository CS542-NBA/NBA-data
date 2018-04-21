// data=[['player1', 'player2', 'player3'], [30, 28, 27]]
// color = '(58, 200, 225, 0.5)'

function barPlot(data, div_id, color='(58, 200, 225, 0.5)') {
    var y_axis = data[1]
    var col = 'rgba'+ color
    var ymin = Math.min(...y_axis);
    var ymax = Math.max(...y_axis);
    var data = [
        {
            x: data[0],
            y: data[1],
            type : 'bar',
            marker: {
                color: col
            }
        }
    ];
    var layout = {  xaxis:{type: 'category'},
        yaxis: {range: [ymin/2.0, 1.1 * ymax]}
    };

    return Plotly.newPlot(div_id, data, layout);
}


function pieChart(data, div_id, labels) {

    var data= [
        {
            values: data,
            labels: labels,
            type: 'pie'
        }
    ];

    var layout = {
        height: 500,
        width: 600
    };

    return  Plotly.newPlot(div_id, data, layout);
}
function pieChart_Nathan(data, div_id, labels) {

    var data= [
        {
            values: data[1],
            labels: labels,
            type: 'pie'
        }
    ];

    var layout = {
        height: 500,
        width: 600
    };

    return  Plotly.newPlot(div_id, data, layout);
}


function radarChart(data, div_id){
    stat_min = 0.0;
    stat_max = [31.6, 14.1, 11.2, 2.0, 2.6];


    for(i=0; i<data.length; i++){
        console.log(i);
        data[i] = (data[i] - stat_min)/(stat_max[i]-stat_min);

    }
    console.log("radar data!!!later"+data);

    data = [{
        type: 'scatterpolar',
        r: data,
        theta: ['Scores', 'Rebound', 'Assist', 'Steal', 'Block'],
        fill: 'toself'
    }]


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

function transpose(a) {

    // Calculate the width and height of the Array
    var w = a.length || 0;
    var h = a[0] instanceof Array ? a[0].length : 0;

    // In case it is a zero matrix, no transpose routine needed.
    if(h === 0 || w === 0) { return []; }

    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];

    // Loop through every item in the outer array (height)
    for(i=0; i<h; i++) {

        // Insert a new row (array)
        t[i] = [];

        // Loop through every item per item in outer array (width)
        for(j=0; j<w; j++) {

            // Save transposed data.
            t[i][j] = a[j][i];
        }
    }

    return t;
}

function plotTable(data, div_id){
    
    var header = data[0]
    var header_value = []
    for(i=0; i<header.length; i++){
        header_value.push([header[i]])
    }
    
    data.shift()
    var values = transpose(data)
    var data = [{
        type: 'table',
        header: {
            values: header_value,
            align: "center",
            line: {width: 1, color: 'black'},
            fill: {color: "#506784"},
            font: {family: "Courier New, monospace", size: 12, color: "white"}
        },

        cells: {
            values: values,
            align: ["left", "center"],
            line: {color: "#506784", width: 1},
            fill: {color: ['white', 'white']},
            font: {family: "Arial", size: 12, color: ["#506784"]}
        }
    }]
    console.log(data);
    
    return Plotly.plot(div_id, data)



}

