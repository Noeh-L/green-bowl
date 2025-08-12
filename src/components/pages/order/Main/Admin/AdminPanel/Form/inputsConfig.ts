import { Input } from "@/types/Input";
import { MenuProduct } from "@/types/Product";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { MdDescription, MdOutlineEuro } from "react-icons/md";
import { TbBowlSpoonFilled } from "react-icons/tb";

export const getInputsConfig = (newProduct: MenuProduct): Input[] => {
  return [
    {
      id: "0",
      name: "title",
      value: newProduct.title,
      Icon: FaHamburger,
      placeholder: "Nom du produit (ex: Super Salad)",
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
      value: newProduct.isAvailable.toString(), // <select> and <option> does not accept a boolean type value
      Icon: FiPackage,
      className: "available isCompacted",
      options: [
        { id: "1", value: "true", label: "En stock" },
        { id: "2", value: "false", label: "En rupture" },
      ],
    },
    {
      id: "4",
      name: "isAdvertised",
      value: newProduct.isAdvertised.toString(),
      Icon: GoMegaphone,
      className: "advertising isCompacted",
      options: [
        { id: "1", value: "false", label: "Sans pub" },
        { id: "2", value: "true", label: "Avec pub" },
      ],
    },
    {
      id: "5",
      name: "calories",
      value: newProduct.calories === null ? "" : String(newProduct.calories),
      Icon: TbBowlSpoonFilled,
      placeholder: "Calories (ex: 560)",
      className: "calories isCompacted",
    },
    {
      id: "6",
      name: "description",
      value: newProduct.description,
      Icon: MdDescription,
      placeholder:
        "Description du produit (ex: Une délicieuse salade de fruits !)",
      type: "textarea",
    },
  ];
};
