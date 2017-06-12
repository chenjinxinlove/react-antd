/**
 * Created by chenjinxin on 2017/3/25.
 */
import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import Page from 'pages/Page.js';
import App  from '../pages/app';

import Login from '../pages/Login';

import Js from '../pages/standard/js';
// import Dashboard from './components/dashboard/Dashboard';


// const Login = (location, cb) => {
//   require.ensure([], require => {
//      cb(null, require('../pages/Login/').default)
//    },'Login')
//  };

// <Route path={'standard'}>
//   <Route path={'js'} component={Js} />
//   <Route path={'css'} component={Css} />
//   <Route path={'html'} component={Html} />
//   <Route path={'git'} component={Git} />
//   <Route path={'deploy'} component={Deploy} />
//   </Route>
//   <Route path={'dashboard/index'} component={Dashboard} />

const routes = (
  <Route path="/" components={ Page }>
    <IndexRedirect to="/app" />
    <Route path='/Login' component = { Login }></Route>
    <Route path={'app'} component={App}>
      <Route path={'standard'}>
        <Route path={'js'} component={Js} />
      </Route>
    </Route>

  </Route>
);
export default routes;
