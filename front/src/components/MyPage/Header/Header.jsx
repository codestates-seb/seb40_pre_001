import React from 'react';
import * as S from './Header.style';
import TimeAgo from 'react-timeago';

import {
  CakeIcon,
  CalendarIcon,
  ClockIcon,
  PencilIcon,
} from '../../@common/Icons';
import HeaderButton from './Button';
import CustomLink from '../../@common/Link';
import { useParams } from 'react-router-dom';
import UserCard from '../../../assets/unnamedCard.png';

const Header = ({ currentUser, userNickname, createdAt, modifiedAt }) => {
  const { userId } = useParams();

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.ImgContainer>
          <img src={UserCard} alt='avatar' width='128' height='128' />
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
              <TimeAgo className='timeago' date={modifiedAt} />
            </S.Li>
          </S.UserInfoBox>
        </S.UserInfoContainer>
        {!currentUser && (
          <CustomLink path={`/users/edit/${userId}/${userNickname}`}>
            <HeaderButton
              icon={
                <PencilIcon
                  fill='hsl(210,8%,45%)'
                  width='20'
                  height='13'
                  style={{ marginRight: 5 }}
                />
              }
              content='Edit Profile'
            />
          </CustomLink>
        )}
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
