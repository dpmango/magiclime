import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Stream from './Stream';
import Webinar from './Webinar';
import WebinarsPage from './WebinarsPage';

const Webinars: FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={WebinarsPage} />
      <Route path={`${path}/:id`} component={Webinar} />
      <Route path={`${path}/:id/stream`} component={Stream} />
    </Switch>
  );
};

export default Webinars;
