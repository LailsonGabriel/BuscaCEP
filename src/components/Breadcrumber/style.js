import styled from "styled-components";

export const BreadContainer = styled.div`
  display: flex;
  font-size: 15px;
  a {
    font-family: "Helvetica";
    color: black;
    text-decoration: none;
    margin-left: 5px;
  }
  a:first-child:after, a:first-child {
    content: ' >';
    color: blue;
  }
`;