import { ProductProps } from "@/types/types"
import { PrdtDetailed } from "./prdtDetailed"

// const products = [
//   {
//     name: "Beetroot",
//     shop: "Local shop",
//     price: 17.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Italian Avocado",
//     shop: "Local shop",
//     price: 12.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//     isSelected: true,
//   },
//   {
//     name: "Szam samp",
//     shop: "Process food",
//     price: 14.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Beef Mixed",
//     shop: "Cut Bone",
//     price: 16.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Cold drinks",
//     shop: "Sprite",
//     price: 18.29,
//     weight: "500 ml",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Beetroot",
//     shop: "Local shop",
//     price: 17.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Italian Avocado",
//     shop: "Local shop",
//     price: 12.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//     isSelected: true,
//   },
//   {
//     name: "Szam samp",
//     shop: "Process food",
//     price: 14.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Beef Mixed",
//     shop: "Cut Bone",
//     price: 16.29,
//     weight: "500 gm",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
//   {
//     name: "Cold drinks",
//     shop: "Sprite",
//     price: 18.29,
//     weight: "500 ml",
//     image: "https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-juice-pasta-vegetable-fruit-tomato-sliced-tomato-natural-foods-food-tomato-thumbnail.png",
//   },
// ]

export default function ProductContainer({products}:{products:any[]}) {
  return (
    <div className="w-full lg:px-4 px-2 py-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">You might need</h2>
        <button className="text-primary text-sm">See more →</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-fr">
        {products?.map((product) => (
          <PrdtDetailed
            key={product.title}
            name={product.title}
            shop="Glocery"
            price={product.sellingPrice}
            weight="50g"
            image={product?.images?.[0] || ""}
            />
        ))}
      </div>
    </div>
  )
}

