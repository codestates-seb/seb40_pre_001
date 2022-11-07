import styled from 'styled-components';

const PostCommentBox = styled.form`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  width: 641px;
  max-width: 641px;
  width: 100%;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const TextArea = styled.textarea`
  display: flex;
  font-size: 13px;
  height: 100px;
  padding: 10px;
  resize: none;
  text-decoration: none;
`;

const submitButton = styled.button`
  margin-top: 10px;
  width: 50px;
  background-color: transparent;
  border: none;
  color: hsl(210, 8%, 35%);
  cursor: pointer;
`;

export { PostCommentBox, TextArea, submitButton };
