import styled from 'styled-components';

const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -2px;
  padding: 2px 0;
`;

const Li = styled.li`
  margin-top: -1px;

  a {
    color: hsl(210, 8%, 35%);
    display: flex;
    align-items: center;
    padding: 6px 12px;
    position: relative;
    border: none;
    font: unset;
    background: none;
    box-shadow: none;
    cursor: pointer;
    user-select: none;
    border-radius: 1000px;
    margin: 2px;
    white-space: nowrap;
  }

  a:hover {
    border-radius: 40px;
    background-color: hsl(210, 8%, 90%);
    color: hsl(210, 8%, 35%);
    padding: 6px 12px;
  }

  .active {
    border-radius: 40px !important;
    background: hsl(27, 90%, 55%) !important;
    color: hsl(0, 0%, 100%) !important;
    padding: 6px 12px !important;
  }
`;

export { Ol, Li };
