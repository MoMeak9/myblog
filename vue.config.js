const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    lintOnSave: false,
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack(config) {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/', '/about', '/article'],
                    renderer: new Renderer({
                        renderAfterDocumentEvent: 'render-event',
                    }),
                })
            );
        }
    },
}
