import React from 'react';
import styled from 'styled-components';
import { withRouter} from 'react-router-dom';

const NavStyle = styled.nav`
  width: 100%;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  display: grid;
  grid-template-columns: 10% 80% 10%;
`
const Header = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-right: auto;
  grid-column: 2/3;
  margin-left: auto;
`

const Nav = props =>{
  const sendToHome =() =>{
    props.history.push("/");
  }
  return (
    <NavStyle>
      <Header onClick={sendToHome}>Where In The World ? </Header>
    </NavStyle>
    )
}

export default withRouter(Nav);

