/**
 * Created by chenjinxin on 2017/3/25.
 */
import React from 'react';
import { Route} from 'react-router';
import Page from 'pages/Page.js';
import App  from '../pages/app';

import Icons from 'components/ui/icons';

// const Home = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../pages/home/home').default)
//   },'Home')
// };

const routes = (
  <Route path="/" components={ Page }>
    <Route path='app' component = { App }></Route>
    <Route path='ui'>
      <Route path='icons' component={Icons} />
      <Route path='buttons' component={Buttons} />
      <Route path='spins' component={Spins} />
      <Route path='modals' component={Modals} />
      <Route path='notifications' component={Notifications} />
      <Route path='tabs' component={Tabs} />
      <Route path='banners' component={Banners} />
      <Route path='wysiwyg' getComponent={Wysiwyg} />
      <Route path='drags' component={Drags} />
      <Route path='gallery' component={Gallery} />
    </Route>
  </Route>
);
export default routes;
