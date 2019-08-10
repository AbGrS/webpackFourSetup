const HtmlWebPackPlugin = require('html-webpack-plugin');

module.export ={
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize:true }
					}
				]
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./src/index.html"
		})
	]
}
