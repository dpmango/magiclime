import React, { FC, useEffect, useState, useMemo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import Typography from 'components/Common/Typography';
// import { useTranslation } from 'react-i18next';

import TopicList from 'components/pages/Forum/TopicList';
import Topic from 'components/pages/Forum/Topic';
import Details from 'components/pages/Forum/Details';
import useStyles from './styles';

const ForumRouterPage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  // const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path={`${path}`} component={TopicList} />
        <Route exact path={`${path}/:topic`} component={Topic} />
        <Route exact path={`${path}/:topic/:forum`} component={Details} />
      </Switch>
    </div>
  );
};

export default ForumRouterPage;
