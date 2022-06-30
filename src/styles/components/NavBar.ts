import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  width: 479px;
  height: 24px;
  background-color: yellow;

  ul {
    /* color: ${props => props.theme.colors.textPrimary}; */
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 100%;
    height: 100%;
    li {
        height: 100%;
    }
  }
`;