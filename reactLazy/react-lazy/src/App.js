import React, { Suspense, lazy } from "react";
import "./App.css";

import ComponentError from "./components/ComponentError";
// componentes para react.lazy
const Component1 = lazy(() => import("./components/Component1"));
const Component2 = lazy(() => import("./components/Component2"));

function App() {
  return (
    <div className="App">
      <ComponentError>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <Component1 />
            <Component2 />
          </section>
        </Suspense>
      </ComponentError>
    </div>
  );
}

export default App;
