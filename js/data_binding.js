var sales,
    svg = d3.select('svg')
        .attr('width', 320)
        .attr('height', 85)
      .append('g')
        .attr('transform', 'translate(10,10)');

/* Transition */

// data storage
days = [
    [
      { product: 'Hoodie', count: 10 },
      { product: 'Jacket', count: 3 },
      { product: 'Snuggie', count: 2 }
    ],
    [
      { product: 'Hoodie', count: 16 },
      { product: 'Jacket', count: 7 },
      { product: 'Snuggie', count: 8 }
    ]
];

// Create the scales for further visualisation
var x = d3.scale.linear()
  .range([0, 300])
  .domain([0, 20]);
var y = d3.scale.ordinal()
  .rangeRoundBands([0, 75])
  .domain(['Hoodie', 'Jacket', 'Snuggie']);

function toggle() {
    sales = (sales == days[0]) ? days[1] : days[0];
    update();
}

function update() {
    var rects = svg.selectAll('rect')
        .data(sales, function(d, i) {
            return d.product
        });

    // When we enter, we just want to create the rect,
    rects.enter()
        .append('rect');

    rects.transition()
        .duration(1000)
        .attr('x', x(0))
        .attr('y', function(d, i) {
            return y(d.product);
        })
        .attr('height', y.rangeBand())
        .attr('width', function(d, i) {
            return x(d.count);
        });
}
toggle();
setTimeout(toggle, 5000);
setTimeout(toggle, 7000);
setTimeout(toggle, 9000);
setTimeout(toggle, 12000);
setTimeout(toggle, 14000);