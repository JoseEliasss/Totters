// src/data/data.js
import zaatarWZetPhoto from "./gallery/images/ZaatarwZetImage.png";
import ZWZMDouble from "./gallery/images/ZWZMDoubles.png";
import ZWZChickenWrap from "./gallery/images/ZWZChickenWrap.png";
import ZWZHaloumiS from "./gallery/images/ZWZHaloumiS.png";
import ZWZLentil from "./gallery/images/ZWZLentil.png";
import ZWZFalafel from "./gallery/images/ZWZFalafel.png";

import RdImage from "./gallery/images/RdImage.png";
import RdBurgerCombo from "./gallery/images/RdBurgerCombo.png";
import RdChickenStrips from "./gallery/images/RdChickenStrips.png";
import RdSteak from "./gallery/images/RdSteak.png";
import RdMozzarella from "./gallery/images/RdMozzarella.png";
import RdCeasar from "./gallery/images/RdCeasar.png";

import MonMaki from "./gallery/images/MonMaki.png";
import MonMakiSushi from "./gallery/images/MonMakiSushi.png";
import MonMakiMakiMix from "./gallery/images/MonMakiMakiMix.png";
import MonMakiTunaSashimi from "./gallery/images/MonMakiTunaSashimi.png";
import MonMakiTempuraRoll from "./gallery/images/MonMakiTempuraRoll.png";
import MonMakiEdamame from "./gallery/images/MonMakiEdamame.png";

import PastaDiRoma from "./gallery/images/PastaDiRoma.png";
import SpaghettiCarbonara from "./gallery/images/SpaghettiCarbonara.png";
import PenneArabiata from "./gallery/images/PenneArabiata.png";
import FettuchiniAlfredo from "./gallery/images/FettuchiniAlfredo.png";
import Lasagna from "./gallery/images/Lasagna.png";
import Bruschetta from "./gallery/images/Bruschetta.png";

import PizzaHut from "./gallery/images/PizzaHut.png";
import PhPepperoni from "./gallery/images/PhPepperoni.png";
import PhVeggie from "./gallery/images/PhVeggie.png";
import PhCheese from "./gallery/images/PhCheese.png";
import PhBBQ from "./gallery/images/PhBBQ.png";
import PhBread from "./gallery/images/PhBread.png";

import Mariolino from "./gallery/images/Mariolino.png";

import Dominos from "./gallery/images/Dominos.png";

import Mcdo from "./gallery/images/Mcdo.png";

import Crepaway from "./gallery/images/Crepaway.png";

import Boneless from "./gallery/images/Boneless.png";

import LAkkis from "./gallery/images/LAkkis.png";

