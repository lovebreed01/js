import { graphql } from 'graphql';
import  {request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ;
export const getPosts = async () => {
    const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            authors {
              bio
              name
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredimage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
      
    `
      const result = await  request(graphqlAPI, query)
      return result.postsConnection.edges
}


export const getRecentPost = async () =>{
  const query = gql`
    query GetPostDetails {
      posts(
        orderBy:createdAt_ASC
        last:3
        ){
          title
          featuredimage {
            url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.posts;


}

export const getSimilarPost =async ()=>{
  const query = gql`
   query GetPostDetails($slug: String! , $categories :[String!]){
      posts(
        where : {slug_not : $slug, AND : {categories_some : {slug_in : $categories}}}
        last : 3
      ){
        title
        featuredImage {
          url
      }
      createdAt
      slug
    }

    }
  `

  const result = await  request(graphqlAPI, query)
  return result.posts;

}

export const getCategories = async ()=>{
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  
  `
  const result = await request(graphqlAPI, query)

  return result.categories
}