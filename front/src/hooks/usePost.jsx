import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../apis/questions';

const usePost = (queryKey, path) => {
  //key 값이 바뀌지 않아도 변경되게 해준다
  const queryClient = useQueryClient();
  //양식이 제출되거나 event 발생시 url 조작 > question 페이지 리다이렉션
  const navigate = useNavigate();

  return useMutation((Post) => createPost(Post), {
    onSuccess: () => {
      // Query key 를 무효화 시켜준다 => 렌더링이 일어남 => 따로 렌더링 시켜주는 로직이 필요 없음
      queryClient.invalidateQueries([queryKey]);
      // 성공시에 페이지 리다이렉션 to path
      navigate(path);
      console.log();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePost;
