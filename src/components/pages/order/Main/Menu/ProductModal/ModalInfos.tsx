import { MenuProduct } from "@/types/Product";
import ModalTag from "./ModalTag";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { formatPrice } from "@/utils/maths";
import { FaShoppingCart } from "react-icons/fa";
import Button from "@/components/reusable-ui/Button";
import { useOrderContext } from "@/context/OrderPageContext";
import { displayToast } from "@/utils/displayToast";
import styled from "styled-components";
import { theme } from "@/theme/theme";

type ModalInfosProps = {
  product: MenuProduct;
};

function ModalInfos({ product }: ModalInfosProps) {
  const { handleAddToBasket } = useOrderContext();

  return (
    <ModalInfosStyled>
      <div className="productPicture">
        <img src={product.imageSource} alt={product.title} />
      </div>
      <div className="productDetails">
        <div className="productTags">
          <ModalTag Icon={TbBowlSpoonFilled} label="Vegan" />
          <ModalTag label="Sans gluten" />
          <ModalTag Icon={TbBowlSpoonFilled} label={"1000"} />
        </div>
        <div className="productDescription">
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            mollitia culpa pariatur cum aliquid
          </p>
        </div>
      </div>
      <div className="priceAndAddBtn">
        <p className="price">{formatPrice(product.price)}</p>
        <div className="separator"></div>
        <Button
          className="addToBasketBtn"
          label="Ajouter au panier"
          Icon={FaShoppingCart}
          onClick={() => {
            handleAddToBasket(product);
            displayToast("success", "Produit ajouté au panier", 3000);
          }}
        />
      </div>
    </ModalInfosStyled>
  );
}

const ModalInfosStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  .productPicture {
    height: 175px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${theme.borderRadius.extraRound};
      filter: drop-shadow(0px 0px 8px ${theme.colors.greyMedium});
    }
  }

  .productDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing.md};

    .productTags {
      display: flex;
      gap: ${theme.spacing.sm};
      width: 100%;
      flex-wrap: wrap;
    }

    .productDescription {
      h4 {
        font-size: ${theme.fonts.P0};
        margin-bottom: ${theme.spacing.xxs};
        color: ${theme.colors.dark};
        font-weight: ${theme.weights.bold};
        font-family: ${theme.family.minimalist};
      }

      p {
        margin: 0;
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.dark};
        text-align: justify;
        max-height: 100px;
        padding-right: ${theme.spacing.xs};
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.greyMedium} transparent;
      }
    }
  }

  .priceAndAddBtn {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.lg};
    margin-top: auto;
    margin-left: auto;

    .price {
      font-size: ${theme.fonts.P1};
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.semiBold};
    }

    .separator {
      width: 1px;
      height: 30px;
      background: ${theme.colors.greyMedium};
    }

    .addToBasketBtn {
      flex: 1/2;
    }
  }
`;

export default ModalInfos;
