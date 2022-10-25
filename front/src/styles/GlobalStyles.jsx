import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
    color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size : 13px;
}

body {
  background-color: white;
  width: 100vw;  
  height : 100vh;
  overflow-x: hidden;
  display : flex;
  flex-direction : column;
}

button {
  cursor: pointer;
}

.active {
  background-color: hsl(210, 8%, 95%) ;
  font-weight: 700;
  border-right: 3px solid hsl(27, 90%, 55%) ;
  
  div {
    color: hsl(210, 8%, 5%);
    font-weight: 700;
  }
}
`;

export default GlobalStyles;
