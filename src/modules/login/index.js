import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Row, Col } from 'antd';
import { useHistory } from "react-router-dom";

import "./style.css"
import "../../styles/common.css"
import { icons } from "../../assets";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { LOGIN } from "../../mutations/auth";
import { setAccessToken } from "../../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const [loginUser, {data}] = useMutation(LOGIN, {
    variables: {loginInput: {email, password}},
  });

  if (data && data.login.success) {
    setAccessToken(data.login.accessToken).then(() => {
      history.push("/")
      window.location.reload();
    })
  }

  return (
    <Row justify="center" align="middle">
      <Col className="form-body">
        <img alt="" src={icons.group.groupIcon}
             srcSet={`${icons.group.groupIcon2x} 2x, ${icons.group.groupIcon3x} 3x`}
             className="icon"/>
        <Title title="Welcome back!" subtitle="Login to continue."/>
        <form onSubmit={event => {
          event.preventDefault();
          loginUser();
        }}>
          <div>
            <input
              className="input"
              type="email"
              value={email}
              placeholder="Email"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="input"
              minLength={6}
              type="password"
              value={password}
              placeholder="Password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="hyperlink">
            <Link to="/register">Don't have an account? Sign up.</Link>
          </div>

          <div>
            <button type="submit" className="submitButton">Login</button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default Login;
