import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './components/App';
import About from './views/about/About';
import Blog from './views/blog/Blog';
import Work from './views/work/Work';
import Contact from './views/contact/Contact';
import Index from './views/index/Index';
import NotFound from './views/not-found/NotFound';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />

        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/work" component={Work}/>
        <Route path="/contact" component={Contact}/>

        <Route path="*" component={NotFound}/>
    </Route>
);