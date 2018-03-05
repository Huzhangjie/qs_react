import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Switch>
    <Route exact path="/home" component={() => React.createElement(require('C:/Users/Huzj/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/home' })} />
    <Route exact path="/" component={require('../index.js').default} />
  </Switch>
</Router>
  );
}
