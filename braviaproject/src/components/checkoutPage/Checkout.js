import React from "react";
import BraviaBanner from "../../img/BraviaBanner.jpg";
import { FullCheckout, CheckoutAd, CheckoutTitle } from "./Checkout.style";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <FullCheckout>
      <div className="checkout__left">
        <CheckoutAd src={BraviaBanner} />
        <div>
          <CheckoutTitle>Cosul de cumparaturi</CheckoutTitle>
          {/* BascketItem */}
          {/* BascketItem */}
          {/* BascketItem */}
          {/* BascketItem */}
          {/* BascketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </FullCheckout>
  );
}

export default Checkout;
