import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../apis/questions';

const usePost = (queryKey, path) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((Post) => createPost(Post), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      navigate(path);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePost;
