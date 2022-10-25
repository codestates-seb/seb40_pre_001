import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
    color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size : 15px;
    font-weight : 400;
}

body {
  background-color: white;
  width: 100vw;  
  overflow-x: hidden;
  display : flex;
  flex-direction : column;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
