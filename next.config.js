module.exports = {
	images: {
		domains: ['xd-cinema.vercel.app'],
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ removeViewBox: false }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};