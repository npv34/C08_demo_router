const http = require('http');
const url = require('url');
const WebRouter = require("./src/router/web.router");
const HomeController = require("./src/controllers/home.controller");
const PORT = 8080;

const server = http.createServer(((req, res) => {
    let urlPare = url.parse(req.url);
    let method = req.method;

    let homeController = new HomeController();

    switch (urlPare.pathname) {
        case '/':
            homeController.showHomePage(req, res).catch(err => {
                console.log(err)
            })
            break;
        case '/about':
            homeController.showAboutPage(req, res).catch(err => {
                console.log(err)
            })
            break;
        case '/album':
            homeController.showAlbumPage(req, res).catch(err => {
                console.log(err)
            })
            break;
        default:
            res.writeHead(404)
            res.end("404 not found");
    }

}))

server.listen(PORT, 'localhost', () => {
    console.log('server running on port ' + PORT);
});
