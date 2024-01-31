import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../style/custom-style.css"

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
          flexWrap: "wrap",
          gap: 10,
        }}> 
          <ProductCard 
            product={ product }
            className="bg-dark text-white" 
            style={{
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              boxShadow: "2px 2px 5px black"
              }}>
            <ProductCard.Image className="custom-image"/>
            <ProductCard.Title className="text-bold"/>
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>

          <ProductCard 
            product={ product }
            className="bg-dark text-white"
            style={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "2px 2px 5px black"}}
            >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        </div>
    </div>
  )
}
