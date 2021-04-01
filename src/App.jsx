import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((item, index) => (
          <Route key={index} path={item.path} component={item.page} exact />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
