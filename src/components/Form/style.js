import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  h1 {
    color: #e63946;
    font-size:50px;
    -webkit-text-stroke: 2px #2B3792;
  }
  form {
    background-color: white;
    padding:50px;
    width: 60%;
    border-radius: 5px;
  }
  .btn-submit {
    width: 100%;
    padding: 10px;
    color: #2B3792;
    background-color: #e63946;
    border-radius:3px;
    font-size: 15px
  }
  .btn-submit:hover {
    opacity: 0.8;
  }
  p {
    text-align: center;
  }
  .header {
    display: flex;
  }
`;