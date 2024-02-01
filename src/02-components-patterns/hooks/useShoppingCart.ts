import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface ProductInCart extends Product {
    count: number;  
}

export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]:ProductInCart }>({})
    
      const onProductCountChange = ({count, product}: onChangeArgs) => {
        
        setShoppingCart(prev => {
          
          const productIncart: ProductInCart = prev[product.id] || { ...product, count: 0 }
          
          if ( Math.max(productIncart.count + count, 0) > 0 ) {
            productIncart.count += count;
            return {
              ...prev, 
              [product.id]: productIncart
            }
          }
    
          delete prev[product.id]
          return {...prev}
          
          // if (count === 0){
          //   delete prev[product.id]
          //   return {...prev}
          // }
    
          // return {
          //   ...prev, 
          //   [product.id]: {...product, count}
          // }
        })
      }

    return {
        shoppingCart,
        onProductCountChange
    }
}
