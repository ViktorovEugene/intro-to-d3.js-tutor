var svg = d3.select('svg')
    .attr('width', 320)
    .attr('height', 85)
  .append('g')
    .attr('transform', 'translate(10,10)');

/* The Key Function */

// This is the initial data to build the graph
var sales1 = [
  { product: 'Hoodie', count: 7 },
  { product: 'Jacket', count: 6 }
];

// This is the updated data, that will be used to rearrange the initial graph
var sales2 = [
  { product: 'Jacket',  count: 6 }, // same
  { product: 'Snuggie', count: 9 }  // new
];

// Create the scales for further visualisation
var x = d3.scale.linear()
  .range([0, 300])
  .domain([0, 10]);
var y = d3.scale.ordinal()
  .rangeRoundBands([0, 75])
  .domain(['Hoodie', 'Jacket', 'Snuggie']);


// Bind the initial data from "sales1"
var rects = svg.selectAll('rect')
  .data(sales1, function(d, i) { return d.product; } );

alert(rects.size() + ' - initial number of rect\'s tags.\nThe data is ' +
    'bound, but isn\'t appended yet.');

// 2 -- first join, adds two new elements
rects.enter().append('rect')
  .attr('x', x(0))
  .attr('y', function(d, i) {
    return y(d.product);
  })
  .attr('height', y.rangeBand())
  .attr('width', function(d, i) {
    return x(d.count);
  });

alert(rects.size() + ' - rect\'s after appending.\nYou can see the new ' +
    'elements now.');


/* Bind the new array in to elements - one is like as previous one, but other
 * is brand new.
 * We should rearrange the graph with this new data.
 */
var nextrects = rects
  .data(sales2, function(d, i) { return d.product; });

alert('Now we are using the new array of data. It has the single unchanged ' +
    'element and one brand new element.\n' + nextrects.exit().size() +
    ' - this is the elements from "exit()" call. ' +
    'This is the element that was in the previous array but not exists in ' +
    'the new array of data.\n' +
    'Let\'s delete it from the screen!');
// 1 -- one element to remove
nextrects.exit().remove();
alert('One selected element was removed! Now the brand new element will' +
    ' be added!');


// Append one new element
nextrects.enter().append('rect')
  .attr('x', x(0))
  .attr('y', function(d, i) {
    return y(d.product);
  })
  .attr('height', y.rangeBand())
  .attr('width', function(d, i) {
    return x(d.count);
  });

alert(nextrects.size() + " - elements on the screen after appending!");