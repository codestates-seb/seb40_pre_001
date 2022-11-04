import React from 'react';
import * as S from './Contents.style';
import TagButton from '../../components/@common/Buttons/Tag';
import TagsInfo from '../TagsInfo/TagsInfo';

const Contents = () => {
  return (
    <S.Container>
      <TagButton content={'javascript'} width={'62px'} />
      <span style={{ fontSize: 13, marginTop: 12, marginBottom: 12 }}>
        For questions about programming in ECMAScript (JavaScript/JS) and its
        different dialects/implementations (except for ActionScript). Keep in{' '}
        ...
      </span>
      <TagsInfo />
    </S.Container>
  );
};

export default Contents;
