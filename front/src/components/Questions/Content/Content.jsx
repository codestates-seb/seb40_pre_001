import React from 'react';
import TitleBox from '../../@common/TitleBox/TitleBar';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';
// import useGetAllPosts from '../../../hooks/useGetAllPosts';

const Content = ({ data }) => {
  const { title } = data;

  return (
    <div>
      <TitleBox title={title} style={{ width: 1051 }}></TitleBox>
      <S.Status>
        <S.TextBox>
          <span>Asked</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Modified</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Viewed</span>
          <p>10 times</p>
        </S.TextBox>
      </S.Status>
      <M.MainContainer>dd</M.MainContainer>
    </div>
  );
};

export default Content;
