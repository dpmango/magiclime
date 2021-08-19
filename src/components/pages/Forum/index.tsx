import React, { FC, useEffect, useState, useMemo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import { useTranslation } from 'react-i18next';

import ForumTopicPage from 'components/pages/Forum/ForumTopicPage';
import ForumTopics from 'components/pages/Forum/ForumTopics';
import useStyles from './styles';

const ForumRouterPage: FC = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography size="3xl" weight="semibold" lineHeight="m">
        {t('forum.page.title')}
      </Typography>

      <Switch>
        <Route
          exact
          path={`${path}`}
          render={() => (
            <div className={styles.content}>
              <ForumTopics />
            </div>
          )}
        />
        <Route path={`${path}/:topic`} component={ForumTopicPage} />
      </Switch>
    </div>
  );
};

export default ForumRouterPage;
