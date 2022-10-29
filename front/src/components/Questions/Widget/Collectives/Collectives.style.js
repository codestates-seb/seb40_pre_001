import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  border: 1px solid hsl(210, 8%, 85%);
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;
  font-size: 13px;
`;

const Header = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top: 1px solid hsl(210, 8%, 90%);

  padding: 12px 16px;
  background: hsl(210, 8%, 97.5%);
  color: hsl(210, 8%, 35%);
  font-size: 1.15rem;
  font-weight: normal;
  margin: 0;

  a {
    float: right;
    margin: 0 0 4px 8px;
    color: hsl(206, 100%, 40%);
    font-size: 11px;
    line-height: 19.5px;
  }
`;

const ContentContainer = styled.div`
  display: block;
  padding: 16px 15px;
  color: hsl(210, 8%, 25%);
  border-top: 1px solid hsl(210, 8%, 90%);

  align-items: center;
  color: hsl(210, 8%, 25%);
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  color: hsl(210, 8%, 25%);
`;

const ContentFlex = styled.div`
  display: flex;
  flex: 1 auto;
`;

const JoinButton = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.8em;
  color: hsl(206, 100%, 40%);
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: normal;
  line-height: calc((13px + 2) / 13px);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  border-color: hsl(206, 85%, 57.5%);
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;

const Title = styled.a`
  font-size: 1.15em;
  line-height: 1.3;
  color: hsl(210, 8%, 45%);
`;

const Members = styled.div`
  font-size: 12;
  margin-bottom: 8;
  color: hsl(210, 8%, 25%);
`;

const Desc = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 13px;
  color: hsl(210, 8%, 25%);
  margin-top: 10px;
`;

export { Container, Header };

export {
  ContentContainer,
  ContentHeader,
  ContentFlex,
  JoinButton,
  Icon,
  Title,
  Members,
  Desc,
};
