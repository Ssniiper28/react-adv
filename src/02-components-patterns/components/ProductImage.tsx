import { useContext } from "react"
import styles from "../style/styles.module.css"
import noImage from "../assets/no-image.jpg"
import { ProductContext } from "./ProductCard"

interface Props {
  img?: string,
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext( ProductContext )

    return (
          <img 
            className={`${styles.productImg} ${className}`} 
            src={ img ? img : product.img ? product.img : noImage } 
            alt="Product Image"
            style={style}
            />
    )
}