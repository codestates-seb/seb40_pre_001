import styled from "styled-components";


const SnsButtonContainer = styled.div`
  width: 278px;
  height: 121.34px;
  margin: -4px 0px 16px;
`

const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(214, 217, 220);
  background-color: white;
  color: black;
  border-radius: 5px;
  width: 255px;
  height: 35px;
  font-size: 13px;
  margin: 6px 0px;
  padding: 10.4px;
  &:hover{
  background: rgba(214, 217, 220,1);
    color: white;
    transition: 0.2s;
}
`
const GithubButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(214, 217, 220);
  background-color: rgb(47, 51, 55);
  color: white;
  border-radius: 5px;
  width: 255px;
  height: 35px;
  font-size: 13px;
  margin: 6px 0px;
  padding: 10.4px; 
  &:hover{
  background: rgba(214, 217, 220,0.2);
    color: white;
    transition: 0.2s;
}
`
const FacebookButton = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(214, 217, 220);
  background-color: rgb(56, 84, 153);
  color: white;
  border-radius: 5px;
  width: 255px;
  height: 35px;
  font-size: 13px;
  margin: 6px 0px;
  padding: 10.4px;
  &:hover{
  background: rgba(56, 84, 153,0.6);
    color: white;
    transition: 0.2s;
}
`


export { SnsButtonContainer, GoogleButton, GithubButton, FacebookButton }