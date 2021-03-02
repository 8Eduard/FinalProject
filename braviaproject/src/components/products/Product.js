import React from "react";
import {
  SProduct,
  ProductInfo,
  ProductPrice,
  ProductImage,
  ProductButton,
  ProductRating,
} from "./Product.style";

function Product({ title, image, price, rating }) {
  return (
    <SProduct>
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <strong>{price}</strong>
          <small>RON</small>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </ProductRating>
        <ProductImage src={image} alt="StretchManual" />
      </ProductInfo>
      <ProductButton>Adauga in cos</ProductButton>
    </SProduct>
  );
}

export default Product;
