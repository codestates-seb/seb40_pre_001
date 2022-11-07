/*eslint-disable*/
import React, { useState, useRef } from 'react';
import * as S from './Ask.style';
import { TextEditor } from '../../../components/@common/TextEditor/TextEditor';

import { SquareButton } from '../../../components/@common/Buttons/Button.style';
import { useRecoilState } from 'recoil';
import { questions } from '../../../store/questions';

const AskForm = ({ title, script, index, markdown, placeholder, type }) => {
  const inputDone = [];

  const [liveButton, SetLiveButton] = useState(false);
  const [textdone, SetTextDone] = useState('');
  const [state, setInputVale] = useRecoilState(questions);

  function changeButton() {
    SetLiveButton(true);
  }

  const DoneQuestion = () => {
    let check = textdone.replace(/\s/g, '');

    if (check.length > 15 && !inputDone.includes(index)) {
      inputDone.push(index);
    }

    if (index === 1) {
      setInputVale({
        ...state,
        title: textdone,
      });
    }
    if (index === 2) {
      setInputVale({
        ...state,
        questionsUp: textdone,
      });
    }
    if (index === 3) {
      setInputVale({
        ...state,
        questionsDown: textdone,
      });
    }
    if (index === 4) {
      // setInputVale({
      //   ...state,
      //   tags: state.tags.push(textdone),
      // });
    }
    // console.log(state);
  };

  const editorRef = useRef();

  // const handleRegisterButton = () => {
  //   const EditorText = editorRef.current?.getInstance().getMarkdown();
  //   SetTextDone(EditorText);
  //   DoneQuestion(textdone);
  // };

  return (
    <S.AskForm
      onClick={() => SetLiveButton(true)}
      onBlur={changeButton}
      onChange={DoneQuestion}
    >
      <div className='title'>{title}</div>
      <div className='content'>{script}</div>
      {markdown ? (
        <TextEditor
          ref={editorRef}
          onChange={(e) => handleRegisterButton()}
          required
          height='
          300px'
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
          onChange={(e) => {
            SetTextDone(e.target.value);
          }}
          required
        ></input>
      )}
      {liveButton ? (
        <SquareButton style={{ width: '49px' }}>Next</SquareButton>
      ) : null}
    </S.AskForm>
  );
};

export { AskForm };
