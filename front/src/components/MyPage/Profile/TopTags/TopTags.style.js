import styled from 'styled-components';

const TagsWrapper = styled.div`
  margin-left: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: hsl(210, 8%, 45%);
    margin-right: 10px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 3px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 12px;
  border-bottom: 1px solid;
  border-color: hsl(210, 8%, 90%);
`;

export { TagsWrapper, TitleContainer, TagContainer, Li };
