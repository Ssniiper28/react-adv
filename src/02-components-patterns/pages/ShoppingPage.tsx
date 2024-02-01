import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../style/custom-style.css"
import { products } from '../data/products'

const product = products[0]


export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <ProductCard 
          key={product.id}
          product={ product }
          className="bg-dark text-white"
          style={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "2px 2px 5px black"}}
          initialValues={{
            count:4, 
            maxCount: 10
          }}
          >

          {
            ( args ) => (
              <>
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons"/>
                <button onClick={ () => args.increaseBy(-2) } > -2 </button>
                <button onClick={ () => args.increaseBy(+2) } style={args.isMaxCountReached ? {display: 'none'} : {}} > +2 </button>
              </>
            )
          }
        </ProductCard>
    </div>
  )
}
