import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;

  @media (max-width: 800px){
    flex-flow: column wrap;
    margin: 2rem auto;
  }
`;
export const Flag = styled.img(
  (props) => `
    width: 100%;
    height: 50rem;
    object-fit: cover;
    box-shadow: 0 .2rem .3rem rgba(0,0,0,.15);

    @media (max-width: 500px){
      height: 100%;
    }

  
  `
);
export const ImageContainer = styled.div`
    width: 100%;

`;

export const Header = styled.h3`
  font-size: 2.5rem;
`;

export const Details = styled.div`
  grid-column: 3/4;
  display: grid;
  margin-left: 4rem;
  grid-template-rows: repeat(3, 1fr);
  align-self: center;
  align-items: center;

  @media (max-width: 500px){
    margin-left: 0;
  }

`;
export const DetailsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, max-content);
  grid-gap: 1rem 2rem;

  @media (max-width: 500px){
    grid-template-columns: auto;
  }
`;

export const NeighborButton = styled.p`
  padding: 1rem 2rem;
  border: 2px solid hsla(0, 0%, 52%, 0.5);
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all .3s ease;


  &:hover, &:active, &:focus{
    background-color: hsla(0,0%, 52%, .5);
  }
`;
export const BorderStyle = styled.div(
  (props) => `
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  & *{
    margin: 1rem 0;
    margin-right: 1rem
  }
`
);


const Span = styled.span`
  font-weight: 600;
`;

const Border = (props) => (
  <BorderStyle>
    <Span>{props.title}</Span>
    <BorderStyle>
      {props.children}
    </BorderStyle>
  </BorderStyle>
);

export default Border;
