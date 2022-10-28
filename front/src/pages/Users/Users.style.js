import styled from "styled-components";

const ContentContainer = styled.div`
display: columns;
justify-content: center;
align-items: center;
width: 100%;
height: 1114px;
margin: 50px auto 0 ;
padding: 24px;
margin-left: 164px;
background-color: rgba(0,0,0,0.1);
`
const UsersContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0,1fr));
row-gap: 10px;
column-gap: 20px;
line-height: 1.3;
width: 1051px;
margin:  auto;
overflow: hidden;
`

export { UsersContainer, ContentContainer }