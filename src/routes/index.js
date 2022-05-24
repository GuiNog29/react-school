import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Pictures from '../pages/Pictures';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function RoutesSystem() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Students} isClosed={false} />
      <PrivateRoute exact path="/pictures/:id" component={Pictures} isClosed />
      <PrivateRoute exact path="/student/" component={Student} isClosed />
      <PrivateRoute exact path="/login/" component={Login} isClosed={false} />
      <PrivateRoute
        exact
        path="/register/"
        component={Register}
        isClosed={false}
      />
      <PrivateRoute
        exact
        path="/student/:id/edit"
        component={Student}
        isClosed
      />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
