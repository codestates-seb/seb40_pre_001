import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchMethod } from '../../apis/questions';

const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, status }) => patchMethod(id, status), {
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
    onSettled: () => {
      queryClient.invalidateQueries(['questions']);
    },
  });
};

export default useUpdateStatus;
