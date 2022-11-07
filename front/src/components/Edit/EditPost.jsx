import React, { useState, useCallback } from 'react';
import * as S from './EditContent.style';
import { Widget } from '../Questions';
import { useParams } from 'react-router-dom';
import useGetPostById from '../../hooks/questions/useGetPostById';
import Spinner from '../@common/Spinner';
import { TextEditor } from '../@common/TextEditor/TextEditor';
import { useRef } from 'react';
import { StyledButton } from '../@common/Buttons';
import useEditPost from './hooks/useEditPost';
import useGetCurrentUser from '../../hooks/users/useGetCurrentUser';

const EditPost = () => {
  const { id } = useParams();

  const titleRef = useRef(null);
  const editorRef = useRef(null);
  const [editor, setEditor] = useState('');
  const { data, isLoading } = useGetPostById(id);
  const { currentUser } = useGetCurrentUser();

  const textEditorValidator = (text) => {
    let isValid = false;

    if (text.length < 30) {
      alert('변경사항이 없거나 30자 이상 작성하셔야 합니다.');

      return isValid;
    }

    isValid = true;

    return isValid;
  };

  const { mutate: updatePost } = useEditPost(id);

  const handleEditor = useCallback(() => {
    setEditor(editorRef?.current?.getInstance().getMarkdown());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const { questionTitle, questionId, context } = data.question;

  return (
    <S.EditLayout>
      <S.LeftBox>
        <S.Header>
          <p style={{ marginBottom: 10 }}>
            Your edit will be placed in a queue until it is peer reviewed.
          </p>{' '}
          <p>
            We welcome edits that make the post easier to understand and more
            valuable for readers. Because community members review edits, please
            try to make the post substantially better than how you found it, for
            example, by fixing grammar or adding additional resources and
            hyperlinks.
          </p>
        </S.Header>

        <S.Section>
          <S.Title>Title</S.Title>
          <S.Input ref={titleRef} defaultValue={questionTitle} />
        </S.Section>

        <S.Section>
          <S.Title>Body</S.Title>
          <TextEditor
            ref={editorRef}
            value={context}
            width='861px'
            height='255px'
            onChange={handleEditor}
          />
        </S.Section>

        <S.ButtonBox>
          <StyledButton
            className='save-edit'
            content='Save edits'
            onClick={() => {
              if (textEditorValidator(editor.replace(/<[^>]+>/g, ''))) {
                updatePost({
                  questionId,
                  modifiedContent: {
                    questionTitle: titleRef.current.value,
                    userId: currentUser.userId,
                    context: editor,
                  },
                });
              }
            }}
          />
          <StyledButton
            className='cancel'
            content='cancel'
            style={{
              backgroundColor: 'transparent',
              color: 'hsl(206,100%,40%)',
              marginLeft: 10,
            }}
          />
        </S.ButtonBox>
      </S.LeftBox>
      <Widget />
    </S.EditLayout>
  );
};

export default EditPost;
