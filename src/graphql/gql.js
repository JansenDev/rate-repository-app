// import { gql } from "apollo-boost";
import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          ownerName
          name
          language
          description
          ownerAvatarUrl
          forksCount
          reviewCount
          ratingAverage
          fullName
          createdAt
          stargazersCount
        }
      }
    }
  }
`;
