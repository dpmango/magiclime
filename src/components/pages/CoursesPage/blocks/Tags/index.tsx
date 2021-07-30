import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@consta/uikit/Button';

interface Item {
  id: string;
  label: string;
}

const items: Item[] = [
  {
    id: 'Маркетинг',
    label: 'Маркетинг',
  },
  {
    id: 'Финансы',
    label: 'Финансы',
  },
  {
    id: 'Языки',
    label: 'Языки',
  },
  {
    id: 'Личный рост',
    label: 'Личный рост',
  },
  {
    id: 'Инстаграм',
    label: 'Инстаграм',
  },
  {
    id: 'Программирование',
    label: 'Программирование',
  },
  {
    id: 'Инвестиции',
    label: 'Инвестиции',
  },
  {
    id: 'Общеобразовательные',
    label: 'Общеобразовательные',
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    overflowX: 'auto',
  },
  button: {
    fontSize: '16px',
    marginRight: '12px',
    marginBottom: '12px',
  },
});

const TagsBlock = () => {
  const styles = useStyles();
  const [values, setValues] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    let newValues = [...values];

    if (newValues.includes(id)) {
      newValues = newValues.filter((val) => val !== id);
    } else {
      newValues = [...newValues, id];
    }
    setValues(newValues);
  };

  return (
    <div className={styles.root}>
      {items.map((item) => {
        const active = values.includes(item.id);
        return (
          <Button
            key={item.id}
            label={item.label}
            form="round"
            view={active ? 'primary' : 'secondary'}
            onClick={() => handleToggle(item.id)}
            className={styles.button}
          />
        );
      })}
    </div>
  );
};

export default TagsBlock;
