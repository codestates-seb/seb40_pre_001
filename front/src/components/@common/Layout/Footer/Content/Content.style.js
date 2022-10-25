import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
  width: 863px;
  height: 278px;
  margin: 33px 0 32px 0;
`;

const Col = styled.div`
  padding-right: 12px;
  padding-bottom: 24px;
  flex: 1 0 auto;
  color: hsl(210, 8%, 75%);

  > a {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 12px;
    line-height: calc(17 / 13) px;
    color: hsl(210, 8%, 75%);
  }

  ul {
    margin-top: 15px;
    list-style: none;
  }

  li {
    margin-top: 10px;
    padding: 0;
    color: hsl(210, 8%, 60%);
  }
`;

const Ul = styled.ul`
  margin-top: 15px;
  list-style: none;
  color: hsl(210, 8%, 60%);
`;

const Copyright = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    color: hsl(210, 8%, 60%);
    font-size: 5px;
  }

  li {
    margin-right: 10px;
    color: hsl(210, 8%, 60%);
  }

  p {
    margin-top: auto;
    margin-bottom: 25px;
    color: hsl(210, 8%, 60%);
    font-size: 10px;

    span {
      color: hsl(210, 8%, 60%);
    }
  }
`;

export { Nav, Col, Ul, Copyright };
