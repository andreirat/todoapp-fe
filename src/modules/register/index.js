import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../mutations/auth";
import { Row, Col } from 'antd';

import "./style.css"
import "../../styles/common.css"
import { icons } from "../../assets";
import Title from "../../components/Title";
import { Link, useHistory } from "react-router-dom";
import { setAccessToken } from "../../utils/auth";

function Register({client}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const [registerUser, {data}] = useMutation(REGISTER, {
    variables: {registerInput: {name, email, password}},
  });
  console.log(client);
  if (data && data.register.accessToken !== null) {
    setAccessToken(data.register.accessToken).then(() => {
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
        <Title title="Welcome!" subtitle="Sign up to start using Simpledo today."/>
        <form onSubmit={event => {
          event.preventDefault();
          registerUser();
        }}>
          <div>
            <input
              className="input"
              value={name}
              placeholder="Full Name"
              onChange={event => {
                setName(event.target.value);
              }}
            />
          </div>
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
            <Link to="/login">Do have an account? Sign in.</Link>
          </div>

          <div>
            <button type="submit" className="submitButton">Register</button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default Register;
