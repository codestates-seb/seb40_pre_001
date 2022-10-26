import React from 'react';
import CustomLink from '../../../Link';
import * as S from './Content.style';

const FooterContent = () => {
  return (
    <S.Nav>
      <S.Col>
        <CustomLink>Stack Overflow</CustomLink>
        <ul>
          <li>Questions</li>
          <li>Help</li>
        </ul>
      </S.Col>
      <S.Col>
        <CustomLink>Products</CustomLink>
        <ul>
          <li>Teams</li>
          <li>Advertising</li>
          <li>Collectives</li>
          <li>Talent</li>
        </ul>
      </S.Col>
      <S.Col>
        <CustomLink>COMPANY</CustomLink>
        <ul>
          <li>About</li>
          <li>Press</li>
          <li>Work Here</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
          <li>Cookie Settings</li>
          <li>Cookie Policy</li>
        </ul>
      </S.Col>
      <S.Col>
        <CustomLink>STACK EXCHANGE NETWORK</CustomLink>
        <ul>
          <li>Technology</li>
          <li>Culture & recreation</li>
          <li>Life & arts</li>
          <li>Science</li>
          <li>Professional</li>
          <li>Business</li>
          <li style={{ marginTop: 16 }}>API</li>
          <li>Data</li>
        </ul>
      </S.Col>
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
