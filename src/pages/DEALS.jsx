import React from 'react'
import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import Navbar from "components/Navbar";
import Productforpage from "components/productforpage";

const DEALS = ({products}) => {
  return (
    <div>
    <Navbar/>
    <h1 className="text-3xl p-10 text-primary">HOT DEALS</h1>
    <div>
      <Productforpage products={products}/>
    </div>

    </div>
  )
}

export default DEALS;


export async function getStaticProps() {
    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: gql`{ 
            products(where: {onSale: true}) {
                edges {
                  node {
                    ... on SimpleProduct {
                      title
                      slug
                      image{
                        sourceUrl
                      }
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
  

  
    return {
      props: {
        products,
      }
    }
  }