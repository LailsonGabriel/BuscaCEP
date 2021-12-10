const { default: styled } = require("styled-components");

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  label {
    margin-right: 10px;
    padding: 20px 0px;
  }
  button, svg {
    background-color: transparent;
    border: none;
    font-size: 23px;
    flex-basis: 1;
  }
  input {
    background-color: #2B3792;
    height: 25px;
    border-radius: 3px;
    color: #f0efeb;
    padding: 0px 5px;
    font-size: 15px;
    width: 400px;
  }
  input:hover, input:focus {
    border: red 1px solid;
  }
`;