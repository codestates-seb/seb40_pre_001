import React, { useRef } from 'react';
import * as S from './Edit.style';

import UnnamedCard from '../../../assets/unnamedCard.png';
import StyledButton from '../../@common/Buttons/Button';
import useGetCurrentUser from '../../../hooks/users/useGetCurrentUser';

const UserEdit = () => {
  const { currentUser, isSuccess } = useGetCurrentUser();
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const descriptionRef = useRef(null);

  if (isSuccess) {
    const { email, address, description } = currentUser;
    return (
      <S.EditContainer>
        <S.TitleContainer>
          <S.Title>Edit your profile</S.Title>
        </S.TitleContainer>

        <S.PIText>Public information</S.PIText>

        <S.PIContainer>
          <S.Label htmlFor='img'>Profile Image</S.Label>
          <img name='img' src={UnnamedCard} width={164} height={164} alt='' />

          <S.Label htmlFor='email'>email</S.Label>
          <S.Input ref={emailRef} name='email' defaultValue={email} />

          <S.Label htmlFor='address'>address</S.Label>
          <S.Input ref={addressRef} name='address' defaultValue={address} />

          <S.Label htmlFor='description'>description</S.Label>
          <S.Input
            ref={descriptionRef}
            name='description'
            defaultValue={description}
          />
        </S.PIContainer>

        <StyledButton content='Save profile' />
      </S.EditContainer>
    );
  }
};

export default UserEdit;
