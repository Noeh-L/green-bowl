// import { useOrderContext } from "@/context/OrderPageContext";
import { theme } from "@/theme/theme";
import { MenuProduct } from "@/types/Product";
import { MouseEventHandler } from "react";
import styled from "styled-components";

type ProductModalProps = {
  product: MenuProduct;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

function ProductModal({ product, onClose }: ProductModalProps) {
  // render
  return (
    <ModalStyled>
      <h1>{product.title}</h1>
      <button onClick={onClose}>Fermer</button>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  height: 80%;
  width: 600px;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.subtle};
  padding: 1.5rem 2rem;
`;

export default ProductModal;
