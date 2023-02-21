import React from "react";
import Head from 'next/head'
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import Header from "components/Header";
import Banner from "components/Banner";
import Allproducts from "components/Allproducts";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";


//context for data handlings
/// local storage kav swervi for ALl products to pass to sibling page mais li pa pu render on server slmn 
//do not abused tags this will cause a hydration ISSUES for SSR eg a DIV inside a p tag jamais fer sa 
export default function Home({ page, products,categories }) {
  const { title, description } = page;

  console.log(getCookieConsentValue(Cookies));
  //console.log(resetCookieConsentValue()); import it first to reset cookiesss
  
  
  
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header categorie={categories}/>
        {/* <Banner/> */}
        <Allproducts products={products}/>
        <CookieConsent
        buttonText="Give Cookies"
        style={{
          backgroundColor : "red",
          fontWeight :"600"
        }}
        buttonStyle={{color : "red",
        backgroundColor:"white",
        fontWeight :"600",
        borderRadius : "2px"}}
        >We need your data !</CookieConsent>
      </main>
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
        productCategories(where: {orderby: COUNT, order: DESC}) {
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
