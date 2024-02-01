import { useProduct } from "../hooks/useProduct";
import styles from "../style/styles.module.css"
import { ReactElement, createContext } from "react";
import { Product, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";


export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties,
    onChange?: ( args: onChangeArgs) => void,
    value?: number,
}


export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext  

export const ProductCard = ({children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div className={ `${ styles.productCard } ${ className }` } style={style}>
                { children }
            </div>
        </Provider>
    )
}

