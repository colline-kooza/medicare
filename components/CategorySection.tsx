import Image from "next/image"
import Link from "next/link"
import { Category } from "@prisma/client"

// interface Category {
//   id: string
//   name: string
//   description: string
//   image: string
// }

// const categories: Category[] = [
//   {
//     id: "vegetables",
//     name: "Vegetable",
//     description: "Local Fresh",
//     image: "https://w7.pngwing.com/pngs/1023/225/png-transparent-broccoli-organic-food-vegetable-broccoli-leaf-vegetable-food-cooking-thumbnail.png"
//   },
//   {
//     id: "snacks",
//     name: "Snacks & Drinks",
//     description: "Packaged Fresh",
//     image: "https://w7.pngwing.com/pngs/1023/225/png-transparent-broccoli-organic-food-vegetable-broccoli-leaf-vegetable-food-cooking-thumbnail.png"
//   },
//   {
//     id: "fruits",
//     name: "Fruits",
//     description: "Certified Fresh",
//     image: "https://w7.pngwing.com/pngs/1023/225/png-transparent-broccoli-organic-food-vegetable-broccoli-leaf-vegetable-food-cooking-thumbnail.png"
//   },
//   {
//     id: "chicken",
//     name: "Chicken legs",
//     description: "Frozen Meat",
//     image: "https://w7.pngwing.com/pngs/1023/225/png-transparent-broccoli-organic-food-vegetable-broccoli-leaf-vegetable-food-cooking-thumbnail.png"
//   },

// ]

export default function CategoryCards({categories}:{categories:Category[]}) {
  return (
    <div className="w-full overflow-auto pb-4  mt-7">
      <div className="lg:grid-cols-5 grid-cols-2 grid  min-w-full px-4 gap-3">
        {categories.slice(0,5).map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex items-center gap-3 min-w-[140px] p-3 rounded-xl bg-white border hover:shadow-sm transition-shadow"
          >
            <div className="relative w-16 h-16">
              <Image
                src={category?.imageUrl || "https://media.istockphoto.com/id/182187173/photo/isolated-berries.jpg?s=612x612&w=0&k=20&c=iBBvIdL39XuHATGIlNkKn6nAHfE_BTWkHiOs49IWlFU="}
                alt={category.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-medium line-clamp-1">{category.title}</span>
              <span className="text-sm line-clamp-1 text-muted-foreground">
                {category.description}
              </span>
            </div>
          </Link>
        ))}
        <Link
          href="/categories"
          className="flex items-center justify-center min-w-[60px] p-3 rounded-2xl bg-[#bbea70] hover:bg-[#E0FBE9] transition-colors text-black"
        >
          <span className="text-sm font-medium text-[#027A48]">See all</span>
        </Link>
      </div>
    </div>
  )
}

