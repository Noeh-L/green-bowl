import { useOrderContext } from "../../../../../../context/OrderPageContext";
import { isArrayEmpty } from "../../../../../../utils/array";
import BasketProducts from "./BasketProducts";
import EmptyBasket from "./EmptyBasket";

function BasketBody() {
  const { basket } = useOrderContext();
  const isBasketEmpty = isArrayEmpty(basket);

  return <>{isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}</>;
}

export default BasketBody;
