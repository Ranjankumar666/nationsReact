import React from "react";
import {ReactComponent as Icon} from "../../search.svg";
import {
  SearchInput,
  Input,
  Span,
  Button,
  Container,
  Dropbox,
  Options
} from "./searchStyles.js";


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
