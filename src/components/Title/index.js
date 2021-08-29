
import "./style.css";

function Title({title, subtitle}) {
  return (
    <div>
      <p className="title">{title}</p>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}

export default Title;