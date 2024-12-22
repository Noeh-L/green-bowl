import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { MdOutlineEuro } from "react-icons/md";

export const getInputsConfig = (newProduct) => {
  return [
    {
      id: "0",
      name: "title",
      value: newProduct.title,
      Icon: FaHamburger,
      placeholder: "Nom du produit (ex: Super Burger)",
    },
    {
      id: "1",
      name: "imageSource",
      value: newProduct.imageSource,
      Icon: BsFillCameraFill,
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    },
    {
      id: "2",
      name: "price",
      value: newProduct.price ? newProduct.price : "",
      Icon: MdOutlineEuro,
      placeholder: "Prix",
      className: "price isCompacted",
    },
    {
      id: "3",
      name: "isAvailable",
      value: newProduct.isAvailable,
      Icon: FiPackage,
      className: "available isCompacted",
      options: [
        { id: "1", value: true, label: "En stock" },
        { id: "2", value: false, label: "En rupture" },
      ],
    },
    {
      id: "4",
      name: "isAdvertised",
      value: newProduct.isAdvertised,
      Icon: GoMegaphone,
      className: "advertising isCompacted",
      options: [
        { id: "1", value: false, label: "Sans pub" },
        { id: "2", value: true, label: "Avec pub" },
      ],
    },
  ];
};
