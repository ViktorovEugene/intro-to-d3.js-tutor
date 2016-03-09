var numbers = [ 5, 4, 10, 1 ],
    data = [
      { date: '2014-01-01', amount: 10 },
      { date: '2014-02-01', amount: 20 },
      { date: '2014-03-01', amount: 40 },
      { date: '2014-04-01', amount: 80 }
    ];
    
var y = d3.scale.linear()
  .domain([0, 80]) // $0 to $80
  .range([200, 0]); // Seems backwards because SVG is y-down

var x = d3.time.scale()
    .domain([
      new Date(Date.parse('2014-01-01')),
      new Date(Date.parse('2014-04-01'))
    ])
    .range([0, 300]);
    
var xAxis = d3.svg.axis()
  .scale(x)         // x is the d3.time.scale()
  .orient('bottom') // the ticks go below the graph
  .ticks(4);        // specify the number of ticks
  
var yAxis = d3.svg.axis()
  .scale(y)         // x is the d3.time.scale()
  .orient('left') // the ticks go below the graph
  .ticks(4);        // specify the number of ticks

var svg = d3.select('div')
  .append('svg')        // create an <svg> element
    .attr('width', 400) // set its dimentions
    .attr('height', 350)
  .append("g")
    .attr("transform", "translate(10,10)");

svg.append('g')            // create a <g> element
    .attr('class', 'x axis')// specify classes
    .attr("transform", "translate(30," + 200 + ")")
    .call(xAxis);            // let the axis do its thing

svg.append('g')
    .attr('class', 'y axis')
    .attr("transform", "translate(30,0)")
    .call(yAxis)