import React from 'react';
import * as M from '../Questions.style';
import EditPost from '../../../components/Edit/EditPost';

const EditPostPage = () => {
  return (
    <M.ContentWrapper>
      <M.MainContainer>
        <EditPost />
      </M.MainContainer>
    </M.ContentWrapper>
  );
};

export default EditPostPage;
