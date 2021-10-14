import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import Header from "../components/header/Header";
import router from "../routing/router";
import { Suspense } from "react";
import { AppProvider } from "../context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className={style.App}>
          <Header />
          <Suspense fallback={false}>
            <Switch>
              {router.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.isExact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Suspense>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
