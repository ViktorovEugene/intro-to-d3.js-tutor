/**
 * Created by jeka on 09.03.16.
 */
/* it renders scales to the page */

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

var svg = d3.select('body')
  .append('svg')        // create an <svg> element
    .attr('width', 400) // set its dimensions
    .attr('height', 150);

svg.append('g')            // create a <g> element
  .attr('class', 'x axis') // specify classes
  .call(xAxis);            // let the axis do its thing