import Routes from './routes.jsx';
import Client from 'react-engine/lib/client';

const options = {
    routes: Routes,
    viewResolver: (viewName) => {
        return require('./views/' + viewName);
    }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
});
