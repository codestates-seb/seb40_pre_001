import React from 'react';
import * as S from './YellowBox.style';
import { OVERVIEW_BLOG, FEATURED_ON_META } from '../../../../../../constants';

const YellowBox = () => {
  return (
    <S.Container>
      <S.Title>The Overflow Blog</S.Title>
      {OVERVIEW_BLOG.map(({ icon, content }, i) => {
        return (
          <S.Items key={i}>
            {icon}
            <S.TextBox>
              <a path='https://stackoverflow.blog/2022/10/25/goodbye-webpack-hello-turbopack-the-big-news-from-todays-next-js-conference/?cb=1'>
                {content}
              </a>
            </S.TextBox>
          </S.Items>
        );
      })}
      <S.Title>Featured on Meta</S.Title>
      {FEATURED_ON_META.map(({ icon, content }, i) => {
        return (
          <S.Items key={i + 1}>
            {icon}
            <S.TextBox>
              <a href='https://meta.stackexchange.com/questions/383022/the-2022-community-a-thon-has-begun?cb=1'>
                {content}
              </a>
            </S.TextBox>
          </S.Items>
        );
      })}
    </S.Container>
  );
};

export default YellowBox;
