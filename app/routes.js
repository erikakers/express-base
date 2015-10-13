import PagesController from '../controllers/PagesController';

module.exports = (app) => {
    app.get('/', PagesController.home);
    app.get('/about', PagesController.about);

    app.use((req, res) => {
        res.render('404', {
            title: 'React Engine Express Sample App',
            url: req.url
        });
    });
};
