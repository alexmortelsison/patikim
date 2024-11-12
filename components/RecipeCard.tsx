// components/RecipeCard.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  recipe: {
    id: string;
    title: string;
    description: string;
    image?: string;
  };
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => (
  <Card className="w-[380px]">
    <CardHeader className="items-center">
      <CardTitle>{recipe.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-[300px]">
        <Link
          className="w-full items-center justify-center flex"
          href={`/recipes/${recipe.id}`}
        >
          <Image
            src={recipe.image || "/logo.png"}
            alt="Filipino dish"
            width={240}
            height={240}
            className="rounded-lg hover:border-[3px] border-lime-500"
          />
        </Link>
        <p className="text-muted-foreground text-sm text-center mt-4 h-20">
          {recipe.description}
        </p>
      </div>
    </CardContent>
    <CardFooter>
      <Link className="w-full" href={`/recipes/${recipe.id}`}>
        <Button className="w-full bg-lime-500 hover:bg-lime-600">
          See Recipe
        </Button>
      </Link>
    </CardFooter>
  </Card>
);
