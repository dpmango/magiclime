import React, { FC, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import {
  getApplicationsService,
  postApplicationService,
} from 'utils/api/routes/position';
import { ISelectOption } from 'types/interfaces/common';

import { content } from './mockData';
import useStyles from './styles';
import useRootStyles from '../styles';

const matrixOptions: ISelectOption[] = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
  { id: 6, label: '6' },
];

const ProfileApplications: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  const [matrix, setMatrix] = useState<ISelectOption | null>(matrixOptions[0]);
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const [err, data] = await getApplicationsService();

    if (err) {
      toast.error(err);
      return;
    }

    setApplications(data);
  };

  const handleApplicationPost = async () => {
    const [err, data] = await postApplicationService({
      from_user: 42,
      to_user: 1,
    });

    if (err) {
      toast.error(err);
      return;
    }

    await fetchApplications();
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className={styles.root}>
      <div className={rootStyles.section}>
        <div className={styles.text}>
          <Typography weight="semibold" lineHeight="s" size="2xl">
            Что такое заявка?
          </Typography>

          <Typography margin="12px 0 0" lineHeight="s" size="s">
            Заявка это возможность доверить покупку места в матрице вашему
            пригласителю. Он сможет выбрать оптимальное место, чтобы поставить
            Вас. Деньги будут списаны с вашего счета. После открытия матрицы, Вы
            сможете самостоятельно выбирать порядок размещения дальнейших мест в
            ней.
          </Typography>
        </div>

        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.title')}
        </Typography>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thLogin')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thName')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thEmail')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thPhone')}
              </Typography>
            </th>
            <th />
          </thead>
          <tbody className={styles.tbody}>
            {content &&
              content.map((tr) => (
                <tr>
                  <td>
                    <Typography size="s">{tr.login}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.name}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.email}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.phone}</Typography>
                  </td>
                  <td>
                    <Flex
                      direction="column"
                      align="stretch"
                      className={styles.actions}
                    >
                      {/* <Button size="s" label={t('common.actions.accept')} /> */}
                      <Button
                        size="s"
                        view="secondary"
                        label={t('common.actions.reject')}
                      />
                    </Flex>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className={rootStyles.section}>
        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.apply.title')}
        </Typography>

        <div className={styles.text}>
          <Typography margin="12px 0 0" lineHeight="s" size="s">
            Вы можете подать заявку на активацию вашей матрицы спонсором. После
            этого, он может поставить вас в позицию выбранную по своему
            усмотрению в указанной матрице, деньги будут списаны с вашего счета.
          </Typography>
        </div>

        <div className={styles.apply}>
          <Flex>
            <div className={styles.applySelect}>
              <Select
                value={matrix}
                onChange={({ value }) => setMatrix(value)}
                items={matrixOptions}
              />
            </div>

            <Button
              label={t('profile.applications.apply.cta')}
              onClick={handleApplicationPost}
            />
          </Flex>
        </div>
      </div>

      <div className={rootStyles.section}>
        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.my.title')}
        </Typography>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thLogin')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thName')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thEmail')}
              </Typography>
            </th>
            <th>
              <Typography size="xs" weight="semibold">
                {t('profile.applications.table.thPhone')}
              </Typography>
            </th>
            <th />
          </thead>
          <tbody className={styles.tbody}>
            {content &&
              content.map((tr) => (
                <tr>
                  <td>
                    <Typography size="s">{tr.login}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.name}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.email}</Typography>
                  </td>
                  <td>
                    <Typography size="s">{tr.phone}</Typography>
                  </td>
                  <td>
                    <Flex
                      direction="column"
                      align="stretch"
                      className={styles.actions}
                    >
                      <Button
                        size="s"
                        view="secondary"
                        label={t('common.actions.reject')}
                      />
                    </Flex>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileApplications;
