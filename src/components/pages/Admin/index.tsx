import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from './Users';
import Transactions from './Transactions';

const Admin: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin/users" />} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/transactions" component={Transactions} />
      </Switch>
    </div>
  );
};

export default Admin;
