import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postDownVote, postUpVote } from '../../apis/questions';
import useGetCurrentUser from '../users/useGetCurrentUser';

const usePostUpVote = () => {
  const { currentUser } = useGetCurrentUser();
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ questionId, userId }) => postUpVote(questionId, userId),
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

  const handleVoteCount = (questionId, userId) =>
    mutate({ questionId, userId });

  return { handleVoteCount, status };
};

const usePostDownVote = () => {
  const { currentUser } = useGetCurrentUser();
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ questionId, userId }) => postDownVote(questionId, userId),
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

  const handleVoteCount = (questionId, userId) =>
    mutate({ questionId, userId });

  return { handleVoteCount, status };
};

export { usePostUpVote, usePostDownVote };
