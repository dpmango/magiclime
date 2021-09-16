import React from 'react';
import { IReferralTree } from 'types/interfaces/referrals';

export interface ICrumbsPage {
  icon?: React.FC;
  link: string;
  label: string;
  isActive?: boolean;
}

export interface IBuildTree {
  referralsTree: IReferralTree;
  profileId: number;
}

export interface IMappedData {
  root: IReferralTree | null;
  childrens: IReferralTree[];
  crumbs: ICrumbsPage[];
}

export interface IModalProps {
  opened: boolean;
  id: number;
}
