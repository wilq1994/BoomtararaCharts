import convertCJS from 'rollup-plugin-commonjs';

export default {
	entry: 'index.js',
	format: 'umd',
	moduleName: 'btchart',
	plugins: [ convertCJS() ],
	dest: 'bundle.js'
};
