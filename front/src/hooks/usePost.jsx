import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createPost, deletePost } from '../apis/questions';

const useCreatePost = (queryKey, path) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((Post) => createPost(Post), {
    onSuccess: () => {
      // Query key 를 무효화 시켜준다 => 렌더링이 일어남 => 따로 렌더링 시켜주는 로직이 필요 없음
      queryClient.invalidateQueries([queryKey]);
      // 성공시에 페이지 리다이렉션 to path
      navigate(path);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

const useDeletePost = (queryKey, path) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((id) => deletePost(id), {
    onSuccess: () => {
      navigate(path);
      return queryClient.invalidateQueries([queryKey]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export { useCreatePost, useDeletePost };
