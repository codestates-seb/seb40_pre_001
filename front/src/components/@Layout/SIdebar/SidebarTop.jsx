import React from 'react';

import CustomLink from '../../@common/Link';
import { GlobeIcon, InfoIcon, StarIcon } from '../../@common/Icons';
import * as S from './Sidebar.style';
import { useLocation } from 'react-router-dom';
import { SIDEBAR_LIST } from '../../../constants';

const SideBarTop = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <S.Ol>
        <CustomLink path='/questions'>
          <S.HeaderText>Home</S.HeaderText>
        </CustomLink>
        <div>
          <S.HeaderText style={{ fontSize: 11 }}>PUBLIC</S.HeaderText>
          {SIDEBAR_LIST.map(({ name, path }) => {
            return (
              <S.Li key={name}>
                <CustomLink
                  path={path}
                  className={pathname.includes(path) && 'active'}
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
            <S.HeaderText>COLLECTIVES</S.HeaderText>
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
