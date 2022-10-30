import React from 'react';
import * as S from './PopOver.style';
import CustomLink from '../../../Link';
import { isLoggedIn } from '../../../../../constants/auth';

const POPOVER_INFO = Object.freeze([
  {
    title: 'Stack Overflow',
    desc: 'Public questions & answers',
    path: '/questions',
  },
  {
    title: 'Stack Overflow for Teams',
    desc: 'Where developers & technologists share private knowledge with coworkers',
    path: '/questions',
  },
  {
    title: 'Talent',
    desc: ' Build your employer brand',
    path: '/questions',
  },
  {
    title: 'Advertising',
    desc: 'Reach developers & technologists worldwide',
    path: '/questions',
  },
]);

const PopOver = ({ setIsClicked }) => {
  return (
    <S.Container login={isLoggedIn}>
      <S.UpArrow />
      <ol>
        {POPOVER_INFO.map(({ title, desc, path }, i) => {
          return (
            <S.Li key={i}>
              <CustomLink path={path} onClick={() => setIsClicked(false)}>
                <span>{title}</span>
                <span style={{ color: 'hsl(210,8%,45%)', fontSize: 12 }}>
                  {desc}
                </span>
              </CustomLink>
            </S.Li>
          );
        })}
        <S.Li
          style={{
            backgroundColor: 'hsl(210,8%,97.5%)',
            borderTop: '1px solid hsl(210,8%,90%)',
            width: '100%',
            height: 42,
            margin: 0,
          }}
        >
          <a>
            <span
              style={{
                paddingLeft: 6,
                paddingTop: 6,
                color: 'hsl(210,8%,45%)',
              }}
            >
              About the company
            </span>
            <span></span>
          </a>
        </S.Li>
      </ol>
    </S.Container>
  );
};

export default PopOver;
