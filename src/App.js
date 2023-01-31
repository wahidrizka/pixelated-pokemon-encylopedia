import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { StartScreen } from "./pages";
const Explore = loadable(() => import("./pages/Explore"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<StartScreen />} />
        <Route path="/pokemons" element={<Explore />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
