import { mainCategories } from "@/data/data";
import Link from "next/link";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="flex justify-center max-w-[1181px] max-[1200px]:max-w-[877px] max-[865px]:max-w-[637px] max-[625px]:max-w-[477px] mx-auto flex-wrap">
      {mainCategories.map((category) => (
        <Link
          key={category.id}
          href={{
            pathname: category.link,
            query: {
              name: category.name,
            },
          }}
        >
          <CategoryItem category={category} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
