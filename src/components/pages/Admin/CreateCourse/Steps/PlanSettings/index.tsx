import React, { FC } from 'react';
import FormikSelect from '../../../../../Common/Controls/Formik/Select';
import useStyles from '../Audience/styles';

const PlanSettings: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <FormikSelect
        items={[
          { id: 1, label: 'После завершения предыдущего' },
          { id: 2, label: 'В любой момент' },
        ]}
        name="step_3.access_to_next"
        label="Доступ к след. уроку"
        placeholder="Выберите тип доступа"
      />
      <FormikSelect
        items={[
          { id: 1, label: '1 неделя' },
          { id: 2, label: '2 недели' },
        ]}
        name="step_2.access_to_course"
        label="Доступ к курсу после завершения"
        placeholder="Выберите период"
      />
    </div>
  );
};

export default PlanSettings;
