import { useState, useRef } from 'react';

const useTextEditor = () => {
  const [editor, setEditor] = useState({ html: '', md: '' });
  const editorRef = useRef(null);

  const handleSubmit = () => {
    const editor_instance = editorRef.current?.getInstance();

    if (editor_instance) {
      setEditor({
        html: editor_instance?.getHtml(),
        md: editor_instance?.getMarkdown(),
      });
    }
  };

  return [editor, handleSubmit];
};

export default useTextEditor;
