import React from 'react';
import TitleBox from '../../@common/TitleBox/TitleBar';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';
import Widget from '../Widget/Widget';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../@common/Icons';
// import useGetAllPosts from '../../../hooks/useGetAllPosts';

const Content = ({ data }) => {
  const { title } = data;

  return (
    <div>
      <TitleBox title={title} style={{ width: 1051 }} />
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
      <M.MainContainer>
        {/* Image Box */}
        <S.ImgContainer>
          <img
            src='https://tpc.googlesyndication.com/simgad/10582817586221403560'
            border='0'
            width='728'
            height='90'
            alt=''
          />
        </S.ImgContainer>
        {/* Left box */}
        <S.PostLayout>
          <S.LeftBox>
            <S.VotingContainer>
              <S.IconContainer>
                <ArrowIcon direction='up' />
              </S.IconContainer>
              <S.VoteCount>
                <span>0</span>
              </S.VoteCount>
              <S.IconContainer>
                <ArrowIcon direction='down' />
              </S.IconContainer>
              <SaveIcon style={{ margin: '10px 0 10px 12px' }} />
              <HistoryIcon style={{ margin: '3px 0 0 11px' }} />
            </S.VotingContainer>
          </S.LeftBox>
          <S.RightBox>
            <S.PostBody />
            <S.TagBox>
              <div>태그</div>
            </S.TagBox>
            <S.BottomBox>
              <S.FeatureBox>
                <S.FeatureLeft>
                  <a style={{ margin: 0 }}>Share</a>
                  <a>Edit</a>
                  <a>Follow</a>
                </S.FeatureLeft>
              </S.FeatureBox>
            </S.BottomBox>
          </S.RightBox>
        </S.PostLayout>
      </M.MainContainer>
      <Widget />
    </div>
  );
};

export default Content;
