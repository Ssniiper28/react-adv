import { ReactElement } from "react"

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    product: Product,
    maxCount?: number,
    increaseBy: (value: number) => void
}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    producto: Product,

    reset: () => void,
    increaseBy: (Value:number) => void,
}