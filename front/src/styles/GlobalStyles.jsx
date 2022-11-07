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


button {
  cursor: pointer;
}


.ReactQueryDevtoolsPanel {
  * {
    color : white;
  }

}

  .textViewer {
    margin: 0px !important;
    padding: 0px !important;
    font-size: 13px !important;
    word-spacing: 1px !important;
    word-break: break-all;
  }

}`;

export default GlobalStyles;
