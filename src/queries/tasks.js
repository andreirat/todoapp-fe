import { gql } from "@apollo/client";

const GET_TASKS = gql`
  {
    getUserTasks {
        taskName,
        isCompleted
    }
  }
`;

export {
  GET_TASKS
}
