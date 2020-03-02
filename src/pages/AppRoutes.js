import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';

const MainLayout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

const AppRoute = ({ component: Component, layout: Layout = MainLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const NoLayout = ({ children }) => (<>{children}</>);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Switch>
          <AppRoute path='/higher-education/:lang' component={Home} layout={NoLayout} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
