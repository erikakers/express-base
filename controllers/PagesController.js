'use strict'; // eslint-disable-line

class PagesController {

  static index(req, res) {
    res.render(req.url, {
      title: 'React Engine Express Sample App Controller',
      name: 'Jordan'
    });
  }

  static about(req, res) {
    res.render(req.url, {
      title: 'React Engine Express Sample App form the About View.',
      name: 'Erik'
    });
  }
}

module.exports = PagesController;
