import styled from "styled-components";


const SearchInput = styled.input(
  (props) => `
    border: none;
    border-radius: .2rem;
    font: inherit;
    font-size: 1.6rem;
    font-weight: 600;
    position: relative;
  
    &::placeholder{
      color: black;
      font-size: 1.6rem;
      font-weight: 600;
    }


    &:active, &:focus{
      outline: none;
    }
  `
);


const Input = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 .2rem .4rem rgba(0,0,0,.2);
  padding: 1rem 4rem;
  align-items: center;
  justify-content: center;

  & > *{
    margin: 0;
  }

  @media (max-width: 500px){
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`

const Span = styled.span`
  margin: 0;
  font: inherit;
`;

const Button = styled.p`
  & > *{
    margin: 0;
  }

  & > svg{
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-evenly;
  margin-top: 2rem;

  @media (max-width: 500px){
    grid-auto-flow: row;
    grid-gap: 2rem;
  }
`;

const Dropbox = styled.div(
  (props) => `
     padding: 1rem 4rem;
     border-radius: .2rem;
     position: relative;
     box-shadow: 0 .2rem .4rem rgba(0,0,0,.2);
     cursor: pointer;
     font: inherit;
     font-weight: 600;


  @media (max-width: 500px){
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  `
);

const Options = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  font: inherit;
  padding: 2rem 4rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
`;


export {
  SearchInput,
  Input,
  Span,
  Button,
  Container,
  Dropbox,
  Options
}