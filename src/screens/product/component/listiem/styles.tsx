import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 400px;
  border: 1px solid black;
  margin-top: 10px;
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgStyled = styled.img`
  width: 250px;
  height: 200px;
`;

export const TitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: -5px;
`;
export const DescriptIOnStyled = styled.p`
  font-size: 0.7em;
  margin-left: 10px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
