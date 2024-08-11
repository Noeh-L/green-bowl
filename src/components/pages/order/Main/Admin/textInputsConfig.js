import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const textInputsConfig = (newProduct, setNewProduct) => {
  const { title, imageSource, price } = newProduct;

  return [
    {
      id: 1,
      value: title,
      onChange: (e) => setNewProduct({ ...newProduct, title: e.target.value }),
      Icon: FaHamburger,
      placeholder: "Nom du produit (ex: Super Burger)",
      className: "text-inputs",
    },
    {
      id: 2,
      value: imageSource,
      onChange: (e) =>
        setNewProduct({ ...newProduct, imageSource: e.target.value }),
      Icon: BsFillCameraFill,
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      className: "text-inputs",
    },
    {
      id: 3,
      value: price,
      onChange: (e) => setNewProduct({ ...newProduct, price: e.target.value }),
      Icon: MdOutlineEuro,
      placeholder: "Prix",
      className: "text-inputs",
    },
  ];
};
