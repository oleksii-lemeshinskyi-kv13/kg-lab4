(function (){
  var VIZ = {};
  var width = 4, height = 4;
  var basePoint = {x: 0, y: 0};
  var color = '#50E52A';
  var svg = d3.select("#svg-container")
    .append("svg")
    .attr("id", "thesvg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 " + width + " " + height)
    .append("g");

  VIZ.times = 10000;
  VIZ.count = 0;

  function getCoords(x, y) {
    var p = random(1,1000);
    return p <= 701 ? {x: 0.81 * x + 0.07  * y + 0.12, y: -0.04 * x + 0.84 * y + 0.195}: // 70.1% (2)
           p <= 851 ? {x: 0.18 * x - 0.25  * y + 0.12, y: 0.27  * x + 0.23 * y + 0.02 }: // 15.0% (3)
           p <= 980 ? {x: 0.19 * x + 0.275 * y + 0.16, y: 0.238 * x - 0.14 * y + 0.12 }: // 12.9% (4)
                    {x: 0.0235 * x + 0.087 * y + 0.11, y: 0.045 * x + 0.1666 * y};      
  }
  
  function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function renderPoint(data, flag) {
    svg.append("circle")
      .attr("class", "fractalPoint")
      .style("fill", color)
      .style("opacity", .4)
      .attr("cx", data.x)
      .attr("cy", data.y)
      .attr("r", .002)
  }
  VIZ.addPoint = function () { 
    var xy = getCoords(basePoint.x, basePoint.y);
    basePoint = xy; 
      renderPoint({x: xy.x + width / 5, y: xy.y + height / 10}, 0); 
  }
  VIZ.onResize = function () {
    var aspect = height / width, chart = $("#thesvg");
    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
  }

  window.VIZ = VIZ;

}())