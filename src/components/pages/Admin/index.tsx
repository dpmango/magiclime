import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
      </Switch>
    </div>
  );
};

export default Admin;
