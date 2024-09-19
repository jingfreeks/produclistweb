import React, { useCallback, Suspense } from "react";
import { Container,LoadingContainerStyled } from "./styles";
import { useGetProductQuery } from "../../slice/producSlice";
import { ListItem, } from "./component";
const Product = () => {
  const {
    data: product,
    isLoading,
  } = useGetProductQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>("getProduct");

  const renderProduct = useCallback(() => {
    let productItem = product;
    return product?.ids.map((item: string) => {
      return <ListItem key={item} item={productItem?.entities[item]} />;
    });
  }, [product]);
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
      <div>
        <ul>{renderProduct()}</ul>
      </div>
    </Container>
  );
};

export default Product;
