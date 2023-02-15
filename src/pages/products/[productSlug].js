import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';

import { getApolloClient } from 'lib/apollo-client';


export default function Products({ products, site }) {
  return (
    <div>
      <Head>
        <title>{ products.title }</title>
        <meta name="description" content={`Read more about ${products.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {products.map(product => <div>{product.title}{product.price}{product.sku}
        <img src={product.image.sourceUrl} alt="ProductImage" width="300px" />
        </div>)}
        <p >
          <Link href="/">
            <a>
              &lt; Back to home
            </a>
          </Link>
        </p>
      </main>
    </div>
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
                price
                sku
                title
                image{
                  sourceUrl
                }
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