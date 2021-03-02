import styled from "styled-components";

export const SProduct = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
`;

export const ProductButton = styled.button`
  background: #f36d38;
  border: 1px solid;
  margin-top: 100px;
  padding: 5px 16px;
  border-color: #f36d38 #f36d38 #f36d38;
  color: #111111;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const ProductRating = styled.div`
  display: flex;
`;

export const ProductInfo = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const ProductPrice = styled.p`
  margin-top: 5px;
`;
