import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePostComment } from '../../../../../apis/questions';

const useDeletePostComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById', 'post-comments'],
    ({ postCommentId, userId }) => deletePostComment(postCommentId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['post-comments']),
    },
  );

  const handleDelete = (postCommentId, userId) => {
    if (confirm('정말 삭제하시겠습니까 ?')) {
      mutate({ postCommentId, userId });
    }
  };

  return { handleDelete, status };
};

export default useDeletePostComment;
