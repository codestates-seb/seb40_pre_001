import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { forwardRef } from 'react';

const TextEditor = forwardRef(({ height, value, onChange }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  isFocused;

  return (
    <div>
      <Editor
        ref={ref}
        height={height}
        useCommandShortcut
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} // 코드블럭 하이라이트
        toolbarItems={[
          ['bold', 'italic', 'strike'],
          ['code', 'codeblock'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
        ]}
        autofocus={false}
        onChange={onChange}
        initialValue={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
});

TextEditor.displayName = 'TextEditor';

export { TextEditor };
