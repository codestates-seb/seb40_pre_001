import React from 'react';
import * as S from './UserInfo.style';
import UserCard from '../../../assets/unnamedCard.png';
import UserCard2 from '../../../assets/unnamed.png';
import { TagButton } from '../../@common/Buttons';
import TimeAgo from 'react-timeago';
import CustomLink from '../../@common/Link';

const UserInfo = ({ data }) => {
  const { userNickname, email, userId, createdAt } = data;

  const tags = [
    'javascript',
    'python',
    'java',
    'spring',
    'Ruby',
    'go',
    'Vue',
    'React',
    'swift',
    'Mac',
    'ios',
    'Node.js',
    'Next.js',
    'sql',
    'php',
    'arrays',
    'c',
    'r',
    'asp.net',
    'ubuntu',
    'window',
    'sql-server',
    'ajax',
    'linux',
  ];

  const getRandomNumber = () => Math.floor(Math.random() * tags.length) + 1;

  return (
    <S.UserInfoContainer>
      <S.UserInfoProfile
        src={Number(userId) % 2 === 0 ? UserCard : UserCard2}
      />
      <S.UserDetails>
        <CustomLink path={`/users/${userId}/${userNickname}`}>
          <S.UserInfoName>{userNickname}</S.UserInfoName>
        </CustomLink>
        <S.UserInfoLocation>{email}</S.UserInfoLocation>
        <TimeAgo date={createdAt} />
      </S.UserDetails>
      <S.UsersTagsContainer>
        <TagButton
          content={tags[getRandomNumber()]}
          style={{ maxWidth: 200 }}
        />
        <TagButton
          content={tags[getRandomNumber()]}
          style={{ maxWidth: 200 }}
        />
        <TagButton
          content={tags[getRandomNumber()]}
          style={{ maxWidth: 200 }}
        />
      </S.UsersTagsContainer>
    </S.UserInfoContainer>
  );
};

export default UserInfo;
