const BaseController = require("./base.controller");

class HomeController extends BaseController {
    async showHomePage(req, res) {
        let dataHTML = await this.getTemplate('./src/views/home.html');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(dataHTML);
        res.end();
    }

    async showAboutPage(req, res) {
        let dataHTML = await this.getTemplate('./src/views/about.html');
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(dataHTML)
        res.end()
    }

    async showAlbumPage(req, res) {
        let dataHTML = await this.getTemplate('./src/views/album.html');
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(dataHTML)
        res.end()
    }
}

module.exports = HomeController;
