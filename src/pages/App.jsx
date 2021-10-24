import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import Header from "../components/header/Header";
import router from "../routing/router";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { obenerListaDeTalleres } from "../redux/talleres/actions";
import { obtenerListaDeRincones } from "../redux/rincones/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obenerListaDeTalleres());
    dispatch(obtenerListaDeRincones());
  }, []);

  return (
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
  );
}

export default App;
