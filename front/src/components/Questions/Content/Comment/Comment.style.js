import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-top: 12px;
  border-top: 1px solid hsl(210, 8%, 90%);
`;

const CommentList = styled.ul`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const Li = styled.li`
  display: contents;
  transition: background-color linear 2s;
  margin: 0;
  padding: 0;
  user-select: none;
`;

const TextContainer = styled.div`
  max-width: 641px;

  transition: background-color ease-out 3s;
  min-width: 0;
  flex-basis: 0;
  padding-left: 6px;
  padding-right: 6px;
  padding: 6px 0;
  border-bottom: 1px solid hsl(210, 8%, 95%);
  font-size: 13px;
  flex-grow: 1;
  line-height: 1.4;
`;

const CommentBody = styled.div`
  word-wrap: break-word;
`;

const Copy = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;

  word-wrap: break-word;
`;

const Author = styled.div`
  display: inline-flex !important;
  align-items: center;
`;

const EditButton = styled.span`
  position: relative;
  outline: none;
  cursor: pointer;
  padding: 0;
  top: 3px;
  z-index: 10;
`;

const Comment = styled.span`
  display: ${({ isClicked }) => (isClicked ? 'none' : 'block')};
  cursor: pointer;
  color: hsl(210, 8%, 55%);
  opacity: 0.6;
`;
export {
  Container,
  CommentList,
  Li,
  TextContainer,
  CommentBody,
  Copy,
  Author,
  EditButton,
  Comment,
};
