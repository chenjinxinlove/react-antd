/**
 * Created by chenjinxin on 2017/3/25.
 */
import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import Page from 'pages/Page.js';
import App  from '../pages/app';

import Login from '../pages/Login'

// const Login = (location, cb) => {
//   require.ensure([], require => {
//      cb(null, require('../pages/Login/').default)
//    },'Login')
//  };

const routes = (
  <Route path="/" components={ Page }>
    <IndexRedirect to="/Login" />
    <Route path='/Login' component = { Login }></Route>

  </Route>
);
export default routes;
