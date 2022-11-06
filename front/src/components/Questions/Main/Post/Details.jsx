import React from 'react';
// import { useRecoilState } from 'recoil';
// import pagesState from '../../../../store/pagesState';
// import TimeAgo from 'react-timeago';
// import TagButton from '../../../@common/Buttons/Tag';
// import CustomLink from '../../../@common/Link';

// import * as S from './Post.style';
// import { TextViewer } from '../../../@common/TextEditor/TextEditor';
// import useUpdateStatus from '../../../../hooks/questions/useUpdateStatus';
// import { getUserById } from '../../../../apis/users';

const PostDetails = ({ data }) => {
  data;
  //   const [state, setCurrentContentId] = useRecoilState(pagesState);
  //     const {
  //       questionTitle,
  //       context,
  //       createdAt,
  //       questionId,
  //       viewCount,
  //       voteCount,
  //     } = data;

  //     const status = { viewCount, voteCount, answers: 2 };
  //     const questionTagList = ['javascript', 'java', 'python'];
  //     const author = getUserById(id)?.userNickname;
  //     const { handleStatus } = useUpdateStatus();
  //     return (
  //       <S.BoxRight>
  //         <S.Title
  //           onClick={() => {
  //             setCurrentContentId({
  //               ...state,
  //               currentContentId: questionId,
  //             });
  //             handleStatus(questionId, { ...status, views: status?.views + 1 });
  //           }}
  //         >
  //           <CustomLink path={`/questions/${questionId}`}>
  //             {questionTitle}
  //           </CustomLink>
  //         </S.Title>
  //         <TextViewer initialValue={context.replace(/<[^>]+>/g, '')} />
  //         {/* Tag Box */}
  //         <S.ExtraDetailsBox>
  //           <S.TagBox>
  //             <ul>
  //               <li>
  //                 {questionTagList.map((tag) => {
  //                   return <TagButton key={tag} content={tag} />;
  //                 })}
  //               </li>
  //             </ul>
  //           </S.TagBox>
  //           {/* User Box */}
  //           <S.DetailRight>
  //             <S.UserCard>
  //               <S.UserCardLink>
  //                 <a href='/users/17314281/user17314281'>{author}</a>
  //               </S.UserCardLink>
  //               <S.UserPostCount>13</S.UserPostCount>
  //             </S.UserCard>
  //             <S.TimeBox>
  //               <span>
  //                 asked{' '}
  //                 <TimeAgo
  //                   date={createdAt}
  //                   style={{ color: 'hsl(210, 8%, 45%)' }}
  //                 />
  //               </span>
  //             </S.TimeBox>
  //           </S.DetailRight>
  //         </S.ExtraDetailsBox>
  //       </S.BoxRight>
  //     );

  return <div></div>;
};

export default PostDetails;
