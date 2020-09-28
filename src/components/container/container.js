import styled from "styled-components";

const Container = styled.div(
  (props) => `
    display: flex;
    width: 80%;
    justify-content: center;
    flex-flow: ${props.type} wrap;
    margin: 2rem auto;
  `
);

export default Container;
//
