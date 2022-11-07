import React from 'react';
import TagButton from '../../../@common/Buttons/Tag';
import * as S from './TopTags.style';

const TagList = ({ content, count, desc }) => {
  return (
    <S.Li>
      <div style={{ width: 100 }}>
        <TagButton content={content} style={{ width: 'auto' }} />
      </div>
      <div>
        <p>{desc}</p>
      </div>
      <div>
        <span style={{ fontSize: 17 }}>{count}</span>
        <span style={{ marginLeft: 10 }}>count</span>
      </div>
    </S.Li>
  );
};

export default TagList;
