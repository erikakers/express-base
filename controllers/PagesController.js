
export default class PagesController {

    static home(req, res) {
        res.render(req.url, {
            title: 'React Engine Express Sample App Controller',
            name: 'Erik'
        });
    }

    static about(req, res) {
        res.render(req.url, {
            title: 'React Engine Express Sample App form the About View.',
            name: 'Erik'
        });
    }
}
