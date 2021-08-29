import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import Homepage from "./homepage";
import Register from "./register";
import Login from "./login";
import "../styles/layout.css"
import SiteHeader from "../components/Header";

const {Content} = Layout;

export const Routes = () => {
  return <BrowserRouter>
    <Layout className="site-layout">
      <SiteHeader/>
      <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Content>
    </Layout>

  </BrowserRouter>
}