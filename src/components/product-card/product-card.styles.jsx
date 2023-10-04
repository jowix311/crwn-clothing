import styled from "styled-components";
import { InvertedButton } from "../button/button.styles";

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  .name {
    width: 90%;
    margin-bottom: 15px;
  }
  .price {
    width: 10%;
  }
`;
