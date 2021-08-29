import "./style.css";
import { icons } from "../../assets";

function TaskItem({onCheck, task, onTaskRemove}) {
  return (
    <div className="task-wrapper">
      <input type="checkbox" checked={task.isCompleted} onChange={(event) => onCheck(event)}/>
      <span className="taskName">{task.taskName}</span>
      <button className="close-button" onClick={event => onTaskRemove(event)}>
        <img alt="" src={icons.close.close}
             srcSet={`${icons.close.close2x} 2x, ${icons.close.close3x} 3x`}
             className="icon"/>
      </button>
    </div>
  );
}

export default TaskItem;