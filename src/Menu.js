import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import withProps from "recompose/withProps";

const topPage = () => {
  return (
    <div>
      <h1>Top Page</h1>
      <p>ここがトップページです</p>
    </div>
  );
};

const page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <p>1枚目のページです</p>
    </div>
  );
};

const page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <p>2枚目のページです</p>
    </div>
  );
};

const page3 = () => {
  return (
    <div>
      <h1>Page3</h1>
      <p>3枚目のページです</p>
    </div>
  );
};

const page404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>存在しないページです</p>
    </div>
  );
}

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
            <Route path="/page1" exact component={page1} />
            <Route path="/page2" exact component={page2} />
            <Route path="/page3" exact component={page3} />
            <Route exact component={page404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Menu;
