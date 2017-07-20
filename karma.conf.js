module.exports = function(config) {
    config.set({
        loggers: [{type: 'console', pattern: '%d{HH:mm:ss} %m'}],
        browsers: [
            'PhantomJS', 
            // 'Chrome',//descomentar para correr en los buscadores
            // 'Firefox',
            // 'Safari'
        ],

        files: [
            './node_modules/jquery/dist/jquery.js',
            './specs/stubs/materialize.js',
            './specs/stubs/vue-html5-editor.js',
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            { pattern: 'test-context.js'}
        ],

        frameworks: ['jasmine-jquery', 'jasmine'],

        preprocessors: {
            'test-context.js': ['webpack', 'sourcemap']
        },

        reporters: [
            'spec', 
            'coverage-istanbul'
        ],

        coverageIstanbulReporter: {
            dir: 'coverage/',
            reports: ['text','html']
          },

        webpackMiddleware: {
                    // webpack-dev-middleware configuration
                    // i.e.
                    noInfo: true,
                    // and use stats to turn off verbose output
                    stats: {
                        // options i.e. 
                        chunks: false
                    }
                },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ],
                postLoaders: [ {
                         test: /\.js$/,
                         exclude: /(specs|node_modules|bower_components)\//,
                           loader: 'istanbul-instrumenter'
                       } ]
            },
            devtool: 'inline-source-map',
            watch: true
        }
    });
};