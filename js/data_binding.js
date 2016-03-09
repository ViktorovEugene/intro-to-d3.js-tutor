/**
 * Created by jeka on 09.03.16.
 */

var sales = [
  { product: 'Hoodie',  count: 7 },
  { product: 'Jacket',  count: 6 },
  { product: 'Snuggie', count: 9 }
];

var svg = d3.select('svg')
    .attr('width', 310)
    .attr('height', 200)
  .append('g')
    .attr('transform', 'translate(10,10)');

var rects = svg.selectAll('rect')
  .data(sales);

var newRects = rects.enter();

// recall that scales are functions that map from
// data space to screen space
var maxCount = d3.max(sales, function(d, i) {
  return d.count;
});
var x = d3.scale.linear()
  .range([0, 300])
  .domain([0, maxCount]);
var y = d3.scale.ordinal()
  .rangeRoundBands([30, 105])
  .domain(sales.map(function(d, i) {
    return d.product;
  }));

newRects.append('rect')
  .attr('x', x(0))
  .attr('y', function(d, i) {
    return y(d.product);
  })
  .attr('height', y.rangeBand())
  .attr('width', function(d, i) {
    return x(d.count);
  });