import React, { useRef } from 'react';
import * as S from './Edit.style';

import UnnamedCard from '../../../assets/unnamedCard.png';
import StyledButton from '../../@common/Buttons/Button';
import { useUpdateUserInfo } from '../hooks/useUpdateUserInfo';
import { useParams } from 'react-router-dom';
import useGetUserById from '../../../hooks/users/useGetUserById';
import useGetCurrentUser from '../../../hooks/users/useGetCurrentUser';

const UserEdit = () => {
  const { userId } = useParams();
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const userNicknameRef = useRef(null);
  const { currentUser } = useGetCurrentUser();
  const { data, isSuccess } = useGetUserById(userId);
  const { handleUpdateInfo } = useUpdateUserInfo();

  if (isSuccess) {
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
          <S.Input
            ref={emailRef}
            name='email'
            defaultValue={data.email}
            disabled
          />

          <S.Label htmlFor='userNickname'>Nickname</S.Label>
          <S.Input
            ref={userNicknameRef}
            name='userNickname'
            defaultValue={data.userNickname}
            disabled={Number(userId) !== currentUser.userId}
          />

          <S.Label htmlFor='address'>Address</S.Label>
          <S.Input
            ref={addressRef}
            name='address'
            defaultValue={data.address}
            disabled={Number(userId) !== currentUser.userId}
          />
        </S.PIContainer>
        {currentUser.userId === Number(userId) && (
          <StyledButton
            content='Save profile'
            onClick={() => {
              if (!addressRef.current.value || !userNicknameRef.current.value) {
                return;
              }

              handleUpdateInfo(userId, {
                address: addressRef.current.value,
                userNickname: userNicknameRef.current.value,
              });
            }}
            disabled={Number(userId) !== currentUser.userId}
          />
        )}
      </S.EditContainer>
    );
  }
};

export default UserEdit;
