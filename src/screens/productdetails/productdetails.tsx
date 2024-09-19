import React from "react";
import { useGetProdDetailsQuery } from "../../slice/producSlice";
import { useParams } from "react-router-dom";
import {
  LoadingContainerStyled,
  Container,
  ImgStyled,
  TitleStyled,
  InfoContainerStyled,
  DescriptIOnStyled,
} from "./styles";
function Productdetails() {
  const { prodId } = useParams();
  const { data: product, isLoading } = useGetProdDetailsQuery<{
    refetch: () => void;
    data: {image?:string;title?:string;category?:string;price?:string,_id:string;decription:string};
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>({ prodId: prodId });

  const Loading = () => {
    return (
      <LoadingContainerStyled>
        <h2>🌀 Loading...</h2>
      </LoadingContainerStyled>
    );
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <InfoContainerStyled>
        <ImgStyled src={product?.image} alt="new" />
        <TitleStyled>{product?.title}</TitleStyled>
      </InfoContainerStyled>
      <InfoContainerStyled>
        <DescriptIOnStyled>{product?.decription}</DescriptIOnStyled>
        <DescriptIOnStyled>Category:{product?.category}</DescriptIOnStyled>
        <DescriptIOnStyled>Price:{product?.price}</DescriptIOnStyled>
      </InfoContainerStyled>
    </Container>
  );
}

export default Productdetails;
