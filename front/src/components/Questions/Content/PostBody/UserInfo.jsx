import React from 'react';
import TimeAgo from 'react-timeago';
import * as S from './UserInfo.style';
import UnnamedCard from '../../../../assets/unnamedCard.png';

const UserInfo = ({ type, author, createdAt, isAuthor }) => {
  return (
    <S.Wrapper isAuthor={isAuthor}>
      <S.Container>
        <S.TimeContainer>
          {type === 'post' ? 'asked' : 'answered'}{' '}
          <TimeAgo date={createdAt} style={{ color: 'hsl(210, 8%, 45%)' }} />
        </S.TimeContainer>
        <S.UserBox>
          <a>
            <div>
              <img src={UnnamedCard} alt='user avatar' width='32' height='32' />
            </div>
          </a>
          <S.UserDetails>
            <a>{author}</a>
            <div>
              <span>5 bronze badges</span>
            </div>
          </S.UserDetails>
        </S.UserBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default UserInfo;
