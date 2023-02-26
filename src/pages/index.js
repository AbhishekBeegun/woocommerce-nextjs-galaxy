import React from "react";
import Head from 'next/head'
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import Allproducts from "components/Allproducts";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import Footer from "components/Footer";



//context for data handlings

/// local storage kav swervi for ALl products to pass to sibling page mais li pa pu render on server slmn 
//do not abused tags this will cause a hydration ISSUES for SSR eg a DIV inside a p tag jamais fer sa 
export default function Home({ page, products,categories }) {
  const { title, description } = page;

  // console.log(getCookieConsentValue(Cookies));
  //console.log(resetCookieConsentValue()); import it first to reset cookiesss
  
  
  
  return (
    
    <div className="overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Navbar categorie={categories} products={products}/>
      <main className="">
        
        {/* <Banner/> */}
        
        <Allproducts products={products}/>
        <CookieConsent
        buttonText="Agree"
        style={{
          fontSize:"1.2rem",
          backgroundColor : "red",
          fontWeight :"600"
        }}
        buttonStyle={{ color: "red",background:"white",borderRadius:"5px", fontSize: "13px" }}
        
        enableDeclineButton
        declineButtonText="Refuse"
        declineButtonStyle={{ color: "red",background:"white",borderRadius:"5px", fontSize: "13px" }}
        onDecline={() => {
          alert("We understand");
        }}
        >We are taking your 🍪</CookieConsent>
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }
        productCategories(first : 25 , where: {orderby: COUNT, order: DESC}) {
          edges {
            node {
              name
              slug
              image{
                sourceUrl
              }
            }
          }
        }
        products(first: 25) {
          edges {
            node {
              slug
              title
              image{
                sourceUrl
              }
              ... on SimpleProduct {
                sku
                onSale
                regularPrice(format: RAW)
                salePrice(format: RAW)
                price(format: RAW)
              }

            }
          }
        }
      }
    `,
  });

  const products = data?.data.products.edges.map(({ node }) => node).map(product => {
    return {
      ...product,
      path: `/products/${product.slug}`
    }
  });


  const categories = data?.data.productCategories.edges.map(({ node }) => node).map(cat => {
    return {
      ...cat,
      path: `/categories/${cat.slug}`
    }
  });

  const page = {
    ...data?.data.generalSettings
  }
  
  return {
    props: {
      page,
      categories,
      products
   
    }
  }
}
