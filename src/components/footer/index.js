import React from 'react';
import { Container, Wrapper, Wrapper1, Row, Column1, Column2, Column3, Column4, Column5, Link, Title } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Wrapper1 = function FooterWrapper1({children, ...restProps}) {
  return <Wrapper1 {...restProps}>{children}</Wrapper1>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column1 = function FooterColumn1({ children, ...restProps }) {
  return <Column1 {...restProps}>{children}</Column1>;
};

Footer.Column2 = function FooterColumn2({ children, ...restProps }) {
  return <Column2 {...restProps}>{children}</Column2>;
};

Footer.Column3 = function FooterColumn3({ children, ...restProps }) {
  return <Column3 {...restProps}>{children}</Column3>;
};

Footer.Column4 = function FooterColumn4({ children, ...restProps }) {
  return <Column4 {...restProps}>{children}</Column4>;
};

Footer.Column5 = function FooterColumn5({ children, ...restProps }) {
  return <Column5 {...restProps}>{children}</Column5>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
