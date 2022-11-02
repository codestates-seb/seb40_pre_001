import React from 'react';
import * as S from './UserInfo.style';

const UserInfo = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TimeContainer>
          asked <span>1 min ago</span>
        </S.TimeContainer>
        <S.UserBox>
          <a>
            <div>
              <img
                src='https://lh3.googleusercontent.com/a/AATXAJzt9UEAVbgkJikn0eoxPlTjnkAVLQoLKITEp_hz=k-s64'
                alt="Christopher Fernandez's user avatar"
                width='32'
                height='32'
              />
            </div>
          </a>
          <S.UserDetails>
            <a>Christopher Fernandez</a>
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
