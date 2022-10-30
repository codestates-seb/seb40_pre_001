import styled from 'styled-components';

const Container = styled.ul`
  display: block;
  list-style: none;
  list-style-type: disc;
  margin: 0;
  padding: 0;
  background-color: hsl(47, 87%, 94%);

  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: hsl(47, 65%, 84%);
`;

const Title = styled.li`
  display: flex;
  background-color: hsl(47, 83%, 91%);
  font-size: 12px;
  font-weight: bold;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom: 1px solid;
  border-top: 1px solid;

  border: 1px solid hsl(47, 65%, 84%);

  padding: 12px 15px;

  color: hsl(210, 8%, 35%);
`;

const Items = styled.li`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  margin: 12px 0 12px 0;

  a {
    color: hsl(210, 8%, 25%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  flex-shrink: 0;
  flex-basis: 90%;
  margin-left: 10px;
`;

export { Container, Title, Items, TextBox };
