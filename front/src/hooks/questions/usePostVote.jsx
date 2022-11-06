import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postDownVote, postUpVote } from '../../apis/questions';

const usePostUpVote = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ questionId, userId }) => postUpVote(questionId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
    },
  );

  const handleVoteCount = (questionId, userId) =>
    mutate({ questionId, userId });

  return { handleVoteCount, status };
};

const usePostDownVote = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ questionId, userId }) => postDownVote(questionId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
    },
  );

  const handleVoteCount = (questionId, userId) =>
    mutate({ questionId, userId });

  return { handleVoteCount, status };
};

export { usePostUpVote, usePostDownVote };
