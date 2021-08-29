
import "./style.css";

function Title({title, subtitle}) {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

export default Title;