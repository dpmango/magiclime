import React, { FC, useMemo, useState, useEffect } from 'react';
import groupBy from 'lodash/groupBy';
import { Collapse } from '@consta/uikit/Collapse';
import cns from 'classnames';
import Typography from 'components/Common/Typography';
import { ISection } from 'components/pages/CourseTask/types';

import useStyles from './styles';
import icons from '../icons';

interface IProps {
  sections: ISection[];
  activeSectionId: number;
  onSectionClick: (section: ISection) => void;
}

const CourseNavigation: FC<IProps> = ({
  sections,
  activeSectionId,
  onSectionClick,
}) => {
  const groupedSections = useMemo(() => {
    const grouped = groupBy(sections, (x) => x.module);

    return Object.keys(grouped).map((key) => ({
      label: `Раздел ${key}`,
      sections: grouped[key],
    }));
  }, [sections]);

  const activeSectionInGroup = useMemo(() => {
    let indexInGroup = 0;

    groupedSections.forEach((group) => {
      group.sections.forEach((section, idx) => {
        if (section.id === activeSectionId) {
          indexInGroup = idx;
        }
      });
    });

    return indexInGroup;
  }, [activeSectionId, groupedSections]);

  // useEffect(() => {
  //   const groupIndex
  // }, [activeSectionId])

  // TODO - @consta Collapse is not toggable (even on clean example), only manual isOpen state toggle works
  const [collapseState, setCollapseState] = useState<{
    [key: string]: boolean;
  }>(
    groupedSections.reduce(
      (acc, x) => ({
        ...acc,
        [x.label]: Object.keys(acc).length < 2,
      }),
      {}
    )
  );

  const manuallyToggleCollapse = (key: string) => {
    setCollapseState({
      ...collapseState,
      [key]: !collapseState[key],
    });
  };

  const styles = useStyles({ activeTab: activeSectionInGroup });

  return (
    <div className={styles.nav}>
      {groupedSections &&
        groupedSections.map((group) => (
          <Collapse
            key={group.label}
            label={group.label}
            iconPosition="right"
            size="xs"
            className={styles.navGroup}
            isOpen={collapseState[group.label]}
            onClick={() => manuallyToggleCollapse(group.label)}
          >
            <ul
              className={cns(
                styles.navList,
                group.sections.some((x) => x.current) && 'active'
              )}
            >
              {group.sections.map((section) => (
                <li key={section.id}>
                  <span
                    className={cns(
                      styles.navLink,
                      section.compleated && 'compleated',
                      section.available && 'available',
                      section.current && 'current'
                    )}
                    role="link"
                    tabIndex={0}
                    onClick={() => onSectionClick(section)}
                  >
                    <Typography>{section.label}</Typography>
                    {section.compleated && <icons.Done view="brand" />}
                    {!section.available && <icons.Blocked view="ghost" />}
                  </span>
                </li>
              ))}
              <div className={styles.navLine} />
            </ul>
          </Collapse>
        ))}
    </div>
  );
};

export default CourseNavigation;
