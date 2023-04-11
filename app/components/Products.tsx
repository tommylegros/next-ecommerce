import formatePrice from "@/util/PriceFormate"
import Image from "next/image"
import { AddCartType } from "@/types/ProductTypes"


export default function Product({ name, image, price }: AddCartType) {
    return(
        <div>
            <Image src={image} alt={image} width={150} height={150} className="object-cover" />
            <h1>{name}</h1>
            <p>{price !== null ? formatePrice(price) : "N/A"}</p>
        </div>
    )
}