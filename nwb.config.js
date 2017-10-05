module.exports = {
	type: 'react-app',
	webpack: {
		publicPath: '',
		autoprefixer:({
			browsers: ['> 1%', 'last 4 versions', 'Firefox >= 20', 'iOS >=7'],
			// flexbox: false
		})
	}
}

