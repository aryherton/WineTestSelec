import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 88.23px;
  background-color: ${props => props.theme.colors.backgroundCard};

  #logo_wine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 90%;
    background-color: transparent;
  }

  h1 {
    color: ${props => props.theme.colors.textPrimary};
  }
`;