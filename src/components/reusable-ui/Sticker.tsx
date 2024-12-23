import styled from "styled-components";
import { theme } from "@/theme/theme";

type StickerProps = {
  label?: string;
  className?: string;
  scale?: string;
};

type StickerStyledProps = {
  $scale?: string;
};

export default function Sticker({
  label = "new",
  className,
  scale = "1",
}: StickerProps) {
  return (
    <StickerStyled className={className} $scale={scale}>
      {label}
    </StickerStyled>
  );
}

const StickerStyled = styled.span<StickerStyledProps>`
  font-size: ${theme.fonts.XXXS};
  padding: 1em;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.redSecondary};
  border: none;
  color: white;
  text-transform: uppercase;
  ${({ $scale }) => `transform: scale(${$scale})`};
`;
