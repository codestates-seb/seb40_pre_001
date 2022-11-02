import React from 'react';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../../@common/Icons';
import * as S from './PostBody.style';
// import { useRecoilValue } from 'recoil';
// import pagesState from '../../../../store/pagesState';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { patchMethod } from '../../../../apis/questions';
// import useGetAllPosts from '../../../../hooks/questions/useGetAllPosts';

const LeftBox = () => {
  // useParams 사용시에 contentId 저장이 필요없음
  // const { data, isSuccess } = useGetAllPosts((data) => {
  //   return data.find((qu) => qu.contentId === 1);
  // });

  // const queryClient = useQueryClient();
  // const { currentContentId } = useRecoilValue(pagesState);

  // const upVote = useMutation(({ id, status }) => patchMethod(id, status), {
  //   onSuccess: () => {
  //     console.log('success');

  //     queryClient.invalidateQueries(['questions']);
  //   },
  //   retry: 1,
  // });

  return (
    <S.LeftBox>
      <S.VotingContainer>
        <S.IconContainer
        // onClick={() => {
        //   upVote.mutate({
        //     id: currentContentId,
        //     status: {
        //       ...data?.status,
        //       votes: data?.status?.votes + 1,
        //     },
        //   });
        // }}
        >
          <ArrowIcon direction='up' />
        </S.IconContainer>
        <S.VoteCount>
          <span>10</span>
          {/* {isSuccess && <span>{data?.status?.votes}</span>} */}
        </S.VoteCount>
        <S.IconContainer>
          <ArrowIcon direction='down' />
        </S.IconContainer>
        <SaveIcon style={{ margin: '10px 0 10px 12px' }} />
        <HistoryIcon style={{ margin: '3px 0 0 11px' }} />
      </S.VotingContainer>
    </S.LeftBox>
  );
};

export default LeftBox;
