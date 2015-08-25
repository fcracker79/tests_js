module.exports = function(config) {
    config.set({
        files: ['test/index.js'],
        frameworks: ['mocha', 'browserify'],
        browsers: ['Chrome', 'Firefox'],
        plugins: ['karma-browserify', 'karma-mocha', 'karma-chrome-launcher', 'karma-firefox-launcher'],
        preprocessors: {
            'test/index.js': [ 'browserify' ]
        },
        singleRun: true
    })
}
