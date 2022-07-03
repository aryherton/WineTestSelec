import styled from 'styled-components';

export const MainPageProductWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;

  section {
    width: 640px;
    height: 580px;
    padding-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 381px;
      height: 579px;
    }
  }

  aside {
    width: 463px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;

    #infoName {
      width: 100%;
      height: 90px;
      color: #C81A78;
      font-size: 14x;
      line-height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      #country {
        width: 244px;
        height: 14px;
        display: flex;
        justify-content: space-evenly;

        .iconMaiorq {
          color: #888888;
        }
        
        #nameRegion {
          color: #888888;
        }
      }

      #productName {
        color: #111111;
        font-size: 28px;
        line-height: 28px;
      }
    }

    #infoProduct {
      width: 300px;
      height: 24px;
      font-size: 14px;
      font: small;
      color: #555555;
      line-height: 24px;
      display: flex;
      justify-content: space-around;

      #miniImgRegion {
        width: 16px;
        height: 16px;
      }
    }

    #divPrice {
      width: 320px;
      height: 59px;
      color: #C81A78;
      line-height: 18px;

      #priceSocio{
        display: flex;
        justify-content: space-evenly;
        width: 120px;
        height: 32px;
        font-size: 24px;
        font-weight: bold;

        #textSimb {
          font-weight: bold;
          font-size: 14px;
          align-self: flex-start;
        }
      }

      #priceNoSocio {
        font-size: 14px;
        line-height: 19px;
        color: #888888;
      }
    }

    #comentarioSomelier {
      width: 448px;
      height: 137px;

      #titelComentario {
        width: 100%;
        height: 24px;
        font-size: 16px;
        line-height: 24px;
        color: #111111;
        font-weight: bolder;
      }

      #textComentario {
        width: 100%;
        height: 105px;
        color: #666666;
        size: 14px;
        line-height: 21px;
      }
    }
  }
`;