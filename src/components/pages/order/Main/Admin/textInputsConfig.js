import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getTextInputsConfig = (newProduct) => {
  return [
    {
      id: "1",
      name: "title",
      value: newProduct.title,
      Icon: FaHamburger,
      placeholder: "Nom du produit (ex: Super Burger)",
    },
    {
      id: "2",
      name: "imageSource",
      value: newProduct.imageSource,
      Icon: BsFillCameraFill,
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    },
    {
      id: "3",
      name: "price",
      value: newProduct.price ? newProduct.price : "",
      Icon: MdOutlineEuro,
      placeholder: "Prix",
    },
  ];
};
