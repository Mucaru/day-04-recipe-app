import { MealSummary } from "@/types/meal";
import Image from "next/image";
import Link from "next/link";

interface Props {
  meal: MealSummary;
}

export function RecipeCard({ meal }: Props) {
  return (
    <Link href={`/recipes/${meal.idMeal}`}>
      <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-[3/4] bg-gray-200">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow">
            {meal.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
}