import styled from 'styled-components';

const SideContainer = styled.div`
  display: block;
  float: right;
  width: 300px;
  margin: 0 0 15px 24px;
  box-sizing: inherit;
  height: 100%;
`;

const AdBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  img {
    border: 0;
    width: 300px;
    height: 250px;
  }

  span {
    font-size: 11px;
    align-self: flex-end;
  }
`;

export { SideContainer, AdBox };
