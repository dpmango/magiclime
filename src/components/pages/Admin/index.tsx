import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Courses from './Courses';
import CreateCourse from './CreateCourse';
import Users from './Users';
import Transactions from './Transactions';
import Webinars from './Webinars';
import CreateWebinar from './CreateWebinar';

const Admin: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin/users" />} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/transactions" component={Transactions} />
        <Route exact path="/admin/webinars" component={Webinars} />
        <Route path="/admin/webinars/create" component={CreateWebinar} />
        <Route exact path="/admin/courses" component={Courses} />
        <Route path="/admin/courses/create" component={CreateCourse} />
      </Switch>
    </div>
  );
};

export default Admin;
