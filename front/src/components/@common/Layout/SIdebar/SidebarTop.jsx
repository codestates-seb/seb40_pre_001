import React from 'react';

import CustomLink from '../../Link';
import { GlobeIcon, InfoIcon, StarIcon } from '../../Icons';
import * as S from './Sidebar.style';

const SideBarTop = () => {
  return (
    <nav>
      <S.Ol>
        <S.Li>
          <CustomLink path='/'>Home</CustomLink>
        </S.Li>
        <S.Li>
          <S.Ol>
            <li
              style={{
                margin: '16px 0 4px 8px',
                fontSize: 11,
                color: 'hsl(210,8%,45%)',
              }}
            >
              PUBLIC
            </li>
            <S.Li>
              <CustomLink className='active'>
                <S.PageLinkContainer>
                  <GlobeIcon
                    className='icon'
                    style={{ marginTop: -1, marginRight: 4 }}
                  />
                  Questions
                </S.PageLinkContainer>
              </CustomLink>
            </S.Li>
            <S.Li>
              <CustomLink>
                <S.PageLinkContainer style={{ paddingLeft: 25 }}>
                  Tags
                </S.PageLinkContainer>
              </CustomLink>
            </S.Li>
            <S.Li>
              <CustomLink>
                <S.PageLinkContainer style={{ paddingLeft: 25 }}>
                  Users
                </S.PageLinkContainer>
              </CustomLink>
            </S.Li>
            <S.Li>
              <CustomLink>
                <S.PageLinkContainer style={{ paddingLeft: 25 }}>
                  Companies
                </S.PageLinkContainer>
              </CustomLink>
            </S.Li>
            <li
              style={{
                display: 'flex',
                margin: '16px 0 4px 8px',
                fontSize: 13,
                color: 'hsl(210,8%,45%)',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ color: 'hsl(210,8%,45%)', fontSize: 11 }}>
                COLLECTIVES
              </div>
              <div>
                <a role='button' aria-controls='popover-discover-collectives'>
                  <InfoIcon style={{ marginRight: 8, marginTop: 5 }} />
                </a>
              </div>
            </li>
            <S.Li style={{ marginTop: 15 }}>
              <CustomLink>
                <S.PageLinkContainer style={{ marginTop: -20 }}>
                  <StarIcon style={{ marginRight: 3 }} />
                  Explorer Collectives
                </S.PageLinkContainer>
              </CustomLink>
            </S.Li>
          </S.Ol>
        </S.Li>
      </S.Ol>
    </nav>
  );
};

export default SideBarTop;
