/* global btchart:false */
/* eslint no-console:0 */


describe('BtChart', () => {
	it('is an function', () => {
		if(typeof btchart !== 'function'){
			throw Error(' BtChart should be an object.');
		}
	});

	it('has init method', () => {
		if(typeof btchart.prototype.init !== 'function'){
			throw Error('BtChart.init should be a function.');
		}
	});
});
