import React from 'react';
import { Outlet } from 'react-router-dom';
import { SmallLogoIcon } from '../../@common/Icons';
import FooterContent from './Content/Content';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.LogoContainer>
          <SmallLogoIcon />
        </S.LogoContainer>
        <FooterContent />
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
