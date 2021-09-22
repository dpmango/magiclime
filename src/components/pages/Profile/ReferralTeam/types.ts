import React from 'react';
import { IReferralTeam } from 'types/interfaces/referrals';

export interface IRequestPayload {
  id?: number | string;
}
export interface ICrumbsPage {
  icon?: React.FC;
  link: string;
  label: string;
  isActive?: boolean;
}

export interface IBuildTree {
  teamTree: IReferralTeam;
}

export interface IMappedData {
  root: IReferralTeam | null;
  children: IReferralTeam[];
  crumbs: ICrumbsPage[];
}

export interface IModalProps {
  opened: boolean;
  id: number;
}
