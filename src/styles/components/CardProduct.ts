import styled from 'styled-components';

export const CardProductWrapper = styled.div`
  width: 75%;
  height: 100%;
  padding-top: 23px;
  /* background-color: yellow; */
  
  p {
    height: 10%;
    margin-bottom: 15px;
    padding-left: 10px;
  }

  #mainProduct {
    height: 90%;
    display: flex;
    flex-wrap: wrap;

    #cardProduct {
      width: 256px;
      height: 387px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      a {
          cursor: pointer;
        }

      #dataPorduct {
        width: 256px;
        height: 333px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.2);

        #imgWineFlag {
          width: 198.57px;
          height: 178.13px;
          display: flex;
          padding-left: 35px;
          align-items: flex-end;

          #imgWines {
            img {
              width: 120px;
              height: 178.13px;
              object-fit: cover;
            }
          }

          #flag {
            img {
              width: 15px;
              height: 15px;
            }
          }
        }

        #nameWine {
          width: 232.64px;
          height: 42.83px;
          font-size: 14px;
          font-weight: bolder;
        }

        #valuePrice {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          height: 20px;
          font-size: 11px;
          font-weight: bolder;

          #price {
            text-decoration: line-through;
            color: #888888;
          }

          #discount {
            padding-top: 3px;
            background-color: #f79552;
            border-radius: 8%;
            width: 30%;
            text-align: center;
            color: white;
            height: 100%;
          }
        }

        #textSocioPrice {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 90%;
          font-size: 11px;
          font-weight: bolder;

          #textSocio {
            color: #1D1D1B;
          }

          #priceMember {
            color: #B6116E;
            font-size: 18px;
          }
        }

        #textNonMemberPrice {
          display: flex;
          justify-content: space-evenly;
          width: 80%;
          font-size: 14px;
          text-align: center;
          color: #888888;
          font-weight: bolder;
        }
      }

      #divButton {
        width: 100%;
        margin-top: 8px;
        #buttonCard {
          color: white;
          width: 100%;
          height: 39.36px;
          border-radius: 4%;
          background-color: #7EbC43;
        }
      }
    }
  }
`;