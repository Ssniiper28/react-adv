import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'


const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}> 
          <ProductCard product={ product }>
            <ProductCard.Title />
            <ProductCard.Image />
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={ product }>
            <ProductButtons />
            <ProductImage />
            <ProductTitle />
          </ProductCard>
        </div>
    </div>
  )
}
