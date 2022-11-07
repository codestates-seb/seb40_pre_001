import React from 'react';

import EditAnswer from '../../../components/Edit/EditAnswer';

import * as M from '../Questions.style';

const EditAnswerPage = () => {
  return (
    <M.ContentWrapper>
      <M.MainContainer>
        <EditAnswer />
      </M.MainContainer>
    </M.ContentWrapper>
  );
};

export default EditAnswerPage;
