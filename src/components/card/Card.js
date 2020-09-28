import React from "react";
import styled from "styled-components";
import Flag from "../../components/flag/flag";
import { withRouter } from "react-router-dom";

const Paragraph = styled.p`
  font-weight: 300;
  margin: 0.2rem;
`;
const Details = styled.div`
  grid-column: 1/-1;
  padding: 3rem 2rem;
`;
const Header = styled.h4`
  font-size: 2rem;
  grid-column: 1/-1;
  margin-top: 0;
`;

const CardStyle = styled.div`
  width: 25rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 15rem 1fr;
  margin: 2rem;
  overflow: hidden;
  cursor: pointer;
`;

const Card = (props) => {

  return (
    <CardStyle onClick={() => props.href(props.name.toLowerCase())}>
      <Flag src={props.flag} alt="flag" />
      <Details>
        <Header>{props.name}</Header>
        <Paragraph>
          <span>Population</span>: {props.population}
        </Paragraph>
        <Paragraph>
          <span>Region</span>: {props.region}
        </Paragraph>
        <Paragraph>
          <span>Capital</span>: {props.capital}
        </Paragraph>
      </Details>
    </CardStyle>
  );
};

export default withRouter(Card);
