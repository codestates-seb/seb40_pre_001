import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50px;
  padding-top: -8px;
  margin-bottom: 15px;

  h1 {
    flex: 1;
    font-size: 2.07692308rem;
    margin-bottom: 12px;
    margin-right: 12px;
    line-height: 35.1px;
    font-size: 27px;
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 15px;
`;

export { TitleContainer, ButtonContainer };
