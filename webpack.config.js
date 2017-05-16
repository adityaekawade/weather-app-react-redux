
var webpack = require('webpack'); 
var path = require('path'); 

var DIST_DIR = path.resolve(__dirname, "dist"); 
var SRC_DIR = path.resolve(__dirname, "src"); 

var config = { 
	entry: SRC_DIR + "/js/index.js",
	output: {
		path: DIST_DIR + "/js"  , 
		filename: "bundle.js",
        publicPath: "/js/"
	},
	devServer: {
		inline: true, 
		port: 2929,
	},
	module: {
		loaders: [{
			test: /\.js?/, 
			include: SRC_DIR,
			loader: "babel-loader", 
			query: {
				presets: ["react", "es2015"]
			}
		}] 

	}
};

module.exports = config; 

