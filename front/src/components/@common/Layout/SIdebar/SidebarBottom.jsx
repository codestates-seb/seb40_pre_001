import React from 'react';

import * as S from './Sidebar.style';

const SidebarBottom = () => {
  return (
    <S.Ol>
      <S.Li>
        <li
          style={{
            margin: '16px 0 8px 8px',
            fontSize: 11,
            color: 'hsl(210,8%,45%)',
          }}
        >
          TEAMS
        </li>
        <S.TeamsContainer>
          <strong>Stack Overflow for Teams</strong>
          – Start collaborating and sharing organizational knowledge.
          <img
            width='139'
            height='114'
            src='https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e'
            alt=''
          />
          <a href='https://try.stackoverflow.co/why-teams/?utm_source=so-owned&amp;utm_medium=side-bar&amp;utm_campaign=campaign-38&amp;utm_content=cta'>
            Create a free Team
          </a>
          <a href='https://stackoverflow.co/teams'>Why Teams?</a>
        </S.TeamsContainer>
      </S.Li>
    </S.Ol>
  );
};

export default SidebarBottom;
