import React, { forwardRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const TextEditor = forwardRef(({ onChange, ...props }, ref) => {
  return (
    <div>
      <Editor
        ref={ref}
        initialValue='hello react editor world!'
        previewStyle='vertical'
        initialEditType='wysiwyg'
        useCommandShortcut={true}
        onChange={onChange}
        viewer='true'
        {...props}
      />
    </div>
  );
});

TextEditor.displayName = 'TextEditor';

export default TextEditor;
