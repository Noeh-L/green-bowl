import { css, keyframes } from "styled-components";

export const panelAnimation = css`
  .admin-enter {
    /* bottom: -100%; */ // This line causes the collpasing bug when a card is selected.
    bottom: -150px;
    opacity: 0;
  }
  .admin-enter-active {
    bottom: 0;
    opacity: 1;
    transition: 0.5s;
  }
  .admin-enter-done {
  }

  .admin-exit {
    bottom: 0;
  }
  .admin-exit-active {
    bottom: -100%;
    transition: 0.5s;
  }
`;

export const imagePreviewAppearAnimation = css`
  .imgPreview-appear {
    opacity: 0;
  }
  .imgPreview-appear-active {
    opacity: 1;
    transition: 0.5s;
  }
  .imgPreview-appear-done {
    opacity: 1;
  }

  .imgPreview-enter {
    opacity: 0;
  }
  .imgPreview-enter-active {
    opacity: 1;
    transition: 0.5s;
  }
  .imgPreview-enter-done {
    opacity: 1;
  }

  .imgPreview-exit {
    opacity: 1;
  }
  .imgPreview-exit-active {
    opacity: 0;
    transition: 0.5s;
  }
`;

export const basketCardAnimation = css`
  .basketCard-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .basketCard-appear-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: 0.5s;
  }

  .basketCard-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .basketCard-enter-active {
    transform: translateX(0px);
    opacity: 100%;
    transition: 0.5s;
  }

  .basketCard-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .basketCard-exit-active {
    transform: translateX(-100px);
    opacity: 0%;
    transition: 0.3s;
  }
`;

export const deleteButtonAnimation = css`
  .deleteButton-enter {
    right: 0px;
    opacity: 0;
  }
  .deleteButton-enter-active {
    right: 15px;
    opacity: 1;
    transition: 0.3s;
  }
  .deleteButton-enter-done {
    right: 15px;
    opacity: 1;
    transition: 0.3s;
  }

  .deleteButton-exit {
    right: 15px;
  }
  .deleteButton-exit-active {
    right: 0px;
    opacity: 0;
    transition: 0.3s;
  }
`;

export const menuCardAnimation = css`
  /* MOUNTING OF FIRST INSTANCE */
  .card-appear {
    opacity: 0;
    position: relative;
    left: -100px;
  }
  .card-appear-active {
    opacity: 1;
    left: 0;
    transition: 0.5s;
  }
  .card-appear-done {
    opacity: 1;
  }

  /* CARD MOUNTING */
  .card-enter {
    opacity: 0;

    position: relative;
    left: -100px;
  }
  .card-enter-active {
    opacity: 1;
    left: 0;
    transition: 0.5s;
  }
  .card-enter-done {
    opacity: 1;
  }

  /* CARD UNMOUNTING */
  .card-exit {
    opacity: 1;
  }
  .card-exit-active {
    opacity: 0;
    transition: 0.3s;
  }
`;

export const casinoEffectAnimation = css`
  /* MOUNTING */
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 0.5s;
  }
  .count-animated-enter-done {
  }

  /* UNMOUNTING */
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 0.5s;
  }
`;

export const outOfStockAnimation = css`
  /* MOUNTING */
  .outOfStock-enter {
    transform: translate(-50%, -100%);
  }
  .outOfStock-enter-active {
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }
  .outOfStock-enter-done {
  }

  /* UNMOUNTING */
  .outOfStock-exit {
    transform: translate(-50%, -50%);
  }
  .outOfStock-exit-active {
    transform: translate(-50%, -100%);
    opacity: 0;
    transition: 0.5s;
  }
`;

export const ribbonAnimation = css`
  /* MOUNTING */
  .ribbon-enter {
    transform: scale(1.3);
    opacity: 0;
  }
  .ribbon-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: 0.5s;
  }
  .ribbon-enter-done {
  }

  /* UNMOUNTING */
  .ribbon-exit {
    transform: scale(1);
  }
  .ribbon-exit-active {
    transform: scale(1.2);
    opacity: 0;
    transition: 0.5s;
  }
`;

export const badgeAnimation = keyframes`
from {
  opacity: 0
} to {
  opacity: 1
}
`;
