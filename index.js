google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Month Attendance'],
    ['January',      25],
    ['Febuary',      22],
    ['March',        26],
    ['April',        27],
    ['May',          27],
    ['June',         27],
    ['July',         27],
  ]);

  var options = {
    title: 'My Monthly Attendence log'
    
  };
  var color={
background:'red'
  };
  

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options,color);
}

$(document).ready(function(){
    $(".sidebar-btn").click(function(){
    $(".wrapper").toggleClass("collapse");    
    }); 
    }); 


    $(document).ready(function(){
      $("#books").click(function(){
      $(".Books").toggleClass("collapse");    
      }); 
      }); 