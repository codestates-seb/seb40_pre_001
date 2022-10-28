import React from 'react';
import * as S from './Collectives.style';
import { COLLECTIVE_DETAILS } from '../../../../../../constants';

const Collectives = () => {
  return (
    <S.Container>
      <S.Header>
        <a>see all</a>
        Collectives
      </S.Header>
      {COLLECTIVE_DETAILS.map(({ title, members, desc, icon }) => {
        return (
          <S.ContentContainer key={title}>
            <S.ContentHeader>
              <S.ContentFlex>
                <S.ContentFlex>
                  <S.Icon src={icon} />
                </S.ContentFlex>
                <div style={{ position: 'relative', right: 85, bottom: 2 }}>
                  <S.Title>{title}</S.Title>
                  <S.Members>{members}</S.Members>
                </div>
                <div>
                  <S.JoinButton>Join</S.JoinButton>
                </div>
              </S.ContentFlex>
            </S.ContentHeader>
            <S.Desc>{desc}</S.Desc>
          </S.ContentContainer>
        );
      })}
    </S.Container>
  );
};

export default Collectives;
