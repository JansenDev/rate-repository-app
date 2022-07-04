import { FlatList } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const Repositories = () => {
  const { repositories } = useRepositories();
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    ></FlatList>
  );
};

export default Repositories;
