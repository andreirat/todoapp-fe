import { gql } from '@apollo/client';

const ADD_TASK = gql`
  mutation CreateTask($createTaskInput: TaskInput!) {
    createTask(input: $createTaskInput){
      taskName
      id
      isCompleted
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(input: $updateTaskInput){
      taskName
      id
      isCompleted
    }
  }
`;

const REMOVE_TASK = gql`
  mutation RemoveTask($taskId: Float!) {
    removeTask(taskId: $taskId)
  }
`;

export {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK
}
