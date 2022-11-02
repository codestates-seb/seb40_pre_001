import React from 'react';
import { NotFoundIcon } from '../../components/@common/Icons';
import { SmallBlueSpan } from '../../components/@common/Text/Text.style';
import * as S from './404.style';
import { Nav } from '../../components/@Layout';

const NotFound = () => {
  return (
    <>
      <Nav />
      <S.Wrapper>
        <S.Container>
          <S.IconContainer>
            <NotFoundIcon />
          </S.IconContainer>
          <S.Content>
            <S.Header>Page not found</S.Header>
            <S.SubHeading>{`We're sorry, we couldn't find the page you requested.`}</S.SubHeading>
            <S.ContentBody>
              <p>
                Try{' '}
                <SmallBlueSpan>searching for similar questions</SmallBlueSpan>
              </p>
              <p>
                Browse our <SmallBlueSpan>recent questions</SmallBlueSpan>
              </p>
              <p>
                Browse our <SmallBlueSpan>popular tags</SmallBlueSpan>
              </p>
              <p>
                If you feel something is missing that should be here,{' '}
                <SmallBlueSpan>contact us</SmallBlueSpan>.
              </p>
            </S.ContentBody>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default NotFound;
