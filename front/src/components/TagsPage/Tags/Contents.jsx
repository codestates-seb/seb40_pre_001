import React from 'react';
import * as S from './Contents.style';
import TagButton from '../../@common/Buttons/Tag';
import TagsInfo from '../TagsInfo/TagsInfo';

const Contents = () => {
  return (
    <S.Container>
      <TagButton width={'62px'} />
      <span style={{ fontSize: 13, marginTop: 12, marginBottom: 12 }}>
        For questions about programming in ECMAScript (JavaScript/JS) and its
        different dialects/implementations (except for ActionScript). Keep in{' '}
        ...
      </span>
      {/* <p>{tags.tagId}</p>
      <p>{tags.name}</p>
      <p>{tags.tagDescription}</p>
      <p>{tags.usedTagCnt}</p> */}
      <TagsInfo />
    </S.Container>
  );
};

export default Contents;
