import React from 'react';
import {
  PencilIcon,
  StackExChangeIcon,
  SmallLogoIcon,
} from '../components/@common/Icons';

export const OVERVIEW_BLOG = [
  {
    icon: <PencilIcon />,
    content:
      ' Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS conference',
  },
  {
    icon: <PencilIcon />,
    content: ' CEO update: Breaking down barriers to unlock innovation',
  },
];

export const FEATURED_ON_META = [
  {
    icon: <StackExChangeIcon />,
    content: 'The 2022 Community-a-thon has begun!',
  },
  {
    icon: <StackExChangeIcon />,
    content: 'Mobile app infrastructure being decommissioned',
  },
  {
    icon: (
      <SmallLogoIcon
        width={16}
        height={16}
        fill1='hsl(210,8%,35%)'
        fill2='hsl(210,8%,60%)'
      />
    ),
    content: 'Staging Ground Workflow: Canned Comments',
  },
  {
    icon: (
      <SmallLogoIcon
        width={16}
        height={16}
        fill1='hsl(210,8%,35%)'
        fill2='hsl(210,8%,60%)'
      />
    ),
    content: 'The Ask Wizard (2022) has graduated',
  },
];
