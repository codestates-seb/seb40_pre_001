import React from 'react';
import { FOOTER_CONTENTS } from '../../../../../constants';
import CustomLink from '../../../Link';
import * as S from './Content.style';

const FooterContent = () => {
  return (
    <S.Nav>
      {FOOTER_CONTENTS.map(({ title, list }) => {
        return (
          <S.Col key={title}>
            <CustomLink>{title}</CustomLink>
            <ul>
              {list.map((el) => {
                return el === 'API' ? (
                  <li key={el} style={{ marginTop: 20 }}>
                    {el}
                  </li>
                ) : (
                  <li key={el}>{el}</li>
                );
              })}
            </ul>
          </S.Col>
        );
      })}

      <S.Copyright>
        <S.Ul>
          <li>Blog</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </S.Ul>
        <p>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under
          <span
            style={{ marginLeft: 5, fontSize: 12, textDecoration: 'underline' }}
          >
            CC BY-SA
          </span>
          .<br />
          <span style={{ fontSize: 10 }}>rev 2022.10.24.26681</span>
        </p>
      </S.Copyright>
    </S.Nav>
  );
};

export default FooterContent;
