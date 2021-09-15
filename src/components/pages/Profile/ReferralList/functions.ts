import React from 'react';
import isEmpty from 'lodash/isEmpty';

import ConstaIcons from 'assets/icons/ConstaIcons';
import { IReferralTree } from 'types/interfaces/referrals';
import { IBuildTree, ICrumbsPage, IMappedData } from './types';

const defaultCrumbs: ICrumbsPage[] = [
  {
    icon: ConstaIcons.Lime,
    label: 'Home',
    link: '#',
  },
];

export const buildTree = ({
  referralsTree,
  profileId,
}: IBuildTree): IMappedData => {
  const withClones = (childs: IReferralTree[]) => {
    const rootUserId = referralsTree && referralsTree.user_id;

    if (profileId !== rootUserId) {
      return childs;
    }

    let childsCopy = childs;
    const mainClone = {
      is_clone: true,
      clone_id: referralsTree.id,
      clone_enabled: false,
      children: [],
    };

    const haveNoMain = childs.length === 0;
    const haveOneMain = childs.length === 1;
    const haveAllMain = childs.length === 2; // 2 is max by design, no need in complex loop
    let haveAllOneFilled = false;
    try {
      haveAllOneFilled = childs[0].children.length === 2;
    } catch (e) {
      haveAllOneFilled = false;
    }

    // firstly, create space wrapper for main referal based on array length
    if (haveNoMain) {
      childsCopy = [{ ...mainClone, clone_enabled: true }, mainClone];
    }

    if (haveOneMain) {
      childsCopy = [...childsCopy, { ...mainClone, clone_enabled: true }];
    }

    // then append child clones if < 2 items
    childsCopy = [
      ...childsCopy.map((x, idx) => {
        let clones: any[] = [];
        const clone = { is_clone: true, clone_id: x.id || rootUserId };

        if (x.children && x.children.length === 0) {
          clones = [
            {
              ...clone,
              clone_enabled:
                haveAllMain && (idx === 1 ? haveAllOneFilled : true),
            },
            {
              ...clone,
              clone_enabled:
                haveAllMain && (idx === 1 ? haveAllOneFilled : true),
            },
          ];
        } else if (x.children && x.children.length < 2) {
          clones = [
            {
              ...clone,
              clone_enabled:
                haveAllMain && (idx === 1 ? haveAllOneFilled : true),
            },
          ];
        }
        return {
          ...x,
          children: [...x.children, ...clones],
        };
      }),
    ];

    return childsCopy;
  };

  return {
    root: !isEmpty(referralsTree) ? referralsTree : null,
    childrens: !isEmpty(referralsTree)
      ? withClones(referralsTree.children)
      : [],
    crumbs: [
      ...defaultCrumbs,
      ...(referralsTree.ancestors
        ? referralsTree.ancestors.map((a) => ({
            label: a.username || 'unknown',
            link: `${a.id}` || '#',
          }))
        : []),
      ...[
        {
          label: referralsTree.username || 'unknown',
          link: `${referralsTree.id}` || '#',
          isActive: true,
        },
      ],
    ],
  };
};
