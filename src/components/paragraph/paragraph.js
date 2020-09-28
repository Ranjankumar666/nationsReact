import React from "react";
import styled from "styled-components";

const ParaStyle = styled.div(
  (props) => `
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;

  & p{
    margin: 0;
  }
`
);
const Span = styled.span`
  font-weight: 600;
`;

const Paragraph = (props) => (
  <ParaStyle>
    <Span>{props.title}</Span>
    {props.children}
  </ParaStyle>
);
export default Paragraph;
