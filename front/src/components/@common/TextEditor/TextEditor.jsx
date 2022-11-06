import React, { forwardRef } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const TextEditor = forwardRef(
  ({ initialValue, changeEvent, ...props }, ref) => {
    return (
      <div>
        <Editor
          ref={ref}
          initialValue={initialValue || '&nbsp;'}
          previewStyle='vertical'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
          onChange={() => changeEvent()}
          viewer='true'
          onBlur='true'
          {...props}
        />
      </div>
    );
  },
);

TextEditor.displayName = 'TextEditor';

const TextViewer = ({ initialValue, ...rest }) => {
  return (
    <Viewer
      className='viewer'
      initialValue={initialValue}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      {...rest}
    />
  );
};

export { TextEditor, TextViewer };
