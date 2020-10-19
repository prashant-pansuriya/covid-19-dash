var trace1 = {
  x: {{label1 |safe}},
  y: {{data1 |safe}},
  name: 'New Case',
  marker: {color: 'rgb(0, 128, 0)'},
  type: 'bar'
};

var trace2 = {
  x: {{label2 |safe}},
  y: {{data2 |safe}},
  name: 'Death Case',
  marker: {color: 'rgb(255, 0, 0)'},
  type: 'bar'
};


var data = [trace1, trace2];

var layout = {
  title: 'Covid 19',
  xaxis: {tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    },
    },
  yaxis: {
    title: 'Time Series Case Covid 19',
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1,

};


var line1 = {
  x: {{label1 |safe}},
  y: {{data1 |safe}},
  mode: 'lines',
  name: 'New case'
};

var line2 = {
   x: {{label2 |safe}},
  y: {{data2 |safe}},
  mode: 'lines',
  name: 'Death case'
};


var data1 = [line1, line2];

var layout1 = {
  title: 'Covid-19',
  xaxis: {
    title: 'Date-Wise Case'
  },
  yaxis: {
    title: 'Cases'
  }
};


var datapie = [{
  type: "pie",
  values: [{{active}},{{recover}},{{death}} ],
  labels: ["Active", "Recover", "Death"],
  textinfo: "label+percent",
  insidetextorientation: "radial"
}]

var layoutpie = {
  title : "Covid -19"
}

Plotly.newPlot('pie', datapie, layoutpie)
Plotly.newPlot('pieb', datapie, layoutpie)


Plotly.newPlot('line', data1,layout1);
Plotly.newPlot('lineb', data1,layout1);

Plotly.newPlot('myDiv', data, layout);

Plotly.newPlot('barb', data, layout);

$(document).ready(function() {
    $('#example').DataTable();
});
