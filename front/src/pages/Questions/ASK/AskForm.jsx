import React, { useState, useRef } from 'react';
import * as S from './Ask.style';
import { TextEditor } from '../../../components/@common/TextEditor/TextEditor';

import { SquareButton } from '../../../components/@common/Buttons/Button.style';
// import { text } from 'express';

const inputDone = [];

const AskForm = ({ key, title, script, index, markdown, placeholder }) => {
  const [liveButton, SetLiveButton] = useState(false);
  const [textdone, SetTextDone] = useState('');

  function changeButton() {
    SetLiveButton(true);
  }
  //index -1 에 인풋 벨류가 존재하면 클래스 빼기

  const DoneQuestion = () => {
    let check = textdone.replace(/\s/g, '');
    // console.log(check.length);
    if (check.length > 15 && !inputDone.includes(index)) {
      inputDone.push(index);
      console.log(inputDone);
    }
  };

  const editorRef = useRef();

  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    // console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    // console.log(editorRef.current?.getInstance().getMarkdown());
    const EditorText = editorRef.current?.getInstance().getMarkdown();
    SetTextDone(EditorText);
    DoneQuestion(textdone);
    console.log(textdone);
  };

  //   const onBlur = () => {};

  //1. toast ui 15글자 못넘으면 blur 처리 하기
  //2. 버튼 누르면 blur 풀기

  return (
    <S.AskForm
      type={key}
      onClick={() => SetLiveButton(true)}
      onBlur={changeButton}
      onChange={DoneQuestion}
    >
      <div className='title'>{title}</div>
      <div className='content'>{script}</div>
      {markdown ? (
        <TextEditor
          ref={editorRef}
          onChange={() => handleRegisterButton()}
          onBlur='blur'
        ></TextEditor>
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
