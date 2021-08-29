import { gql } from "@apollo/client";

const GET_TASKS = gql`
  query GetUserTasks($filter: String!) {
    getUserTasks(filter: $filter) {
      taskName,
        isCompleted,
        id
    }
  }
`;

export {
  GET_TASKS
}
