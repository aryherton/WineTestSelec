import styled from 'styled-components';

export const MenuTopWrapper = styled.div`
  width: 290px;
  height: 56px;
  background-color: ${props => props.theme.colors.backgroundCard};

  ul {
    /* color: ${props => props.theme.colors.textPrimary}; */
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 100%;
    height: 100%;

    a:hover {
      li {
        width: 57px;
        height: 57px;
      }
    }

    li{
        width: 56px;
        height: 56px;
    }
    #liWineBox{
        position: relative;
        #qtdWineBox {
            position: absolute;
            margin-left: 37px;
            margin-top: -23px;
            border-radius: 50%;
            color: green;
            text-align: center;
            background-color: white;
            width: 17px;
            height: 17px;
        }
    }
  }
`;