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

.toastui-editor-contents,
  .toastui-editor-contents p,
  .toastui-editor-contents h1,
  .toastui-editor-contents h2,
  .toastui-editor-contents h3,
  .toastui-editor-contents h4,
  .toastui-editor-contents h5,
  .toastui-editor-contents h6 {
    margin: 0px !important;
    padding : 0px !important;
    font-size: 16px !important;
    word-spacing: 1px !important;
  }



}`;

export default GlobalStyles;
