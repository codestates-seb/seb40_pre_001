import React from 'react';
import TimeAgo from 'react-timeago';
import useGetUserById from '../../../../hooks/users/useGetUserById';
import CustomLink from '../../../@common/Link';
import * as S from './Post.style';

const UserCard = ({ id, createdAt }) => {
  const { data } = useGetUserById(id);

  return (
    <S.DetailRight>
      <S.UserCard>
        <S.UserCardLink>
          <CustomLink path={`/users/${id}/${data?.userNickname}`}>
            {data?.userNickname}
          </CustomLink>
        </S.UserCardLink>
        <S.UserPostCount>13</S.UserPostCount>
      </S.UserCard>
      <S.TimeBox>
        <span>
          asked{' '}
          <TimeAgo date={createdAt} style={{ color: 'hsl(210, 8%, 45%)' }} />
        </span>
      </S.TimeBox>
    </S.DetailRight>
  );
};

export default UserCard;
