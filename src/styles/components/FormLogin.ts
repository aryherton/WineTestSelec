import styled from 'styled-components';

export const FormLoginWrapper = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  form {
    height: 300px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin-bottom: 40px;

    #divInputsLogin {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 50%;
    }

    input {
      border: none;
      border-radius: 8px;
      width: 80%;
      height: 30px;
      background-color: #F9B787;
      text-align: center;
    }

    #divButtonEnterRegister {
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      #buttonFormLogin {
        width: 40%;
        color: white;
        font-weight: bolder;
        font-size: 14px;
        background-color: #7EBC43;
      }

      #buttonFormLogin:hover {
        width: 43%;
        font-size: 16px;
        background-color: #4EBC43;
      }

      #textRegistreSe {
        align-self: flex-end;
        margin-right: 15px;
        font-weight: bolder;
        color: blue;
      }
    }
  }
`;