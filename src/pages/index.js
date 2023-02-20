import React from "react";
import { useState } from "react";
import Head from 'next/head'
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import Header from "components/Header";
import Banner from "components/Banner";
import Allproducts from "components/Allproducts";


//context for data handlings

//do not abused tags this will cause a hydration ISSUES for SSR eg a DIV inside a p tag jamais fer sa 
export default function Home({ page, products,categories }) {
  const { title, description } = page;
  
  
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header categorie={categories}/>
        {/* <Banner/> */}
        <Allproducts products={products}/>

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
      products,   
    }
  }
}
