import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Stream from './Stream';
import Webinar from './Webinar';
import WebinarsPage from './WebinarsPage';

const Webinars: FC = () => {
  return (
    <Switch>
      <Route exact path="/webinars" component={WebinarsPage} />
      <Route path="/webinars/:id" component={Webinar} />
      <Route path="/webinars/:id/stream" component={Stream} />
    </Switch>
  );
};

export default Webinars;
