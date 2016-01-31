import React from 'react';
import { Route, IndexRoute } from 'react-router'

import AppLayout from './layout/App';
import WorkLayout from './layout/Work';

import About from './views/about/About';
import Blog from './views/blog/Blog';
import Work from './views/work/Work';
import Skirmish from './views/work/skirmish/Skirmish';
import Contact from './views/contact/Contact';
import Index from './views/index/Index';
import NotFound from './views/not-found/NotFound';

export default (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={Index} />

        <Route path="about" component={About}/>
        <Route path="blog" component={Blog}/>

        <Route path="contact" component={Contact}/>

        <Route path="work" component={WorkLayout}>
            <IndexRoute component={Work}/>
            <Route path="skirmish" component={Skirmish}/>
        </Route>

        <Route path="*" component={NotFound}/>
    </Route>
);