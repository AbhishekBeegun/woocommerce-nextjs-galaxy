import Head from 'next/head'
import React, { createContext, useContext, useEffect } from "react";
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import CimFinance from "components/CimFinance";
import NavSingle from "components/Navbar/NavSingle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {BiHide}from "react-icons/bi"
import {BsArrowUpShort} from "react-icons/bs"
import { useState } from "react";
import { Toaster,toast } from "react-hot-toast";

export const CartContext = createContext();

export default function Products({ products, site }) {
    
  const [Isopen, setIsopen] = useState(true);
  const [Addtowishlist, setAddtowishlist] = useState(false);
  const [Cartdata,setCartdata] = useState([]);
  
///cart local storage
  useEffect(() => {
    const newCartData = JSON.parse(localStorage.getItem("cart-data"))
    if (newCartData)
        setCartdata(newCartData)
}, [])

///check if there is data in localstorage then load localstorage with required data
  useEffect(() => {
    localStorage.setItem("cart-data", JSON.stringify(Cartdata))
    console.log("data saved")
    console.log(Cartdata)
}, [Cartdata])

  const Addtocart = (product) => {
   setCartdata([...Cartdata,[product.title,product.price,product.image.sourceUrl,product.id]]);
   setIsopen(!Isopen)
   toast.success("Added to Cart")
  }
///cart local storage


///wishlist

const handlewish =() =>{ 
  setAddtowishlist(!Addtowishlist)
  toast.error("Wishlist not available")
}

  return (
    <>
    <Toaster/>
    <Head>
   
        <title>{ products.title }</title>
        <meta name="description" content={`Read more about ${products.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />

      </Head>   
      <main> 
        <CartContext.Provider value={Cartdata}>   
        <NavSingle/>     
        </CartContext.Provider>
   
        {products.map(product => 
        <div key={product.id} className="flex flex-col lg:flex-row justify-center lg:gap-10">
        {/* image */}
        <div className="flex items-center justify-center">
        <img className="h-[40vh] w-fit border" loading="lazy" src={product.image.sourceUrl} alt="ProductImage" />
        </div>

        <div>
          RELATED PRODUCTS OR IMAGES
        </div>

         {/* fixed bottom  */}

        <div className={`fixed z-10 bottom-0 left-0 w-full h-[60vh] border-t border-gray-400 rounded-t-2xl bg-secondary flex flex-col justify-evenly
           ${Isopen ? 'translate-y-0':'translate-y-[40vh]'} ease-in-out duration-300`}>
           {/* scroll to hide  */}
          <div className="flex justify-center">
          <button className="p-2 rounded-lg bg-secondary text-primary" 
          onClick={() => setIsopen(!Isopen)}>  
          {Isopen ? <BiHide size={25}/> : <BsArrowUpShort size={25} className="animate-bounce"/>}         
          </button>
          </div>
           {/* title and wishlist  */}
          <div className="flex justify-evenly items-center px-2">
           <h1 className="font-semibold text-xl shrink">{product.title}</h1>
           <button onClick={() => handlewish()}
           className="text-primary">
            {!Addtowishlist ? <AiOutlineHeart size={25}/> : <AiFillHeart size={28}/> }
             
          </button>
          </div>
          
           {/* brand logo xs  sku */}
          <div>
          <p className="text-primary text-xs text-center">{product.sku}</p>
          </div>

           {/* product description  */}
          <div className="flex justify-center text-primary">
          <h3 dangerouslySetInnerHTML={{__html: product.content}} className="text-xs text-center py-4 h-[10vh] overflow-scroll" />            
          </div>

          {/* Cimfinace */}
          <div className="flex justify-center items-center gap-10">
          <img src="https://cimfinance.mu/images/homepage/homepage_logo.png" className="w-[60px] lg:w-[120px] h-[20px] lg:h-auto" />
          <CimFinance price={product.price}/>
          </div>

          {/* PRICE ADD TO CART */}
          <div className="flex justify-around items-center border-t pt-4">
          <div className="">
            <h3 className="text-primary text-xs">Price:</h3>
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

          <button onClick={() => Addtocart(product)}
          className="border rounded-lg border-primary w-28 h-10 text-xs bg-primary text-secondary">
            ADD TO CART
          </button>
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