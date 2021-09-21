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

export const buildTree = ({ referralsTree }: IBuildTree): IMappedData => {
  return {
    root: !isEmpty(referralsTree) ? referralsTree : null,
    childrens: !isEmpty(referralsTree) ? referralsTree.children : [],
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
