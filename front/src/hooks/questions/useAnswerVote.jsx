import { useMutation, useQueryClient } from '@tanstack/react-query';
import { answerDownVote, answerUpVote } from '../../apis/questions';

const useAnswerUpVote = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['questions', 'postById'],
    ({ questionId, answerId, userId }) =>
      answerUpVote(questionId, answerId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
    },
  );

  const handleVoteCount = (questionId, answerId, userId) =>
    mutate({ questionId, answerId, userId });

  return { handleVoteCount, status };
};

const useAnswerDownVote = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['questions', 'postById'],
    ({ questionId, answerId, userId }) =>
      answerDownVote(questionId, answerId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
    },
  );

  const handleVoteCount = (questionId, answerId, userId) =>
    mutate({ questionId, answerId, userId });

  return { handleVoteCount, status };
};

export { useAnswerUpVote, useAnswerDownVote };
