import React, { FC, useEffect, useRef, useState } from 'react';
import { Select } from '@consta/uikit/Select';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import useStyles from './styles';
import { IconMeatball } from '@consta/uikit/IconMeatball';
import { SetStateType } from '../../../../../types/common';
import Dropdown from './Dropdown';
import Flex from '../../../../Common/Flex';
import { Button } from '@consta/uikit/Button';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const styles = useStyles({ open: isSearchOpen });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Get user chat groups
  }, []);

  const toggleSearch = () => {
    if (search && isSearchOpen) setSearch('');
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <Flex justify={'space-between'} className={styles.root} align={'center'}>
        <Select
          placeholder="Все"
          view="clear"
          items={groups}
          className={styles.group}
          getItemLabel={(item) => item}
          getItemKey={(item) => item}
          value={selectedGroup}
          onChange={({ value }) => setSelectedGroup(value)}
        />

        <div ref={ref}>
          <Button
            onlyIcon
            view={'clear'}
            size={'s'}
            iconLeft={IconSearch}
            onClick={toggleSearch}
          />
          <Button
            onlyIcon
            size={'s'}
            view={'clear'}
            className={styles.meatball}
            iconLeft={IconMeatball}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <Dropdown
              clickOutside={() => setIsDropdownOpen(false)}
              targetRef={ref}
            />
          )}
        </div>
      </Flex>
      <div className={styles.search}>
        <TextField
          form={'brick'}
          className={styles.search}
          placeholder="Поиск по сообщениям"
          value={search}
          onChange={({ value }) => setSearch(value as string)}
        />
      </div>
    </>
  );
};

export default Header;
