import React, { useRef, useState } from 'react';
import TitleBox from '../../@common/TitleBox/TitleBar';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';
import Widget from '../Widget/Widget';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../@common/Icons';
import TextEditor from '../../@common/TextEditor/TextEditor';
import { StyledButton, TagButton } from '../../@common/Buttons';

const Content = ({ data }) => {
  const { title, tags } = data;
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
    <div>
      <TitleBox title={title} style={{ width: 1051 }} />
      <S.Status>
        <S.TextBox>
          <span>Asked</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Modified</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Viewed</span>
          <p>10 times</p>
        </S.TextBox>
      </S.Status>
      <M.MainContainer>
        {/* Image Box */}
        <S.ImgContainer>
          <img
            src='https://tpc.googlesyndication.com/simgad/10582817586221403560'
            border='0'
            width='728'
            height='90'
            alt=''
          />
        </S.ImgContainer>
        {/* Content Related */}
        <S.PostLayout>
          {/* Left box */}
          <S.LeftBox>
            <S.VotingContainer>
              <S.IconContainer>
                <ArrowIcon direction='up' />
              </S.IconContainer>
              <S.VoteCount>
                <span>0</span>
              </S.VoteCount>
              <S.IconContainer>
                <ArrowIcon direction='down' />
              </S.IconContainer>
              <SaveIcon style={{ margin: '10px 0 10px 12px' }} />
              <HistoryIcon style={{ margin: '3px 0 0 11px' }} />
            </S.VotingContainer>
          </S.LeftBox>
          {/* Right Box */}
          <S.RightBox>
            <S.PostBody></S.PostBody>
            <S.TagBox>
              {tags.map((tag) => {
                return <TagButton key={tag} content={tag} />;
              })}
            </S.TagBox>
            <S.BottomBox>
              <S.FeatureBox>
                <S.FeatureLeft>
                  <a style={{ margin: 0 }}>Share</a>
                  <a>Edit</a>
                  <a>Follow</a>
                </S.FeatureLeft>
              </S.FeatureBox>
            </S.BottomBox>
            <div>Add a comment</div>
          </S.RightBox>
        </S.PostLayout>

        {/* Text Editor */}
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
          onClick={() => console.log(editor.html)}
        />
      </M.MainContainer>

      <Widget />
    </div>
  );
};

export default Content;
