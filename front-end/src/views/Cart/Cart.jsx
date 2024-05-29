import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartSummary } from "../../components/CartSummary/CartSummary";

export function Cart() {
  const [cartItems] = useContext(CartContext);

  return (
    <>
      <FlexContainer>
        <CartProductsList products={cartItems} />
        <CartSummary products={cartItems} />
      </FlexContainer>
    </>
  );
}
