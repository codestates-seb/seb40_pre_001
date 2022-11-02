import React, { useRef, useState } from 'react';
import { StyledButton } from '../../../@common/Buttons';
import { TextEditor } from '../../../@common/TextEditor/TextEditor';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';

import * as S from './Answer.style';

const PostAnswer = () => {
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
        <S.Header> Your Answer</S.Header>
        <TextEditor
          ref={editorRef}
          width='727'
          height='255px'
          onChange={handleChange}
        />
        <p>{editor.md}</p>
      </S.AnswerContainer>
      <StyledButton
        content='Post Your Answer'
        style={{ width: 129, height: 45 }}
      />
    </>
  );
};

export default PostAnswer;
