import React from 'react'
import Link from 'next/link'
import CimFinance from "components/CimFinance";


const Allproducts = ({products}) => {
  return (
    <div className="">
      <ul className="flex flex-wrap justify-center gap-5">
          {products && products.length > 0 && products.map(product => {
            return (
              <li key={product.slug} >
                <img src={product.image.sourceUrl} alt="" width="300px"/>
                <Link href={product.path}>
                  <a>
                    <h3 dangerouslySetInnerHTML={{
                      __html: product.title
                    }} />
                    <p>{product.sku}</p>
                  </a>
                </Link>
                
               <div>
                <p>{product.salePrice}</p>
                <p>{product.regularPrice}</p>
                </div>


                <CimFinance price={product.price}/>

                {product.onSale ? <div>on Sale</div> : <div>not onSale</div>}
              
                <div>ADD TO CART</div>
              </li>
            );
          })}

          {!products || products.length === 0 && (
            <li>
              <p>
                Oops, no Product found!
              </p>
            </li>
          )}
        </ul> 
    </div>
  )
}

export default Allproducts