import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface ProductInCart extends Product {
    count: number;  
}

export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]:ProductInCart }>({})
    
      const onProductCountChange = ({count, product}: onChangeArgs) => {
        
        setShoppingCart(prev => {
          if (count === 0){
            delete prev[product.id]
            return {...prev}
          }
    
          return {
            ...prev, 
            [product.id]: {...product, count}
          }
        })
      }

    return {
        shoppingCart,
        onProductCountChange
    }
}
