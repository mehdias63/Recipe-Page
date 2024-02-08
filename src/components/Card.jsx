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
    <div className="font-out">
      <img src="/images/image-omelette.jpeg" />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div>
        <h1>Preparation time</h1>
        <Preparation lable="Total" text="Approximately 10 minutes" />
        <Preparation lable="Preparation" text="5 minutes" />
        <Preparation lable="Cooking" text="5 minutes" />
      </div>
      <div>
        <h1>Ingredients</h1>
        <Ingredients text="2-3 large eggs" />
        <Ingredients text="Salt, to taste" />
        <Ingredients text="Pepper, to taste" />
        <Ingredients text="1 tablespoon of butter or oil" />
        <Ingredients text="Optional fillings: cheese, diced vegetables, cooked meats, herbs" />
      </div>
      <div>
        <h1>Instructions</h1>
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
        <h1>Nutrition</h1>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        {data.nutrition.map((card) => (
          <Nutrition key={card.title} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
}
