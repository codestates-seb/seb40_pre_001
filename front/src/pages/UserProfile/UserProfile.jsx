import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';
import useGetCurrentUser from '../../hooks/users/useGetCurrentUser';
import Spinner from '../../components/@common/Spinner';

const UserProfile = () => {
  const { currentUser } = useGetCurrentUser();
  const {
    data: userStatus,
    isLoading,
    isSuccess,
  } = useGetUserStatus(currentUser.userId);
  userStatus;

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    return <div></div>;
  }
};

export default UserProfile;

{
  /* <S.Container>
//   <S.ContainerHeader>
//     <S.Userimg />
//     <UserProfileButton />
//     <S.UserContainer>
//       <S.UserName>{currentUser.userNickname}</S.UserName>
//       <CakeIcon />
//       <S.UserAnchor>UserAnchor</S.UserAnchor>
//       <CalendarIcon />
//       <S.UserAnchor>Last seen this week</S.UserAnchor>
//       <ClockIcon />
//       <S.UserAnchor>Visited 3 days, 2 consecutive</S.UserAnchor>
//     </S.UserContainer>
//   </S.ContainerHeader>
//   <UserProfileTab />
//   <S.StatsContainer>
//     <S.ContentsTitle>Status</S.ContentsTitle>
//     <S.ContentsTitle style={{ width: '15%' }}>About</S.ContentsTitle>
//   </S.StatsContainer>
//   <S.UserGridBox>
//     <UserStatsBox userStatus={userStatus} />
//     <UserContents />
//   </S.UserGridBox>
//   <S.ContentsTitle style={{ marginTop: 15 }}>Communities</S.ContentsTitle>
//   <S.AnswersContainer>
//     <UserCommunities />
//     <UserAnswers />
//   </S.AnswersContainer>

//   <div style={{ display: 'flex' }}>
//     <UserAnswersContents />
//     <UserQuestionsContents userId={currentUser.userId} />
//   </div>
// </S.Container> */
}
