import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledButton } from '../../../@common/Buttons';
import { TextEditor } from '../../../@common/TextEditor/TextEditor';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import usePostAnswer from '../../../../hooks/questions/usePostAnswer';
import * as S from './Answer.style';
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser';

const PostAnswer = ({ questionId }) => {
  // 현재 접속한 유저 아이디 가져와야함
  // views 얘기해봐야함
  // 유효성 검사
  const { id } = useParams();
  const { currentUser } = useGetCurrentUser();
  const { mutate } = usePostAnswer(id);

  const [editor, setEditor] = useState({ html: '', md: '' });

  const editorRef = useRef(null);

  const handleChange = () => {
    const editor_instance = editorRef.current?.getInstance();
    if (editor_instance) {
      setEditor({
        html: editor_instance?.getHTML(),
        md: editor_instance?.getMarkdown(),
      });
    }
  };

  return (
    <>
      <S.AnswerContainer>
        <S.Helper>
          Know someone who can answer? Share a link to this{' '}
          <SmallBlueSpan content='question' /> via{' '}
          <SmallBlueSpan content='email' />, <SmallBlueSpan content='Twitter' />
          , or <SmallBlueSpan content='Facebook' />.
        </S.Helper>
        <S.Header>Your Answer</S.Header>
        <TextEditor
          ref={editorRef}
          width='727'
          height='255px'
          onChange={handleChange}
        />
        <S.PreviewText>{editor.md.replace(/<[^>]+>/g, '')}</S.PreviewText>
      </S.AnswerContainer>
      <StyledButton
        content='Post Your Answer'
        style={{ width: 129, height: 45 }}
        onClick={() =>
          mutate({
            questionId,
            userId: currentUser?.userId,
            context: editor.html,
          })
        }
      />
    </>
  );
};

export default PostAnswer;
