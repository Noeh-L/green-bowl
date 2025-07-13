// import { useOrderContext } from "@/context/OrderPageContext";
import Button from "@/components/reusable-ui/Button";
import { useOrderContext } from "@/context/OrderPageContext";
import { theme } from "@/theme/theme";
import { MenuProduct } from "@/types/Product";
import { displayToast } from "@/utils/displayToast";
import { formatPrice } from "@/utils/maths";
import { MouseEventHandler } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbBowlSpoonFilled } from "react-icons/tb";
import styled from "styled-components";

type ProductModalProps = {
  product: MenuProduct;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

function ProductModal({ product, onClose }: ProductModalProps) {
  const { handleAddToBasket } = useOrderContext();

  // render
  return (
    <ModalStyled>
      <h1>{product.title}</h1>
      <button className="closeModalBtn" onClick={onClose}>
        <IoClose className="close-icon" />
      </button>
      <div className="productInfos">
        <div className="productPicture">
          <img src={product.imageSource} alt={product.title} />
        </div>
        <div className="productDetails">
          <div className="productTags">
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>1000 kCal</div>
            </div>
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
      </div>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  height: 85%;
  width: 650px;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.8rem;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.dark};
  }

  .closeModalBtn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    color: ${theme.colors.dark};
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    aspect-ratio: 1 / 1;
    border-radius: ${theme.borderRadius.round};
    transition: all ease 0.2s;

    .close-icon {
      font-size: ${theme.fonts.P2};
    }

    &:hover {
      background: ${theme.colors.greyLight};
    }
  }

  .productInfos {
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
        border-radius: ${theme.borderRadius.round};
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

        &__calories {
          display: flex;
          align-items: center;
          gap: ${theme.spacing.xs};
          background: ${theme.colors.greyLight};
          padding: ${theme.spacing.xxs} ${theme.spacing.sm};
          border-radius: ${theme.borderRadius.round};
          color: ${theme.colors.dark};
          box-shadow: 0 0 5px rgba(55, 55, 55, 0.2);
          font-size: ${theme.fonts.SM};
          cursor: default;

          .tagIcon {
            font-size: ${theme.fonts.P1};
            color: ${theme.colors.primary};
          }
        }
      }

      .productDescription {
        h4 {
          font-size: ${theme.fonts.P1};
          margin-bottom: ${theme.spacing.xs};
        }

        p {
          margin: 0;
          font-size: ${theme.fonts.P0};
          color: ${theme.colors.dark};
          text-align: justify;
          height: 100px;
          padding-right: ${theme.spacing.xs};
          overflow: auto;
          scrollbar-width: thin;
          scrollbar-color: ${theme.colors.greyMedium} transparent;
        }
      }
    }

    .priceAndAddBtn {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: ${theme.spacing.lg};
      margin-top: auto;

      .price {
        font-size: ${theme.fonts.P1};
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.semiBold};
      }

      .addToBasketBtn {
        flex: 1/2;
      }
    }
  }
`;

export default ProductModal;
