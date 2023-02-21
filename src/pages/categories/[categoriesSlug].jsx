import React from 'react'
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import Header from "components/Header";
import Productforpage from "components/Productforpage";
import Footer from "components/Footer";


const categories = ({products,categories}) => {
  return (
    <div>
        <Header categorie={categories}/>
        <main className="pb-[10vh]">
        <Productforpage products={products}/>
        </main>
    </div>
  )
}

export default categories;

export async function getStaticProps({ params = {} } = {}) {
  const { categoriesSlug } = params;
 

    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: gql`query cat($slug : [String!]){
        productCategories(where: {orderby: COUNT, order: DESC}) {
          edges {
            node {
              name
              slug
            }
          }
        }
          products(where: {categoryIn: $slug}) {
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
                  productCategories {
                    nodes {
                      name
                    }
                  }
                }
  
              }
            }
          }
        }
      `,
      variables : {
        slug : categoriesSlug
      }

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
      }
    });

    return {
      props: {
        products,   
        categories
      }
    }
  }
  

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }