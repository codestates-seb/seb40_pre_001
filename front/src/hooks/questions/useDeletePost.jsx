import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../apis/questions';
import { ROUTES } from '../../constants';

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, status } = useMutation(
    ['questions'],
    ({ id, userId }) => deletePost(id, userId),
    {
      onSuccess: () => (
        queryClient.invalidateQueries(['questions']),
        navigate(ROUTES.QUESTIONS.path)
      ),
    },
  );

  const handleDelete = (id, userId) => {
    mutate({ id, userId });
  };

  return { handleDelete, status };
};

export default useDeletePost;
