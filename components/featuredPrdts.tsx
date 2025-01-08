import { ProductCard } from "./PrdtCarf"

const products = [
  {
    name: "Beetroot",
    shop: "Local shop",
    price: 17.29,
    weight: "500 gm",
    image: "https://media.istockphoto.com/id/1487476121/photo/fresh-beetroot-juice-in-glass-holding-by-woman-hand-healthy-drink.jpg?s=612x612&w=0&k=20&c=5FQK_Sw6KoXTEcanSfOoOZwN_MzVOnY-D0W4C9u6Zis=",
  },
  {
    name: "Italian Avocado",
    shop: "Local shop",
    price: 12.29,
    weight: "500 gm",
    image: "https://media.istockphoto.com/id/894159492/photo/snack-or-appetizer-of-guacamole-bruschetta.jpg?s=612x612&w=0&k=20&c=BF942cHtQ3yAh7aWm5wqu9P5rFqC5Y7nVzAQVjkCGLo=",
    isSelected: true,
  },
  {
    name: "Szam samp",
    shop: "Process food",
    price: 14.29,
    weight: "500 gm",
    image: "https://media.istockphoto.com/id/1226733438/photo/salad-with-grilled-chicken-breast-avocado-pomegranate-seeds-and-tomato-on-white-background.jpg?s=612x612&w=0&k=20&c=rS0uf1zRweCGY-FI21a_XpHyVtxOBzuhHWx6ZIAg1go=",
  },
  {
    name: "Beef Mixed",
    shop: "Cut Bone",
    price: 16.29,
    weight: "500 gm",
    image: "https://media.istockphoto.com/id/184624619/photo/slices-of-new-york-strip-steak-on-cutting-board.jpg?s=612x612&w=0&k=20&c=bwbjhrTblzLf_NY2e29Us6Arx0kCc-R6LbKTtVou0B4=",
  },
  {
    name: "Cold drinks",
    shop: "Sprite",
    price: 18.29,
    weight: "500 ml",
    image: "https://media.istockphoto.com/id/154926309/photo/lots-of-soda-bottles-in-various-flavours-all-lined-up.jpg?s=612x612&w=0&k=20&c=7pjQFoVFmz7vsnj2aHvCmiGmC6JKv_Eu_aWxawTtUQQ=",
  },
  
 
]

export default function FeaturedPrdts() {
  return (
    <div className="w-full px-2 lg:px-4 py-6 mt-8">
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-xl font-semibold">Featured Products</h2>
        <button className="text-primary text-sm">See more →</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-fr">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            shop={product.shop}
            price={product.price}
            weight={product.weight}
            image={product.image}
            isSelected={product.isSelected}
          />
        ))}
      </div>
    </div>
  )
}

