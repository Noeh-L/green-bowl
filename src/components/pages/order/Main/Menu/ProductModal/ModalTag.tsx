import { theme } from "@/theme/theme";
import { IconType } from "react-icons";
import styled from "styled-components";

type ModalTaglProps = {
  Icon?: IconType;
  label: string;
};

function ModalTag({ Icon, label }: ModalTaglProps) {
  return (
    <ModalTagStyled className="productTags__calories">
      {Icon && <Icon className="tagIcon" />}
      <div>{label}</div>
    </ModalTagStyled>
  );
}

const ModalTagStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.greyLight};
  padding: ${theme.spacing.xxs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  color: ${theme.colors.dark};
  box-shadow: 0 0 6px 1px rgba(78, 77, 77, 0.25);
  font-size: ${theme.fonts.SM};
  cursor: default;
  white-space: nowrap;

  .tagIcon {
    font-size: ${theme.fonts.P1};
    color: ${theme.colors.primary};
  }
`;

export default ModalTag;
