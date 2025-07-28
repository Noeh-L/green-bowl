import { MenuProduct } from "@/types/Product";

const EMPTY: MenuProduct[] = [];

const SMALL: MenuProduct[] = [
  {
    id: "1",
    imageSource: "/assets/burger1.png",
    title: "Burger 1",
    price: 5.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/assets/burger2.png",
    title: "Burger 2",
    price: 7.556,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

const MEDIUM: MenuProduct[] = [
  {
    id: "1",
    imageSource: "/assets/burger-bacon-egg.png",
    title: "Burger Smoke BBQ",
    price: 5.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/assets/burger-vegan.png",
    title: "Vegan Burger",
    price: 5.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "3",
    imageSource: "/assets/burger3.png",
    title: "Burger poulet",
    price: 5.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "4",
    imageSource: "/assets/drink1.png",
    title: "Coke 25cl",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "5",
    imageSource: "/assets/drink2.png",
    title: "Pepsi 25cl",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

const LARGE: MenuProduct[] = [
  {
    id: "1",
    imageSource: "/assets/bowl1.png",
    title: "Sashimi Fusion Bowl",
    price: 13.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 450,
    description:
      "Saumon frais, riz vinaigré, avocat et légumes croquants. Sauce soja et wasabi.",
  },
  {
    id: "2",
    imageSource: "/assets/bowl5.png",
    title: "Potatoe Salad",
    price: 9.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 500,
    description:
      "Pommes de terre grenailles, œufs durs, oignons rouges et ciboulette. Sauce mayonnaise légère.",
  },
  {
    id: "3",
    imageSource: "/assets/bowl4.png",
    title: "Salmon Bowl",
    price: 14.501,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 540,
    description:
      "Saumon mariné, riz parfumé, edamame, avocat et graines de sésame. Sauce teriyaki maison.",
  },
  {
    id: "4",
    imageSource: "/assets/bowl2.png",
    title: "Avocado Feast",
    price: 11.495,
    quantity: 0,
    isAvailable: true,
    isAdvertised: true,
    calories: 380,
    description:
      "Avocat, quinoa, tomates cerises, concombre et pousses d'épinards. Vinaigrette au citron vert.",
  },
  {
    id: "5",
    imageSource: "/assets/bowl3.png",
    title: "Chicken Salad",
    price: 12.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 650,
    description:
      "Poulet grillé, salade romaine, parmesan, croûtons et bacon croustillant. Sauce césar.",
  },
  {
    id: "6",
    imageSource: "/assets/sweet-fries.png",
    title: "Sweet Plate",
    price: 7.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 400,
    description:
      "Patates douces frites, assaisonnement aux herbes et épices. Sauce sweet chili.",
  },
  {
    id: "7",
    imageSource: "/assets/burger-vegan.png",
    title: "Burger Vegan",
    price: 8.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 250,
    description:
      "Steak végétal aux légumineuses, salade, tomate, oignon rouge. Sauce végane spéciale.",
  },
  {
    id: "8",
    imageSource: "/assets/sweet-fries-bucket.png",
    title: "Sweet Bucket",
    price: 4,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 500,
    description:
      "Portion généreuse de frites de patates douces. Servi avec un assortiment de sauces maison.",
  },
  {
    id: "9",
    imageSource: "/assets/drink5.png",
    title: "Rainbow Smoothie",
    price: 8.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 420,
    description:
      "Smoothie aux fruits frais : mangue, fraise, fruits rouges. Sans sucres ajoutés.",
  },
  {
    id: "10",
    imageSource: "/assets/drink4.png",
    title: "Bubble Tea Vanilla",
    price: 3.9,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 120,
    description:
      "Thé au lait parfumé à la vanille avec perles de tapioca. Personnalisable en sucre.",
  },
  {
    id: "11",
    imageSource: "/assets/drink6.jpg",
    title: "Oasis Pomme Cassis Framboise",
    price: 2.5,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 360,
    description:
      "Boisson rafraîchissante aux saveurs de pomme, cassis et framboise. Sans édulcorants.",
  },
  {
    id: "12",
    imageSource: "/assets/ice-cream.png",
    title: "Glaces artisanales",
    price: 2.9,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    calories: 210,
    description:
      "Sélection de glaces artisanales aux parfums variés. Fabrication locale.",
  },
];

export const fakeMenu = {
  EMPTY,
  SMALL,
  MEDIUM,
  LARGE,
};
