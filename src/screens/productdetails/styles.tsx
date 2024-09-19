import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;
export const LoadingContainerStyled = styled(Container)`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const ImgStyled = styled.img`
  width: 250px;
  height: 300px;
  margin-top:20px;
`;

export const TitleStyled = styled.h1`
  font-size: 1.5em;
 text-align: center;
  margin-bottom: -5px;
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptIOnStyled = styled.p`
  font-size: 0.9em;;
`;