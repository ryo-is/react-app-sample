import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import withProps from "recompose/withProps";

const pageComponent = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

const Menu = () => {
  const liStyle = {
    display: "inline",
    width: "100px"
  };

  return (
    <Router>
      <div style={{ width: "500px", textAlign: "left" }}>
        <ul style={{ display: "flex" }}>
          <li style={liStyle}><Link to="/">top</Link></li>
          <li style={liStyle}><Link to="/page1">page1</Link></li>
          <li style={liStyle}><Link to="/page2">page2</Link></li>
          <li style={liStyle}><Link to="/page3">page3</Link></li>
        </ul>

        <div style={{marginLeft: "50px"}}>
          <Switch>
            <Route path="/" exact component={withProps(() => ({
               title: "Top page", text: "ここがトップページです"
            }))(pageComponent)} />
            <Route path="/page1" exact component={withProps(() => ({
               title: "Page1", text: "1枚目のページです"
            }))(pageComponent)} />
            <Route path="/page2" exact component={withProps(() => ({
               title: "Page2", text: "2枚目のページです"
            }))(pageComponent)} />
            <Route path="/page3" exact component={withProps(() => ({
               title: "Page3", text: "3枚目のページです"
            }))(pageComponent)} />
            <Route exact component={withProps(() => ({
               title: "404", text: "存在しないページです"
            }))(pageComponent)} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Menu;
