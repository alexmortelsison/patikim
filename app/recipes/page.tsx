import { RecipeCard } from "@/components/RecipeCard";
import React from "react";

const RecipePage = () => {
  return (
    <div className="items-center justify-center flex flex-col">
      <div>
        <h1 className="text-4xl text-lime-500 font-bold tracking-tighter mt-8">
          Recipes
        </h1>
      </div>
      <div className="">
        <RecipeCard recipe={{
          id: "",
          title: "",
          description: "",
          image: undefined
        }} />
      </div>
    </div>
  );
};

export default RecipePage;
