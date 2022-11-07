import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 5px;
  padding: 13px;
  margin-top: 30px;
  width: 245px;
`;

const Title = styled.span`
  position: relative;
  top: 20px;
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const LinkBox = styled.div`
  color: blue;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  color: hsl(210, 8%, 45%);
  margin-right: 7px;
`;

export { Container, Count, Title, LinkBox };
