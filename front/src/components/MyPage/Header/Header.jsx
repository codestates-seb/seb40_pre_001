import React from 'react';
import * as S from './Header.style';
import TimeAgo from 'react-timeago';

import { CakeIcon, CalendarIcon, ClockIcon } from '../../@common/Icons';

const Header = ({ userNickname, createdAt, modifiedAt }) => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.ImgContainer>
          <img
            src='https://lh3.googleusercontent.com/a/ALm5wu3EWjkqUDmkT6EaI1243TbGq1C0EDAUpTditQEP=k-s256'
            alt='avatar'
            width='128'
            height='128'
          />
        </S.ImgContainer>
        <S.UserInfoContainer>
          <S.NameContainer>
            <span>{userNickname || 'Anonymous'}</span>
          </S.NameContainer>
          <S.UserInfoBox>
            <S.Li>
              <CakeIcon />
              Member for <TimeAgo className='timeago' date={createdAt} />
            </S.Li>

            <S.Li>
              <ClockIcon />
              <span>Last seen this week </span>
            </S.Li>

            <S.Li>
              <CalendarIcon />
              Visited
              <TimeAgo className='timeago' date={modifiedAt}>
                {' '}
              </TimeAgo>
            </S.Li>
          </S.UserInfoBox>
        </S.UserInfoContainer>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
