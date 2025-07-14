// import { useOrderContext } from "@/context/OrderPageContext";
import Button from "@/components/reusable-ui/Button";
import { useOrderContext } from "@/context/OrderPageContext";
import { theme } from "@/theme/theme";
import { MenuProduct } from "@/types/Product";
import { displayToast } from "@/utils/displayToast";
import { formatPrice } from "@/utils/maths";
import { MouseEventHandler } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
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
      <div className="modalTitle">
        <BiFoodMenu className="modalIcon" />
        <h2>{product.title}</h2>
      </div>
      <button className="closeModalBtn" onClick={onClose}>
        <TfiClose className="close-icon" />
      </button>
      <div className="productInfos">
        <div className="productPicture">
          <img src={product.imageSource} alt={product.title} />
        </div>
        <div className="productDetails">
          <div className="productTags">
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>2 kCal</div>
            </div>
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>236 kCal</div>
            </div>
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>20025w kCal</div>
            </div>
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>1000 kCal</div>
            </div>
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>20025w kCal</div>
            </div>
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>1000 kCal</div>
            </div>
            <div className="productTags__calories">
              <TbBowlSpoonFilled className="tagIcon" />
              <div>20025w kCal</div>
            </div>
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

  max-height: 85%;
  width: 650px;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.greyMedium} transparent; //putting this line make the modal "overflow:hidden"

  .modalTitle {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};

    .modalIcon {
      font-size: ${theme.fonts.P4};
      color: ${theme.colors.primary};
    }

    h2 {
      margin: 0;
      font-size: 1.8rem;
      color: ${theme.colors.dark};
      font-family: ${theme.family.stylish};
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      max-width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 5px;
        height: 3px;
        width: 45px;
        background: ${theme.colors.primary};
        border-radius: ${theme.borderRadius.round};
      }
    }
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
      font-size: ${theme.fonts.P1};
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
          white-space: nowrap;

          .tagIcon {
            font-size: ${theme.fonts.P1};
            color: ${theme.colors.primary};
          }
        }
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
  }
`;

export default ProductModal;
