import React, { FC, useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import { Link, useHistory } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { postApplicationService } from 'utils/api/routes/position';
import { getOutcoming } from 'store/reducers/applications';
import { RootState } from 'store/reducers/rootReducer';
import { ISelectOption } from 'types/interfaces/common';
import {
  programOptions,
  buildMatrixLevels,
  getInitialLevel,
} from 'components/pages/Profile/ReferralPartners/functions';
import { getUserProgramLevel } from '../../../../../utils/api/routes/profile';

import useStyles from './styles';

interface IProps {
  withIntroText?: boolean;
  defaultLevel?: number;
  defaultProgram?: number;
}

const ApplicationsApply: FC<IProps> = ({
  withIntroText = true,
  defaultProgram,
  defaultLevel,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const [program, setProgram] = useState<ISelectOption>(programOptions[0]);
  const matrixLevels: ISelectOption[] = useMemo(() => {
    return buildMatrixLevels(program!.id).map((x: number) => ({
      id: x,
      label: `${x}`,
    }));
  }, [program]);
  const [level, setLevel] = useState<ISelectOption>(matrixLevels[0]);

  const profile = useSelector((state: RootState) => state.user.profile);

  const getLevel = useCallback(
    (id: number) => {
      getUserProgramLevel(id).then((res) => {
        const level = res.data.max_level;
        let initialLvl: number;
        if (!level) initialLvl = matrixLevels[0].id;
        else {
          initialLvl =
            level === matrixLevels.length
              ? matrixLevels[level - 1].id
              : matrixLevels[level].id;
        }
        setLevel({ id: initialLvl, label: `${initialLvl}` });
      });
    },
    [matrixLevels]
  );

  const handleApplicationPost = useCallback(async () => {
    const [err, data] = await postApplicationService({
      from_user: profile.id,
      // to_user: profile.id,
      level: defaultLevel || level!.id,
      program: defaultProgram || program!.id,
    });

    if (err) {
      toast.error('Вы уже есть в программе');
      return;
    }

    toast.success('Заявка создана');
    await dispatch(getOutcoming());
  }, [level, program]);

  const handleProgramChange = useCallback((program: ISelectOption) => {
    setProgram(program);
  }, []);

  useEffect(() => {
    getLevel(program.id);
  }, [program.id]);

  return (
    <>
      {withIntroText && (
        <>
          <Typography
            margin="24px 0 0"
            weight="semibold"
            lineHeight="s"
            size="2xl"
          >
            {t('profile.applications.apply.title')}
          </Typography>

          <div className={styles.text}>
            <Typography margin="12px 0 0" lineHeight="m" size="s">
              Вы можете подать заявку на активацию вашей матрицы спонсором.
              После этого, он может поставить вас в позицию выбранную по своему
              усмотрению в указанной матрице, деньги будут списаны с вашего
              счета.
            </Typography>
          </div>
        </>
      )}

      <div className={styles.apply}>
        <Flex align="center" direction={withIntroText ? 'row' : 'column'}>
          {withIntroText && (
            <>
              <div className={styles.applyProgram}>
                <Select
                  value={program}
                  onChange={({ value }) => handleProgramChange(value!)}
                  items={programOptions}
                />
              </div>
              <div className={styles.applyLevel}>
                <Select
                  value={level}
                  onChange={({ value }) => setLevel(value!)}
                  items={matrixLevels}
                />
              </div>
            </>
          )}

          <Flex justify="center">
            <Button
              label={t('profile.applications.apply.cta')}
              onClick={handleApplicationPost}
            />

            {!withIntroText && (
              <Button
                label="Что такое заявка?"
                view="secondary"
                onClick={() => history.push('/profile/me/applications')}
                className={styles.link}
              />
            )}
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default ApplicationsApply;
