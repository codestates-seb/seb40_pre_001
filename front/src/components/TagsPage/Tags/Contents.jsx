import React from 'react';
import * as S from './Contents.style';
import TagButton from '../../@common/Buttons/Tag';
import TagsInfo from '../TagsInfo/TagsInfo';

const Contents = ({ tagName, tagDescription, usedTagCnt }) => {
  return (
    <S.Container>
      <div>
        <TagButton content={tagName} />
      </div>
      <span style={{ fontSize: 13, marginTop: 12, marginBottom: 12 }}>
        {tagDescription}
      </span>
      {/* <p>{tags.tagId}</p>
      <p>{tags.name}</p>
      <p>{tags.tagDescription}</p>
      <p>{tags.usedTagCnt}</p> */}
      <TagsInfo usedTagCnt={usedTagCnt} />
    </S.Container>
  );
};

export default Contents;
