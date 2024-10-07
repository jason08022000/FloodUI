const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/Build',
        createProxyMiddleware({
            target: 'http://localhost:3000/',
            changeOrigin: true,
            selfHandleResponse: false,
            onProxyRes: function (proxyRes, req, res) {
                const extension = req.url.split('.').pop();
                if (extension === 'gz') {
                    proxyRes.headers['Content-Encoding'] = 'gzip';
                    proxyRes.headers['Content-Type'] = getContentType(req.url);
                }
            },
        })
    );
};

function getContentType(url) {
    if (url.endsWith('.data.gz')) return 'application/octet-stream';
    if (url.endsWith('.wasm.gz')) return 'application/wasm';
    if (url.endsWith('.js.gz')) return 'application/javascript';
    return 'application/octet-stream';
}
