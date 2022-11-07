import React, { useRef } from 'react';
import * as S from './Edit.style';

import UnnamedCard from '../../../assets/unnamedCard.png';
import StyledButton from '../../@common/Buttons/Button';
import useGetCurrentUser from '../../../hooks/users/useGetCurrentUser';
import { useUpdateUserInfo } from '../hooks/useUpdateUserInfo';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
  const { userId } = useParams();
  const { currentUser, isSuccess } = useGetCurrentUser();
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const userNicknameRef = useRef(null);

  const { handleUpdateInfo } = useUpdateUserInfo();

  if (isSuccess) {
    const { email, address, userNickname } = currentUser;
    return (
      <S.EditContainer>
        <S.TitleContainer>
          <S.Title>Edit your profile</S.Title>
        </S.TitleContainer>

        <S.PIText>Public information</S.PIText>

        <S.PIContainer>
          <S.Label htmlFor='img'>Profile Image</S.Label>
          <img name='img' src={UnnamedCard} width={164} height={164} alt='' />

          <S.Label htmlFor='email'>Email</S.Label>
          <S.Input ref={emailRef} name='email' defaultValue={email} disabled />

          <S.Label htmlFor='userNickname'>Nickname</S.Label>
          <S.Input
            ref={userNicknameRef}
            name='userNickname'
            defaultValue={userNickname}
          />

          <S.Label htmlFor='address'>Address</S.Label>
          <S.Input ref={addressRef} name='address' defaultValue={address} />
        </S.PIContainer>

        <StyledButton
          content='Save profile'
          onClick={() => {
            handleUpdateInfo(userId, {
              address: addressRef.current.value,
              userNickname: userNicknameRef.current.value,
            });
          }}
        />
      </S.EditContainer>
    );
  }
};

export default UserEdit;
