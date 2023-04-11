import Stripe from "stripe"
import Product from "./components/Products"

const getProducts = async() => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15"
  })
  const products = await stripe.products.list()

  const productWithPrices = await Promise.all(
    products.data.map(async (products) => {
      const prices = await stripe.prices.list({product: products.id})
      return {
        id: products.id,
        name: products.name,
        price: prices.data[0].unit_amount,
        image: products.images[0],
        currency: prices.data[0].currency,
      }
    })
  )
  return productWithPrices
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="grid grid-cols-fluid gap-16">
     {products.map((product) => (
      <Product {...product} key={product.id}/>
     ))}
    </main>
  )
}
