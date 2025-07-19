// import { useOrderContext } from "@/context/OrderPageContext";
import { theme } from "@/theme/theme";
import { MenuProduct } from "@/types/Product";
import { MouseEventHandler } from "react";
import { TfiClose } from "react-icons/tfi";
import styled from "styled-components";
import ModalTitle from "./ModalTitle";
import ModaltInfos from "./ModalInfos";

type ProductModalProps = {
  product: MenuProduct;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

function ProductModal({ product, onClose }: ProductModalProps) {
  // render
  return (
    <ModalStyled>
      <ModalTitle product={product} />
      <button className="closeModalBtn" onClick={onClose}>
        <TfiClose className="close-icon" />
      </button>
      <ModaltInfos product={product} />
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
`;

export default ProductModal;
