import { MenuProduct } from "@/types/Product";

export const EMPTY_PRODUCT: MenuProduct = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isAdvertised: false,
};

export const IMAGE_BY_DEFAULT = "/assets/coming-soon.png";
export const IMAGE_NO_STOCK = "/assets/stock-epuise.png";

export const UNAVAILABLE_MSG = "Non disponible" as const;
