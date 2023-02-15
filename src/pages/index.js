import Head from 'next/head'
import { gql } from '@apollo/client';

import { getApolloClient } from 'lib/apollo-client';
import Header from "components/Header";
import Allproducts from "./shop/Allproducts";
import Banner from "components/Banner";


export default function Home({ page, products }) {
  const { title, description } = page;

  return (
    <div >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Banner/>
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
                regularPrice
                salePrice
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

  const page = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      page,
      products
    }
  }
}
