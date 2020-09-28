import styled from "styled-components";

const Button =styled.div(
  props =>`
  padding: 1rem 4rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 4rem;
  margin: 6rem 10%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 2rem;
`);

export default Button;
