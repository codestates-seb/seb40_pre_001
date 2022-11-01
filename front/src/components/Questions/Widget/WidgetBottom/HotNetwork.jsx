import React from 'react';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import * as S from './WidgetBottom.style';

const contentList = [
  'How would you identify the root of a non-standard chord / cluster?',
  'International Transit at Fort Lauderdale on the way to Barranquilla, Colombia',
  'A 90s show using handheld Internet',
  'Is there a commandline switch for "ls" that reveals "firmlinks"',
  'Is Douglas Station and Earth`s Spacedock the same station?',
  `What is the reason a given note can have different "sounds"`,
  `When should a PhD student be removed as first author?`,
  `How do we create an interstellar communications system?`,
  `How to get total amount of TX and RX`,
  `How is it possible that we had no less than FOUR keys left after beating Zelda 2?`,
  `Should I give extra notice to an awesome manager before I quit?`,
  `Is Levin's Universal Search valid for the integer factorization problem while using the AKS test?`,
];

const HotNetwork = () => {
  return (
    <S.Container style={{ marginTop: 30 }}>
      <S.Header>Hot Network Questions</S.Header>
      <S.Ul>
        {contentList.map((content) => {
          return (
            <li key={content} style={{ marginBottom: 10 }}>
              <SmallBlueSpan content={content} />
            </li>
          );
        })}
      </S.Ul>
      <SmallBlueSpan content='more hot questions' />
    </S.Container>
  );
};

export default HotNetwork;
