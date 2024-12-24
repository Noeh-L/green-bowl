/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "@/theme/theme";
import { ComponentProps } from "react";

type LogoProps = {
  scale: number;
} & ComponentProps<"h1">;

function Logo({ scale, ...extraProps }: LogoProps) {
  return (
    <TitleStyled $scale={scale} {...extraProps}>
      <div>GREEN</div>
      <img src={"/assets/logo-orange.png"} alt="Logo d'un burger" />
      <div>BOWL</div>
    </TitleStyled>
  );
}

type TitleStyledType = {
  $scale: number;
};

const TitleStyled = styled.h1<TitleStyledType>`
  font-family: ${theme.family.stylish};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 7px;
  letter-spacing: 1.5px;
  font-size: ${theme.fonts.P5};
  transform: scale(${({ $scale }) => $scale});

  img {
    height: 65px;
  }
`;

export default Logo;
