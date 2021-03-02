import React from "react";
import {
  FullSubtotal,
  SubtotalGift,
  SubtotalGiftInput,
  SubtotalButton,
} from "./Subtotal.style";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <FullSubtotal>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 produse): <strong>0</strong>
            </p>
            <SubtotalGift>
              <SubtotalGiftInput type="checkbox" />
              Aceasta comanda contine un cadou
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"RON"}
      />
      <SubtotalButton>Incepe verificarea</SubtotalButton>
    </FullSubtotal>
  );
}

export default Subtotal;
