import React, { useState, useRef } from 'react';
import * as S from './Ask.style';
import { TextEditor } from '../../../components/@common/TextEditor/TextEditor';

import { SquareButton } from '../../../components/@common/Buttons/Button.style';
// import { text } from 'express';

const inputDone = [];

const AskForm = ({ title, script, index, markdown, placeholder }) => {
  const [liveButton, SetLiveButton] = useState(false);
  const [textdone, SetTextDone] = useState('');

  function changeButton() {
    SetLiveButton(true);
  }
  //index -1 에 인풋 벨류가 존재하면 클래스 빼기

  const DoneQuestion = () => {
    let check = textdone.replace(/\s/g, '');

    if (check.length > 15 && !inputDone.includes(index)) {
      inputDone.push(index);
    }
  };

  const editorRef = useRef();

  // const handleRegisterButton = () => {
  //   const EditorText = editorRef.current?.getInstance().getMarkdown();
  //   SetTextDone(EditorText);
  //   DoneQuestion(textdone);
  // };

  //1. toast ui 15글자 못넘으면 blur 처리 하기
  //2. 버튼 누르면 blur 풀기

  return (
    <S.AskForm
      onClick={() => SetLiveButton(true)}
      onBlur={changeButton}
      onChange={DoneQuestion}
    >
      <div className='title'>{title}</div>
      <div className='content'>{script}</div>
      {markdown ? (
        <TextEditor ref={editorRef}></TextEditor>
      ) : (
        <input
          style={{
            height: '32px',
            border: '1px solid hsl(210,8%,75%)',
            borderRadius: '3px',
            paddingLeft: '8px',
          }}
          type='text'
          value={textdone}
          placeholder={placeholder}
          onChange={(e) => SetTextDone(e.target.value)}
        ></input>
      )}
      {liveButton ? (
        <SquareButton style={{ width: '49px' }}>Next</SquareButton>
      ) : null}
    </S.AskForm>
  );
};

export default AskForm;
