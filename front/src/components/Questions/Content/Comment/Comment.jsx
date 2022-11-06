import React, { useState } from 'react';
import TimeAgo from 'react-timeago';
import { PencilIcon } from '../../../@common/Icons';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import * as S from './Comment.style';
import PostComment from './PostComment';

const CommentBox = ({ type, currentUser }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Container>
      <S.CommentList>
        <S.Li>
          <S.TextContainer>
            <S.CommentBody>
              {/* comment Context */}
              <S.Copy>
                Your array contains strings, not html elements as you are
                storing the elements value in the array, push the element into
                the array and change the code after to replace on item.value,
                then setAttribute will be defined
              </S.Copy>
              <S.Author>
                &nbsp;-&nbsp;
                {/* author */}
                <SmallBlueSpan content='Ryan Wilson' />
              </S.Author>
              {/* createdAt */}
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
      <S.Comment isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        Add a comment
      </S.Comment>
      <PostComment
        type={type}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        currentUser={currentUser}
      />
    </S.Container>
  );
};

export default CommentBox;
