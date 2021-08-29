import { useMutation, useQuery } from "@apollo/client";
import { GET_TASKS } from "../../queries/tasks";
import { Row, Col } from 'antd';
import TaskItem from "../../components/TaskItem";
import { icons } from "../../assets";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../../mutations/task";
import "./styles.css"

function Homepage() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [removeTask] = useMutation(REMOVE_TASK);
  const [updateTask] = useMutation(UPDATE_TASK);
  const [addNewTask] = useMutation(ADD_TASK);

  const {loading, data, refetch} = useQuery(GET_TASKS, {
    variables: {filter: filter},
  });

  useEffect(() => {
    if (data) {
      setTasks(data.getUserTasks)
    }
  }, [data])


  const onTaskUpdate = (task, checked) => {
    updateTask({variables: {updateTaskInput: {taskName: task.taskName, isCompleted: checked, id: task.id}}});
  }

  function onFilterPress(event, filter) {
    setFilter(filter)
    refetch();
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Row justify="center" align="middle">
      <Col className="wrapper">
        <img alt="" src={icons.group.groupIcon}
             srcSet={`${icons.group.groupIcon2x} 2x, ${icons.group.groupIcon3x} 3x`}
             className="icon"/>
        <Title title="Todo List"/>

        <form onKeyDown={event => {
          if (event.keyCode === 13) {
            event.preventDefault();
            if (task.trim().length > 0) {
              addNewTask({variables: {createTaskInput: {taskName: task.trim(), isCompleted: false}}});
              setTask("");
              refetch();
            }
          }
        }}>
          <div>
            <input
              className="input"
              value={task}
              placeholder="Add a new todo"
              onChange={event => {
                setTask(event.target.value);
              }}
            />
          </div>
        </form>
        <div className="tasksList">
          {!loading && tasks.map((task, index) =>
            <TaskItem key={index} task={task}
                      onCheck={event => {
                        event.preventDefault()
                        onTaskUpdate(task, event.target.checked)
                      }}
                      onTaskRemove={event => {
                        event.preventDefault()
                        removeTask({variables: {taskId: task.id}});
                        refetch();
                      }}
            />
          )}
        </div>
        <div>
          <span className="show-label">Show:</span>
          <button className={`disabled-button ${filter !== "All" && "active"}`} disabled={filter === "All"}
                  onClick={(event) => onFilterPress(event, "All")}>All
          </button>
          <button className={`disabled-button ${filter !== "Completed" && "active"}`}
                  disabled={filter === "Completed"}
                  onClick={(event) => onFilterPress(event, "Completed")}>Completed
          </button>
          <button className={`disabled-button ${filter !== "Incompleted" && "active"}`}
                  disabled={filter === "Incompleted"}
                  onClick={(event) => onFilterPress(event, "Incompleted")}>Incompleted
          </button>
        </div>
      </Col>
    </Row>
  );
}

export default Homepage;
