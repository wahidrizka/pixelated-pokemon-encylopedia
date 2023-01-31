import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { StartScreen } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<StartScreen />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
