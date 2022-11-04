import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../apis/questions';
import { ROUTES } from '../../constants';

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, status } = useMutation(
    ({ id, userId }) => deletePost(id, userId),
    {
      onMutate: async ({ newStatus }) => {
        await queryClient.cancelQueries(['questions']);

        const previousStatus = queryClient.getQueryData(['questions']);

        if (previousStatus) {
          queryClient.setQueryData(['questions'], (old) => [...old, newStatus]);
        }

        return { previousStatus };
      },
      onError: (err, variables, context) => {
        if (context?.previousStatus) {
          // error 를 만났을 경우 onMutate에서 반환된 값으로 다시 롤백시켜준다.
          queryClient.setQueryData(['questions'], context.previousStatus);
        }
      },
      onSettled: () => queryClient.invalidateQueries(['questions']),
    },
  );

  const handleDelete = (id, userId) => {
    mutate({ id, userId });
    navigate(ROUTES.QUESTIONS.path);
  };

  return { handleDelete, status };
};

export default useDeletePost;
