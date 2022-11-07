import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate(492px, 48px);
  width: calc(calc(97rem / 12) * 2);
  margin-top: calc(2px * -1);
  z-index: 2000;
  border-radius: 5px;
  border: 1px solid hsl(210, 8%, 85%);
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  min-width: 12rem;

  left: ${({ login }) => (login ? '-65px' : null)};

  @media screen and (max-width: 1800px) {
    left: ${({ login }) => (login ? '-184px' : '-120px')};
  }
`;

const UpArrow = styled.div`
  display: block;
  position: absolute;
  left: 0;
  transform: translate(99px, 0px);
  top: calc(6px * -1);
  color: hsl(0, 0%, 100%);

  width: 12px;
  height: 12px;
  z-index: -1;

  &::before {
    content: '';
    transform: rotate(45deg);
    position: absolute;
    box-shadow: -1px -1px 1px 0 hsl(0deg 0% 0% / 12%);
    background: currentColor;
    display: block;
    width: 12px;
    height: 12px;
    z-index: -1;
  }

  &::after {
    top: 1px;
    box-shadow: -1px -1px 1px 0 hsl(0deg 0% 0% / 12%);
    content: '';
    transform: rotate(45deg);
    border-radius: 1.5px;
    background-color: hsl(0, 0%, 100%);
    width: 12px;
    height: 12px;
    z-index: -1;
  }
`;

const Li = styled.li`
  list-style: none;
  margin: 6px;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;

  a {
    display: flex;
    flex-direction: column;
    padding: 6px;
    border-radius: 3px;
    text-decoration: none;
    cursor: pointer;
  }
`;

export { Container, UpArrow, Li };
