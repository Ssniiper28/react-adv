import { useProduct } from "../hooks/useProduct";
import styles from "../style/styles.module.css"
import { createContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext  

export const ProductCard = ({children, product }: Props) => {

    const { counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}
