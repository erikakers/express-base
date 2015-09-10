const PagesController = require('../controllers/PagesController');

console.log(PagesController);

module.exports = function(app) {
  app.get('/', PagesController.index);
  app.get('/about', PagesController.about);

  app.use(function(req, res) {
    res.render('404', {
      title: 'React Engine Express Sample App',
      url: req.url
    });
  });
};