const data = [
  {
    id: 1,
    name: "Zaatar W Zeit",
    pic: zaatarWZetPhoto,
    location: "Kaslik",
    currency: "$",
    type: ["Lebanese", "Salads", "Sandwiches"],
    rating: 4.7,
    favorite: false,
    delivery: "25-40 mins",
    description: [
      {
        dName: "Manakeesh Doubles",
        DPic: ZWZMDouble,
        price: 8,
        description: "A pack of manakeech including two zaatar and two cheese.",
      },
      {
        dName: "Chicken Wrap",
        DPic: ZWZChickenWrap,
        price: 6,
        description: "Grilled chicken wrap with garlic sauce and pickles.",
      },
      {
        dName: "Halloumi Sandwich",
        DPic: ZWZHaloumiS,
        price: 7,
        description: "Halloumi cheese with fresh tomatoes and mint leaves.",
      },
      {
        dName: "Lentil Soup",
        DPic: ZWZLentil,
        price: 5,
        description: "A warm and hearty bowl of lentil soup.",
      },
      {
        dName: "Falafel Plate",
        DPic: ZWZFalafel,
        price: 8,
        description:
          "A plate of crispy falafel with tahini sauce and pita bread.",
      },
    ],
  },
  {
    id: 2,
    name: "Roadster Diner",
    pic: RdImage,
    location: "Beirut",
    currency: "$",
    type: ["American", "Fast Food"],
    rating: 4.3,
    favorite: false,
    delivery: "30-50 mins",
    description: [
      {
        dName: "Burger Combo",
        DPic: RdBurgerCombo,
        price: 12,
        description: "Juicy burger with fries and a soft drink.",
      },
      {
        dName: "Chicken Strips",
        DPic: RdChickenStrips,
        price: 9,
        description: "Crispy chicken strips served with dipping sauce.",
      },
      {
        dName: "Steak Sandwich",
        DPic: RdSteak,
        price: 14,
        description: "Thin slices of steak with caramelized onions and cheese.",
      },
      {
        dName: "Mozzarella Sticks",
        DPic: RdMozzarella,
        price: 7,
        description: "Golden-fried mozzarella served with marinara sauce.",
      },
      {
        dName: "Caesar Salad",
        DPic: RdCeasar,
        price: 10,
        description: "Crisp romaine lettuce, parmesan, and grilled chicken.",
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Ko",
    pic: MonMaki,
    location: "Hamra",
    currency: "$",
    type: ["Japanese", "Sushi"],
    rating: 4.8,
    favorite: false,
    delivery: "40-60 mins",
    description: [
      {
        dName: "Salmon Sushi Platter",
        DPic: MonMakiSushi,
        price: 25,
        description: "12 pieces of fresh salmon sushi.",
      },
      {
        dName: "Maki Mix",
        DPic: MonMakiMakiMix,
        price: 20,
        description: "A mix of California and salmon maki rolls.",
      },
      {
        dName: "Tuna Sashimi",
        DPic: MonMakiTunaSashimi,
        price: 22,
        description: "6 slices of fresh tuna sashimi.",
      },
      {
        dName: "Tempura Shrimp Roll",
        DPic: MonMakiTempuraRoll,
        price: 18,
        description: "Crispy shrimp wrapped in nori and rice.",
      },
      {
        dName: "Edamame",
        DPic: MonMakiEdamame,
        price: 6,
        description: "Steamed edamame beans with sea salt.",
      },
    ],
  },

  {
    id: 4,
    name: "Pasta Di Roma",
    pic: PastaDiRoma,
    location: "Achrafieh",
    currency: "$",
    type: ["Italian", "Pasta"],
    rating: 4.5,
    favorite: false,
    delivery: "25-40 mins",
    description: [
      {
        dName: "Spaghetti Carbonara",
        DPic: SpaghettiCarbonara,
        price: 14,
        description: "Creamy pasta with pancetta and Parmesan.",
      },
      {
        dName: "Penne Arrabiata",
        DPic: PenneArabiata,
        price: 12,
        description: "Spicy tomato sauce with penne pasta.",
      },
      {
        dName: "Fettuccine Alfredo",
        DPic: FettuchiniAlfredo,
        price: 13,
        description: "Fettuccine in a rich Alfredo sauce.",
      },
      {
        dName: "Lasagna",
        DPic: Lasagna,
        price: 16,
        description: "Layered pasta with beef and bechamel sauce.",
      },
      {
        dName: "Bruschetta",
        DPic: Bruschetta,
        price: 7,
        description: "Toasted bread with tomatoes and basil.",
      },
    ],
  },
  {
    id: 5,
    name: "Pizza Hut",
    pic: PizzaHut,
    location: "Dora",
    currency: "$",
    type: ["Italian", "Pizza"],
    rating: 4.1,
    favorite: false,
    delivery: "20-35 mins",
    description: [
      {
        dName: "Pepperoni Pizza",
        DPic: PhPepperoni,
        price: 15,
        description: "Classic pepperoni pizza with mozzarella cheese.",
      },
      {
        dName: "Veggie Delight",
        DPic: PhVeggie,
        price: 13,
        description: "Pizza loaded with fresh vegetables and olives.",
      },
      {
        dName: "Cheese Lovers",
        DPic: PhCheese,
        price: 14,
        description: "A blend of mozzarella, cheddar, and parmesan.",
      },
      {
        dName: "BBQ Chicken Pizza",
        DPic: PhBBQ,
        price: 16,
        description: "Chicken with barbecue sauce and red onions.",
      },
      {
        dName: "Garlic Breadsticks",
        DPic: PhBread,
        price: 5,
        description: "Crispy breadsticks with garlic and herbs.",
      },
    ],
  },
  {
    id: 6,
    name: "Crepaway",
    pic: Crepaway,
    location: "Kaslik",
    currency: "$",
    type: ["American", "Salads", "Sandwiches"],
    rating: 4.7,
    favorite: false,
    delivery: "25-40 mins",
    description: [
      {
        dName: "Manakeesh Doubles",
        DPic: ZWZMDouble,
        price: 8,
        description: "A pack of manakeech including two zaatar and two cheese.",
      },
      {
        dName: "Chicken Wrap",
        DPic: ZWZChickenWrap,
        price: 6,
        description: "Grilled chicken wrap with garlic sauce and pickles.",
      },
      {
        dName: "Halloumi Sandwich",
        DPic: ZWZHaloumiS,
        price: 7,
        description: "Halloumi cheese with fresh tomatoes and mint leaves.",
      },
      {
        dName: "Lentil Soup",
        DPic: ZWZLentil,
        price: 5,
        description: "A warm and hearty bowl of lentil soup.",
      },
      {
        dName: "Falafel Plate",
        DPic: ZWZFalafel,
        price: 8,
        description:
          "A plate of crispy falafel with tahini sauce and pita bread.",
      },
    ],
  },
  {
    id: 7,
    name: "Boneless 28",
    pic: Boneless,
    location: "Beirut",
    currency: "$",
    type: ["American", "Fast Food"],
    rating: 4.3,
    favorite: false,
    delivery: "30-50 mins",
    description: [
      {
        dName: "Burger Combo",
        DPic: RdBurgerCombo,
        price: 12,
        description: "Juicy burger with fries and a soft drink.",
      },
      {
        dName: "Chicken Strips",
        DPic: RdChickenStrips,
        price: 9,
        description: "Crispy chicken strips served with dipping sauce.",
      },
      {
        dName: "Steak Sandwich",
        DPic: RdSteak,
        price: 14,
        description: "Thin slices of steak with caramelized onions and cheese.",
      },
      {
        dName: "Mozzarella Sticks",
        DPic: RdMozzarella,
        price: 7,
        description: "Golden-fried mozzarella served with marinara sauce.",
      },
      {
        dName: "Caesar Salad",
        DPic: RdCeasar,
        price: 10,
        description: "Crisp romaine lettuce, parmesan, and grilled chicken.",
      },
    ],
  },
  {
    id: 8,
    name: "Sushi holic",
    pic: MonMaki,
    location: "sidon",
    currency: "$",
    type: ["Japanese", "Sushi"],
    rating: 4.8,
    favorite: false,
    delivery: "40-60 mins",
    description: [
      {
        dName: "Salmon Sushi Platter",
        DPic: MonMakiSushi,
        price: 25,
        description: "12 pieces of fresh salmon sushi.",
      },
      {
        dName: "Maki Mix",
        DPic: MonMakiMakiMix,
        price: 20,
        description: "A mix of California and salmon maki rolls.",
      },
      {
        dName: "Tuna Sashimi",
        DPic: MonMakiTunaSashimi,
        price: 22,
        description: "6 slices of fresh tuna sashimi.",
      },
      {
        dName: "Tempura Shrimp Roll",
        DPic: MonMakiTempuraRoll,
        price: 18,
        description: "Crispy shrimp wrapped in nori and rice.",
      },
      {
        dName: "Edamame",
        DPic: MonMakiEdamame,
        price: 6,
        description: "Steamed edamame beans with sea salt.",
      },
    ],
  },

  {
    id: 9,
    name: "Lakkis",
    pic: LAkkis,
    location: "Achrafieh",
    currency: "$",
    type: ["Lebanese", "manakich"],
    rating: 4.5,
    favorite: false,
    delivery: "25-40 mins",
    description: [
      {
        dName: "Spaghetti Carbonara",
        DPic: SpaghettiCarbonara,
        price: 14,
        description: "Creamy pasta with pancetta and Parmesan.",
      },
      {
        dName: "Penne Arrabiata",
        DPic: PenneArabiata,
        price: 12,
        description: "Spicy tomato sauce with penne pasta.",
      },
      {
        dName: "Fettuccine Alfredo",
        DPic: FettuchiniAlfredo,
        price: 13,
        description: "Fettuccine in a rich Alfredo sauce.",
      },
      {
        dName: "Lasagna",
        DPic: Lasagna,
        price: 16,
        description: "Layered pasta with beef and bechamel sauce.",
      },
      {
        dName: "Bruschetta",
        DPic: Bruschetta,
        price: 7,
        description: "Toasted bread with tomatoes and basil.",
      },
    ],
  },
  {
    id: 10,
    name: "Mcdonalds",
    pic: Mcdo,
    location: "Kaslik",
    currency: "$",
    type: ["american", "Pizza"],
    rating: 4.1,
    favorite: false,
    delivery: "20-35 mins",
    description: [
      {
        dName: "Pepperoni Pizza",
        DPic: PhPepperoni,
        price: 15,
        description: "Classic pepperoni pizza with mozzarella cheese.",
      },
      {
        dName: "Veggie Delight",
        DPic: PhVeggie,
        price: 13,
        description: "Pizza loaded with fresh vegetables and olives.",
      },
      {
        dName: "Cheese Lovers",
        DPic: PhCheese,
        price: 14,
        description: "A blend of mozzarella, cheddar, and parmesan.",
      },
      {
        dName: "BBQ Chicken Pizza",
        DPic: PhBBQ,
        price: 16,
        description: "Chicken with barbecue sauce and red onions.",
      },
      {
        dName: "Garlic Breadsticks",
        DPic: PhBread,
        price: 5,
        description: "Crispy breadsticks with garlic and herbs.",
      },
    ],
  },
  {
    id: 11,
    name: "Domino's Pizza",
    pic: Dominos,
    location: "Jbeil",
    currency: "$",
    type: ["Italian", "Pizza"],
    rating: 4.1,
    favorite: false,
    delivery: "20-35 mins",
    description: [
      {
        dName: "Pepperoni Pizza",
        DPic: PhPepperoni,
        price: 15,
        description: "Classic pepperoni pizza with mozzarella cheese.",
      },
      {
        dName: "Veggie Delight",
        DPic: PhVeggie,
        price: 13,
        description: "Pizza loaded with fresh vegetables and olives.",
      },
      {
        dName: "Cheese Lovers",
        DPic: PhCheese,
        price: 14,
        description: "A blend of mozzarella, cheddar, and parmesan.",
      },
      {
        dName: "BBQ Chicken Pizza",
        DPic: PhBBQ,
        price: 16,
        description: "Chicken with barbecue sauce and red onions.",
      },
      {
        dName: "Garlic Breadsticks",
        DPic: PhBread,
        price: 5,
        description: "Crispy breadsticks with garlic and herbs.",
      },
    ],
  },
  {
    id: 12,
    name: "Marionlino",
    pic: Mariolino,
    location: "Batroun",
    currency: "$",
    type: ["Italian", "Pizza"],
    rating: 4.1,
    favorite: false,
    delivery: "20-35 mins",
    description: [
      {
        dName: "Pepperoni Pizza",
        DPic: PhPepperoni,
        price: 15,
        description: "Classic pepperoni pizza with mozzarella cheese.",
      },
      {
        dName: "Veggie Delight",
        DPic: PhVeggie,
        price: 13,
        description: "Pizza loaded with fresh vegetables and olives.",
      },
      {
        dName: "Cheese Lovers",
        DPic: PhCheese,
        price: 14,
        description: "A blend of mozzarella, cheddar, and parmesan.",
      },
      {
        dName: "BBQ Chicken Pizza",
        DPic: PhBBQ,
        price: 16,
        description: "Chicken with barbecue sauce and red onions.",
      },
      {
        dName: "Garlic Breadsticks",
        DPic: PhBread,
        price: 5,
        description: "Crispy breadsticks with garlic and herbs.",
      },
    ],
  },
];

export default data;
