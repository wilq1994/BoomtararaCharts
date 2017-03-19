(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.btchart = factory());
}(this, (function () { 'use strict';

/* eslint no-console:0 */
class BtChart {
	init(){
		console.log('Hello!');
	}
}

const chart = new BtChart();
chart.init();

console.log(BtChart.prototype.init);

return BtChart;

})));
