import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../style/custom-style.css"
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/products'


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "space-evenly",
          alignItems: "center"
        }}> 

        {
          products.map((product)=>(
            <ProductCard 
              key={product.id}
              product={ product }
              className="bg-dark text-white"
              style={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "2px 2px 5px black"}}
              value={ shoppingCart[product.id]?.count || 0 }
              onChange={ (e) => onProductCountChange(e) }
              >
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ))
        }
        </div>

        <div className='shopping-cart'>
          {
            Object.entries( shoppingCart ).map( ([key, product]) => (
              <ProductCard 
                product={ product }
                className="bg-dark text-white"
                style={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "2px 2px 5px black", width: "100px"}}
                key={ key }
                value={product.count}
                onChange={onProductCountChange}
                >
                <ProductImage className="custom-image"/>
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          }
        </div>
    </div>
  )
}
