/**
 * Created by chenjinxin on 2017/3/25.
 */
import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import Page from 'pages/Page.js';
import App  from '../pages/app';
 // const Home = (location, cb) => {
 //  require.ensure([], require => {
 //     cb(null, require('../pages/home/home').default)
 //   },'Home')
 // };

const routes = (
  <Route path="/" components={ Page }>
    <IndexRedirect to="/app/ui/icons" />
    <Route path='app' component = { App }>
    </Route>

  </Route>
);
export default routes;
