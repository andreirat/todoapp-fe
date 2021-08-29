import { useHistory } from "react-router-dom";
import { getAccessToken, removeAccessToken } from "../../utils/auth";
import { Layout } from "antd";

const {Header} = Layout;

function SiteHeader() {
  let history = useHistory();
  const token = getAccessToken();

  if (token === null) {
    history.push("/login")
  }

  return (
    <Header>
      <div className="logout-wrapper">{token !== null && <button onClick={(event) => {
        event.preventDefault();
        removeAccessToken();
        history.push("/login")
        window.location.reload();
      }
      } className="logout">Logout</button>}</div>
    </Header>
  );
}

export default SiteHeader;