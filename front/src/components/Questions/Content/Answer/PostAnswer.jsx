import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledButton } from '../../../@common/Buttons';
import { TextEditor } from '../../../@common/TextEditor/TextEditor';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import usePostAnswer from '../../../../hooks/questions/usePostAnswer';
import * as S from './Answer.style';
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser';

const PostAnswer = ({ questionId }) => {
  const { id } = useParams();
  const { currentUser } = useGetCurrentUser();
  const { mutate } = usePostAnswer(id);

  const [editor, setEditor] = useState({ html: '', md: '' });

  const editorRef = useRef('');

  const textEditorValidator = (text) => {
    let isValid = false;

    if (text.length < 30) {
      alert('30자 이상 작성하셔야 합니다.');

      return isValid;
    }

    isValid = true;

    return isValid;
  };

  const handleChange = () => {
    const editor_instance = editorRef.current.getInstance();

    if (editor_instance) {
      setEditor({
        html: editor_instance.getHTML(),
        md: editor_instance.getMarkdown(),
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
          onChange={() => handleChange()}
        />
        <S.PreviewText>{editor.md.replace(/<[^>]+>/g, '')}</S.PreviewText>
      </S.AnswerContainer>
      <StyledButton
        content='Post Your Answer'
        style={{ width: 129, height: 45 }}
        onClick={() => {
          if (textEditorValidator(editor.md.replace(/<[^>]+>/g, ''))) {
            mutate({
              questionId,
              userId: currentUser?.userId,
              context: editor.html,
            });
          }
        }}
      />
    </>
  );
};

export default PostAnswer;
