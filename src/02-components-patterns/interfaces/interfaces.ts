import { ReactElement } from "react"

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface Props {
    children?: ReactElement | ReactElement[],
    product: Product,
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void
    product: Product
}