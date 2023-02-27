import React from 'react'
import Link from "next/link";
import CimFinance from "./CimFinance";
import Saveonsale from "./Saveonsale";
import Image from "next/image";

const Productforpage = ({products}) => {
  return (
    <div className="">
        <main className="">
        <ul className="flex flex-wrap justify-center items-center gap-5">
          {products && products.length > 0 && products.map(product => {
            return (
              <div key={product.slug} className="relative w-[250px]" >
                <Link href={product.path}>
                  <a className="flex flex-col">
                  <img src={product.image.sourceUrl} loading="lazy" alt="Productimg" width="250" height="250" className="border hover:scale-110 transition-all ease-in-out rounded-lg"/>
                    <h3 dangerouslySetInnerHTML={{
                      __html: product.title
                    }} className="text-base font-semibold py-4 shrink" />
                  </a>
                </Link>
                
               <div className="border-b py-2">
                {product.onSale ? 
                <div className="flex items-baseline gap-2">
                  <p className="line-through text-sm">Rs {product.regularPrice}</p>
                  <p className="text-lg font-semibold text-[#303030]">Rs {product.salePrice}</p>
                </div> :
                 <div>
                  <p className="text-lg font-semibold text-[#303030]">Rs {product.regularPrice}</p>
                </div>}

              </div>

                <div className="flex flex-col gap-4 py-2">
                <CimFinance price={product.price}/>

                </div>

                <div>
                {product.onSale ?
                 <div className="absolute top-5 right-0">
                  <Saveonsale regularPrice={product.regularPrice} salePrice={product.salePrice}/>
                  </div> : 
                 <div className="hidden"></div>}
                </div> 



                
              </div>

            

              

            );
          })}

          {!products || products.length === 0 && (
            <div>
              <p>
                Oops, no Product found!
              </p>
            </div>
          )}
        </ul> 
    </main>
    </div>
  )
}

export default Productforpage