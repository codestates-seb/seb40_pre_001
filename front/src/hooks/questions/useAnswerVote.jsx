import { useMutation, useQueryClient } from '@tanstack/react-query';
import { answerDownVote, answerUpVote } from '../../apis/questions';
import useGetCurrentUser from '../users/useGetCurrentUser';

const useAnswerUpVote = () => {
  const { currentUser } = useGetCurrentUser();

  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ questionId, answerId, userId }) =>
      answerUpVote(questionId, answerId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
      onError: () => {
        if (!currentUser) {
          alert('로그인을 해주시기 바랍니다.');
          return;
        }
      },
    },
  );

  const handleVoteCount = (questionId, answerId, userId) =>
    mutate({ questionId, answerId, userId });

  return { handleVoteCount, status };
};

const useAnswerDownVote = () => {
  const { currentUser } = useGetCurrentUser();

  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ questionId, answerId, userId }) =>
      answerDownVote(questionId, answerId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
      onError: () => {
        if (!currentUser) {
          alert('로그인을 해주시기 바랍니다.');
          return;
        }
      },
    },
  );

  const handleVoteCount = (questionId, answerId, userId) =>
    mutate({ questionId, answerId, userId });

  return { handleVoteCount, status };
};

export { useAnswerUpVote, useAnswerDownVote };
