import React from 'react';
import TimeAgo from 'react-timeago';
import TitleBox from '../../@common/TitleBox/TitleBar';

import * as S from './Content.style';
import useGetAllPosts from '../../../hooks/questions/useGetAllPosts';
import { useParams } from 'react-router-dom';

const Header = () => {
  const { id } = useParams();
  const { data, status } = useGetAllPosts((data) =>
    data.find((content) => content.questionId === Number(id)),
  );

  return status === 'success' ? (
    <>
      <TitleBox title={data.questionTitle} style={{ width: 1051 }} />
      <S.Status>
        <S.TextBox>
          <span>Asked</span>
          <TimeAgo
            date={data?.createdAt}
            style={{ color: 'hsl(210, 8%, 15%)', fontSize: 13 }}
          />
          {/* <p>today</p> */}
        </S.TextBox>
        <S.TextBox>
          <span>Modified</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Viewed</span>
          <p>{data?.status?.views} times</p>
        </S.TextBox>
      </S.Status>
    </>
  ) : (
    <div>loading...</div>
  );
};

export default Header;
