import React, { FC } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import TopicList from 'components/pages/Forum/TopicList';
import Topic from 'components/pages/Forum/Topic';
import Details from 'components/pages/Forum/Details';
import useStyles from './styles';

const ForumRouterPage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();

  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path={`${path}`} component={TopicList} />
        <Route exact path={`${path}/:topicId`} component={Topic} />
        <Route exact path={`${path}/:topicId/:forumId`} component={Details} />
      </Switch>
    </div>
  );
};

export default ForumRouterPage;
