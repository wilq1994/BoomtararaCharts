/* eslint no-console:0 */
class BtChart {
	init(){
		console.log('Hello!');
	}
}

const chart = new BtChart();
chart.init();

console.log(BtChart.prototype.init);

export default BtChart;
