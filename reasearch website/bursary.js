// Load google charts
google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawPie);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawPieCharts);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Courses', 'Stats'],
  ['Applied Sciences', 8],
  ['Business & Management', 2],
  ['Education', 2],
  ['Engineering', 2],
  ['Health & Wellness Sciences ', 2],
  ['Information Technology', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Study Focus', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function drawPie() {
  var dataMark = google.visualization.arrayToDataTable([
  ['Gender', 'Statss'],
  ['Female', 8],
  ['Male', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var option = {'title':'Bursary students by gender', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piecharttwo"
  var charts = new google.visualization.PieChart(document.getElementById('piecharttwo'));
  charts.draw(dataMark, option);
}

function drawPieChart() {
  var datas = google.visualization.arrayToDataTable([
  ['Institutions', 'Statss'],
  ['Public University', 8],
  ['TVETs', 2]
]);

  // Optional; add a title and set the width and height of the chart
  var optionMark = {'title':'Bursary students by gender', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piecharttwo"
  var chartMark = new google.visualization.PieChart(document.getElementById('chartone'));
  chartMark.draw(datas, optionMark);
}

function drawPieCharts() {
  var datass = google.visualization.arrayToDataTable([
  ['Race', 'Stats'],
  ['Blacks', 6],
  ['Other', 4]
]);

  // Optional; add a title and set the width and height of the chart
  var optionMarks = {'title':'Bursary students by race', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piecharttwo"
  var chartMarks = new google.visualization.PieChart(document.getElementById('charttwo'));
  chartMarks.draw(datass, optionMarks);
}
