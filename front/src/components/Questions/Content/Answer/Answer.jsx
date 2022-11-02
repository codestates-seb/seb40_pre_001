import React, { useRef, useState } from 'react';
import { StyledButton } from '../../../@common/Buttons';
import { TextEditor } from '../../../@common/TextEditor/TextEditor';

const Answer = () => {
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
      <div
        style={{
          borderTop: '1px solid gray',
          marginTop: 10,
        }}
      >
        <p style={{ marginBottom: 30, marginTop: 20 }}> Your Answer</p>
        <TextEditor
          ref={editorRef}
          width='727'
          height='255px'
          onChange={handleChange}
        />
        <p>{editor.md}</p>
      </div>
      <StyledButton
        content='Post Your Answer'
        style={{ width: 129, height: 45 }}
      />
    </>
  );
};

export default Answer;
