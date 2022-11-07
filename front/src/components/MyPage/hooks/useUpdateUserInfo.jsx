import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserInfo } from '../../../apis/users';

const emailValidation = (input) => {
  let isValid = false;
  if (
    input
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  ) {
    isValid = true;
  }

  return isValid;
};

const useUpdateUserEmail = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['allUsers'],
    ({ userId, email }) => updateUserInfo(userId, email),
    {
      onSuccess: () => queryClient.invalidateQueries(['allUsers']),
      onError: () => {},
    },
  );

  const handleUpdateEmail = (userId, email) => mutate({ userId, email });

  return { handleUpdateEmail, status };
};

const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['userById'],
    ({ userId, newInfo }) => updateUserInfo(userId, newInfo),
    {
      onSuccess: () => queryClient.invalidateQueries(['userById']),
      onError: () => {},
    },
  );

  const handleUpdateInfo = (userId, newInfo) => mutate({ userId, newInfo });

  return { handleUpdateInfo, status };
};

export { useUpdateUserInfo, useUpdateUserEmail, emailValidation };
