import { theme } from "@/theme/theme";
import { MenuProduct } from "@/types/Product";
import { BiFoodMenu } from "react-icons/bi";
import styled from "styled-components";

type ModalTitleProps = {
  product: MenuProduct;
};

function ModalTitle({ product }: ModalTitleProps) {
  return (
    <ModalTitleStyled>
      <BiFoodMenu className="modalIcon" />
      <h2>{product.title}</h2>
    </ModalTitleStyled>
  );
}

const ModalTitleStyled = styled.div`
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
`;

export default ModalTitle;
