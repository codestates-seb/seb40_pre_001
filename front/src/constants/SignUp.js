import React from 'react';
import {
  LabelIcon,
  QuestionIcon,
  TrophyIcon,
  UpDownIcon,
} from '../components/@common/Icons/index';

const SIGNUP_INTRO = Object.freeze([
  { SCRIPT: 'Get unstuck — ask a question', ICON: <QuestionIcon /> },
  {
    SCRIPT: 'Unlock new privileges like voting and commenting',
    ICON: <UpDownIcon />,
  },
  { SCRIPT: 'Save your favorite tags, filters, and jobs', ICON: <LabelIcon /> },
  { SCRIPT: 'Earn reputation and badges', ICON: <TrophyIcon /> },
]);

export default SIGNUP_INTRO;
