import React from 'react';
import * as S from './Tagsinfo.style';
const TagsInfo = ({ usedTagCnt }) => {
  return (
    <S.Container>
      <div style={{ color: 'gray' }}>2441089 questions</div>
      <div style={{ color: 'gray' }}>
        {usedTagCnt} asked today, 4043 this week
      </div>
    </S.Container>
  );
};

export default TagsInfo;
