import React from 'react';

import CustomLink from '../../Link';
import { GlobeIcon, InfoIcon, StarIcon } from '../../Icons';
import * as S from './Sidebar.style';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { SIDEBAR_LIST } from '../../../../constants';

const HeaderText = styled.p`
  margin: 16px 0 8px 8px;
  font-size: 11px;
  color: 'hsl(210,8%,45%)';
`;

const SideBarTop = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <S.Ol>
        <HeaderText style={{ fontSize: 13 }}>Home</HeaderText>
        <div>
          <HeaderText>PUBLIC</HeaderText>

          {SIDEBAR_LIST.map(({ name, path }) => {
            return (
              <S.Li key={name}>
                <CustomLink
                  path={path}
                  className={pathname === path && 'active'}
                >
                  {name === 'Questions' ? (
                    <S.PageLinkContainer>
                      <GlobeIcon
                        className='icon'
                        style={{ marginTop: -1, marginRight: 4 }}
                      />
                      {name}
                    </S.PageLinkContainer>
                  ) : (
                    <S.PageLinkContainer style={{ paddingLeft: 25 }}>
                      <>{name}</>
                    </S.PageLinkContainer>
                  )}
                </CustomLink>
              </S.Li>
            );
          })}
          <S.CollectiveBox>
            <HeaderText>COLLECTIVES</HeaderText>
            <InfoIcon style={{ marginRight: 8, marginTop: 17 }} />
          </S.CollectiveBox>
          <S.Li style={{ marginTop: 15 }}>
            <CustomLink>
              <S.PageLinkContainer style={{ marginTop: -20 }}>
                <StarIcon style={{ marginRight: 3 }} />
                Explorer Collectives
              </S.PageLinkContainer>
            </CustomLink>
          </S.Li>
        </div>
      </S.Ol>
    </nav>
  );
};

export default SideBarTop;
