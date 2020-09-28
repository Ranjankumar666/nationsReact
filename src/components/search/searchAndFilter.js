import React from "react";
import styled from "styled-components";
import {ReactComponent as Icon} from "../../search.svg";

const SearchInput = styled.input(
  (props) => `
    border: none;
    border-radius: .2rem;
    font: inherit;
    font-size: 1.4rem;
    font-weight: 600;
    position: relative;
  `
);


const Input = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 .2rem .4rem rgba(0,0,0,.2);
  padding: 2rem 4rem;
`

const Span = styled.span`
  margin: 0;
`;

const Button = styled.p`
  & > *{
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const Dropbox = styled.div(
  (props) => `
     padding: 1rem 4rem;
     border-radius: .2rem;
     position: relative;
     box-shadow: 0 .2rem .4rem rgba(0,0,0,.2);
     cursor: pointer;
  `
);

const Options = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  padding: 2rem 4rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
`;

const Search = (props) => {
  return (
    <Container>
      <Input>
        <SearchInput
          type="text"
          onChange={props.change}
          placeholder="search a country"
        />
        <Button onClick={props.countryHandler}>
        <Icon />
        </Button>
      </Input>

      <Dropbox onClick={() => props.optionsHandler()}>
        <Span>Filter</Span>
        {props.showOptions ? (
          <Options>
            <p onClick={() => props.href("asia")}>Asia</p>
            <p onClick={() => props.href("americas")}>America</p>
            <p onClick={() => props.href("europe")}>Europe</p>
            <p onClick={() => props.href("africa")}>Africa</p>
            <p onClick={() => props.href("oceania")}>Oceania</p>
            <p onClick={() => props.href("")}>All</p>
          </Options>
        ) : null}
      </Dropbox>
    </Container>
  );
};

export default Search;
