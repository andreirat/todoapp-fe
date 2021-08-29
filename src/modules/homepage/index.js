import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../../queries/tasks";

function Homepage() {

  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {JSON.stringify(error)}</p>;

  return (
    <div>{JSON.stringify(data)}</div>
  );
}

export default Homepage;
