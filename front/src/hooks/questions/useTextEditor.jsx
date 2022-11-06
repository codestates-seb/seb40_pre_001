import { useState } from 'react';

const useTextEditor = (editorRef) => {
  const [editor, setEditor] = useState({ html: '', md: '' });

  const handleChange = () => {
    const editor_instance = editorRef.current?.getInstance();

    if (editor_instance) {
      setEditor({
        html: editor_instance?.getHtml(),
        md: editor_instance?.getMarkdown(),
      });
    }
  };

  console.log(editor);

  return { editor, handleChange };
};

export default useTextEditor;
