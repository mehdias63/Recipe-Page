import React from "react";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import Ingredients from "./Ingredients";
import Preparation from "./Preparation";
const data = {
  instructions: [
    {
      id: 1,
      title: "Beat the eggs",
      text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      id: 2,
      title: "Heat the pan",
      text: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      id: 3,
      title: "Cook the omelette",
      text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      id: 4,
      title: "Add fillings (optional)",
      text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      id: 5,
      title: "Fold and serve",
      text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      id: 6,
      title: "Enjoy",
      text: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: [
    {
      title: "Calories",
      text: "277kcal",
    },
    {
      title: "Carbs",
      text: "0g",
    },
    {
      title: "Protein",
      text: "20g",
    },
    {
      title: "Fat",
      text: "22g",
    },
  ],
};
export default function Card() {
  return (
    <div className="font-out flex flex-col gap-10 bg-white max-w-[46rem] lg:p-10 lg:rounded-3xl">
      <img
        src="/images/image-omelette.jpeg"
        className="w-auto h-auto lg:rounded-lg"
        alt="omelette"
      />

      <div className="px-8 py-10 lg:p-0 flex flex-col items-start gap-8">
        <div className="">
          <h1 className="self text-black text-4xl lg:text-[2.5rem] font-young leading-9 lg:leading-10 font-normal">
            Simple Omelette Recipe
          </h1>
          <p className="text-dark-gray font-normal text-base leading-6 m-4">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="p-6 bg-light-pink lg:p-7 rounded-lg w-full">
          <h1 className="text-xl text-purple leading-5 font-semibold mb-4">
            Preparation time
          </h1>
          <Preparation lable="Total" text="Approximately 10 minutes" />
          <Preparation lable="Preparation" text="5 minutes" />
          <Preparation lable="Cooking" text="5 minutes" />
        </div>
        <div className="border-b-2 w-full ">
          <h1 className="text-broun text-[1.75rem] font-young font-normal mb-4 leading-7">
            Ingredients
          </h1>
          <div className="mb-8">
            <Ingredients text="2-3 large eggs" />
            <Ingredients text="Salt, to taste" />
            <Ingredients text="Pepper, to taste" />
            <Ingredients text="1 tablespoon of butter or oil" />
            <Ingredients text="Optional fillings: cheese, diced vegetables, cooked meats, herbs" />
          </div>
        </div>
        <div className="border-b-2 w-full ">
          <h1 className="text-broun text-[1.75rem] font-young font-normal mb-8 leading-7">
            Instructions
          </h1>
          {data.instructions.map((card) => (
            <Instructions
              key={card.id}
              title={card.title}
              text={card.text}
              id={card.id}
            />
          ))}
        </div>
        <div>
          <h1 className="text-broun text-[1.75rem] font-young font-normal mb-6 leading-7">
            Nutrition
          </h1>
          <p className="text-dark-gray my-4 leading-6 text-base">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          {data.nutrition.map((card) => (
            <Nutrition key={card.title} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
