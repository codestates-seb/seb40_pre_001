import React from 'react';
import * as S from './WidgetBottom.style';
import TagButton from '../../../@common/Buttons/Tag';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';

const tags = [
  {
    name: 'javascript',
    count: 2441685,
  },
  {
    name: 'python',
    count: 2050714,
  },
  {
    name: 'java',
    count: 1873958,
  },
  {
    name: 'c#',
    count: 1565797,
  },
  {
    name: 'php',
    count: 1449358,
  },
  {
    name: 'android',
    count: 1391939,
  },
  {
    name: 'html',
    count: 1154373,
  },
  {
    name: 'jquery',
    count: 1034113,
  },
  {
    name: 'c++',
    count: 780378,
  },
  {
    name: 'css',
    count: 776479,
  },
];

const SideTagBox = () => {
  return (
    <S.Container>
      <S.Header>Related Tags</S.Header>
      {tags.map(({ name, count }) => {
        return (
          <div key={name} style={{ height: 31.6 }}>
            <TagButton content={name} />
            <S.CountSpan>x&nbsp;{count}</S.CountSpan>
          </div>
        );
      })}
      <SmallBlueSpan content={'more related tags'} />
    </S.Container>
  );
};

export default SideTagBox;
