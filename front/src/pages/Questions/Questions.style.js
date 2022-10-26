import styled from 'styled-components';

const ContentWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: hsl(0, 0%, 100%);
  border-radius: 0;
  border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;

  // 추후에 삭제
  height: 1000px;
`;

export { ContentWrapper };
