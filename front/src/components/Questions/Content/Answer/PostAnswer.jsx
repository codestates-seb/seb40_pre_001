import React, { useRef, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { StyledButton } from '../../../@common/Buttons';
import { TextEditor } from '../../../@common/TextEditor/TextEditor';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import useCreateAnswer from '../../../../hooks/questions/useCreateAnswer';
import * as S from './Answer.style';

const PostAnswer = ({ questionId, currentUser }) => {
  const { id } = useParams();
  const { mutate } = useCreateAnswer(id);

  const [editor, setEditor] = useState('');
  setEditor;

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

  const handleEditor = useCallback(() => {
    setEditor(editorRef?.current?.getInstance().getMarkdown());
  }, []);

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
          width='727px'
          height='255px'
          onChange={handleEditor}
          value={editor}
        />
        <S.PreviewText>{editor.replace(/<[^>]+>/g, '')}</S.PreviewText>
      </S.AnswerContainer>
      <StyledButton
        content='Post Your Answer'
        style={{ width: 129, height: 45 }}
        onClick={() => {
          if (textEditorValidator(editor.replace(/<[^>]+>/g, ''))) {
            mutate({
              questionId,
              userId: currentUser?.userId,
              context: editor,
            });
          }
        }}
      />
    </>
  );
};

export default PostAnswer;
