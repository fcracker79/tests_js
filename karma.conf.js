module.exports = function(config) {
    config.set({
        files: ['test/browser.js'],
        frameworks: ['mocha'],
        browsers: ['Chrome', 'Firefox'],
        plugins: ['karma-mocha', 'karma-chrome-launcher', 'karma-firefox-launcher'],
        singleRun: true
    })
}
