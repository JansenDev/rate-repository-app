// import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/gql";

// ^Graphql

function useRepositories() {
  const { loading, data = {}, refetch } = useQuery(GET_REPOSITORIES);
  const { repositories = null } = data;

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { loading, repositories: repositoriesNodes, refetch };
}

// ^API
// const URL = "http://192.168.1.4:5000/api/repositories";
// function useRepositories() {
//   const [repositories, setRepositories] = useState(null);

//   const fetchData = async () => {
//     const reponse = await globalThis.fetch(URL);
//     const dataJson = await reponse.json();
//     setRepositories(dataJson);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const repositoriesNodes = repositories
//     ? repositories.edges.map((edge) => edge.node)
//     : [];

//   return { repositories: repositoriesNodes };
// }

export default useRepositories;
