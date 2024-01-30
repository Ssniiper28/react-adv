import { useContext } from "react"
import styles from "../style/styles.module.css"
import noImage from "../assets/no-image.jpg"
import { ProductContext } from "./ProductCard"

export const ProductImage = ({ img = "" }) => {

    const { product } = useContext( ProductContext )

    return (
          <img 
            className={styles.productImg} 
            src={ img ? img : product.img ? product.img : noImage } 
            alt="Product Image"
            />
    )
}