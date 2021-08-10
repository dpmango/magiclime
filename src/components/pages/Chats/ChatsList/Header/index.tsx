import React, { FC, useEffect, useRef, useState } from 'react';
import { Select } from '@consta/uikit/Select';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import useStyles from './styles';
import { IconMeatball } from '@consta/uikit/IconMeatball';
import { SetStateType } from '../../../../../types/common';
import Dropdown from './Dropdown';

interface IProps {
  search: string;
  setSearch: SetStateType<string>;
  selectedGroup: string | null;
  setSelectedGroup: SetStateType<string | null>;
}

const Header: FC<IProps> = ({
  search,
  setSearch,
  selectedGroup,
  setSelectedGroup,
}) => {
  const [groups, setGroups] = useState(['Города', 'Вебинары', 'Другое']);
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Get user chat groups
  }, []);

  const Settings = () => {
    return (
      <IconMeatball
        className={styles.cursor}
        view={'secondary'}
        onClick={() => setIsOpen(true)}
      />
    );
  };

  return (
    <>
      <div className={styles.group}>
        <Select
          placeholder="Все"
          view="clear"
          items={groups}
          className={styles.groupSelect}
          getItemLabel={(item) => item}
          getItemKey={(item) => item}
          value={selectedGroup}
          onChange={({ value }) => setSelectedGroup(value)}
        />
      </div>
      <div className={styles.search} ref={ref}>
        <TextField
          form={'brick'}
          placeholder="Поиск по сообщениям"
          value={search}
          leftSide={IconSearch}
          rightSide={Settings}
          onChange={({ value }) => setSearch(value as string)}
        />
        {isOpen && (
          <Dropdown clickOutside={() => setIsOpen(false)} targetRef={ref} />
        )}
      </div>
    </>
  );
};

export default Header;
