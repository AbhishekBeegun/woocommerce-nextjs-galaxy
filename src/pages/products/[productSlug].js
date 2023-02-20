import Head from 'next/head'
import React from "react";
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import CimFinance from "components/CimFinance";
import NavSingle from "components/Navbar/NavSingle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {BiHide}from "react-icons/bi"
import {BsArrowUpShort} from "react-icons/bs"
import { useState } from "react";


export default function Products({ products, site }) {
  
  const [Isopen, setIsopen] = useState(true);
  const [wishlist, setwishlist] = useState(false);

  return (
    <>
      <Head>
        <title>{ products.title }</title>
        <meta name="description" content={`Read more about ${products.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main>  
        <NavSingle/>     
        {products.map(product => 
        <div className="flex flex-col lg:flex-row justify-center lg:gap-10">
        
        {/* image */}
        <div className="flex items-center justify-center">
        <img className="h-[40vh] w-fit border"
         src={product.image.sourceUrl} alt="ProductImage" />
        </div>

        <div>
          RELATED PRODUCTS OR IMAGES
        </div>

         {/* fixed bottom  */}

        <div className={`fixed bottom-0 left-0 w-full h-[60vh] border-t border-red-300 rounded-t-2xl bg-white flex flex-col justify-evenly
           ${Isopen ? 'translate-y-0':'translate-y-[40vh]'} ease-in-out duration-300`}>
           {/* scroll to hide  */}
          <div className="flex justify-center">
          <button className="p-2 rounded-lg bg-white text-red-600" 
          onClick={() => setIsopen(!Isopen)}>  
          {Isopen ? <BiHide size={25}/> : <BsArrowUpShort size={25}/>}         
          </button>
          </div>
           {/* title and wishlist  */}
          <div className="flex justify-evenly items-center px-2">
           <h1 className="font-semibold text-xl shrink">{product.title}</h1>
           <button onClick={() => setwishlist(!wishlist)} 
           className="text-red-600">
            {!wishlist ? <AiOutlineHeart size={25}/> : <AiFillHeart size={28}/> }
             
          </button>
          </div>
          
           {/* brand logo xs  sku */}
          <div>
          <p className="text-xs text-center">{product.sku}</p>
          </div>

           {/* product description  */}
          <div className="flex justify-center">
          <h3 dangerouslySetInnerHTML={{
                      __html: product.content
            }} className="text-xs text-center py-4 h-[10vh] overflow-scroll" />            
          </div>

          {/* Cimfinace */}
          <div className="flex justify-center items-center gap-10">
          <img src="https://cimfinance.mu/images/homepage/homepage_logo.png" className="w-[60px] lg:w-[120px] h-[20px] lg:h-auto" />
          <CimFinance price={product.price}/>
          </div>

          {/* PRICE ADD TO CART */}
          <div className="flex justify-around items-center border-t pt-4">
          <div className="">
            <h3 className="text-red-600 text-xs">Price:</h3>
            <div className="">
                {product.onSale ? 
                <div className="flex items-baseline gap-2">
                  <p className="line-through text-sm">Rs {product.regularPrice}</p>
                  <p className="text-lg font-semibold">Rs {product.salePrice}</p>
                </div> :
                 <>
                  <p className="text-base font-semibold">Rs {product.regularPrice}</p>
                </>}
            </div>
          </div>
          <button className="border rounded-lg border-red-600 w-28 h-10 text-xs bg-red-600 text-white">ADD TO CART</button>
          </div>
        </div>
        </div>
        )}

      </main>
    </>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { productSlug } = params;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
           query  product ($slug : [String!]) {
        products(where:{slugIn: $slug}) {
          edges {
            node {
              ... on SimpleProduct {
                id
                name
                regularPrice(format: RAW)
                salePrice(format: RAW)
                price(format: RAW)
                sku
                onSale
                title
                image{
                  sourceUrl
                }
                content
              }
            }
          }
        }
      }
    `,
    variables: {
      slug: productSlug,
    }
  });

  const products = data?.data.products.edges.map(({ node }) => node).map(product => {
    return {
      ...product,
    }
  });
 

  const site = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      products,
      site
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}