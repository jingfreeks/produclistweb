import React from "react";
import {
  Container,
  InfoContainerStyled,
  ImgStyled,
  TitleStyled,
  DescriptIOnStyled,
  StyledLink
} from "./styles";
import { useNavigate, Link } from "react-router-dom";
function Listitem({ item }:{item:{image?:string;title?:string;category?:string;price?:string,_id:string;decription:string}}) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/${item._id}`)}>
      <StyledLink to="">
        <InfoContainerStyled>
          <ImgStyled src={item.image} alt="new" />
          <TitleStyled>{item.title}</TitleStyled>
          <DescriptIOnStyled>{item.decription}</DescriptIOnStyled>
          <DescriptIOnStyled>Category:{item.category}</DescriptIOnStyled>
          <DescriptIOnStyled>Price:{item.price}</DescriptIOnStyled>
        </InfoContainerStyled>
      </StyledLink>
    </Container>
  );
}

export default Listitem;
