import app from './app.js'

import config from './config.js'
import Home from '../controllers/Home.js';
import Search from '../controllers/Search.js';
import About from '../controllers/About.js';

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
    app.mvc.router = new Router({
        mode: 'hash',
        root: '/index.html'
    });
    app.mvc.router.add('/', () => app.mvc.dispatchRoute(new Home))
        .add('/search', () => app.mvc.dispatchRoute(new Search))
        .add('/about', () => app.mvc.dispatchRoute(new About));
    app.mvc.router.check().addUriListener();
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter()
})