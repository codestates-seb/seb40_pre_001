import React from 'react';
import TimeAgo from 'react-timeago';
import { PencilIcon } from '../../../@common/Icons';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import * as S from './Comment.style';

const CommentBox = ({ type }) => {
  type;
  return (
    <S.Container>
      <S.CommentList>
        <S.Li>
          <S.TextContainer>
            <S.CommentBody>
              <S.Copy>
                Your array contains strings, not html elements as you are
                storing the elements value in the array, push the element into
                the array and change the code after to replace on item.value,
                then setAttribute will be defined
              </S.Copy>
              <S.Author>
                &nbsp;-&nbsp;
                <SmallBlueSpan content='Ryan Wilson' />
              </S.Author>
              <TimeAgo
                date={'2022-10-22'}
                style={{
                  color: 'hsl(210,8%,60%)',
                  fontSize: 13,
                  marginLeft: 2,
                  marginRight: 3,
                }}
              />
              <S.EditButton>
                <PencilIcon fill='hsl(210,8%,60%)' />
              </S.EditButton>
            </S.CommentBody>
          </S.TextContainer>
        </S.Li>
      </S.CommentList>
    </S.Container>
  );
};

export default CommentBox;
