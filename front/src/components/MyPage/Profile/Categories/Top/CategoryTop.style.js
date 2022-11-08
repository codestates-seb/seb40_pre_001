import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  width: 160px;
  margin-top: 15px;
  margin-bottom: 16px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  .active {
    background-color: hsl(27, 90%, 55%);
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    position: relative;
    border: none;
    font: unset;
    background: none;
    box-shadow: none;
    cursor: pointer;
    user-select: auto;
    border-radius: 1000px;
    margin: 2px;
    white-space: nowrap;
    color: hsl(210, 8%, 35%);

    &:not(.active):hover {
      background-color: hsl(210, 8%, 90%);
    }
  }
`;

export { TopContainer };
