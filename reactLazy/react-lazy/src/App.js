import React, { Suspense } from "react";
import "./App.css";

// import ComponentError from "./components/ComponentError";
// componentes para react.lazy
const Component1 = React.lazy(() => import("./components/Component1"));

function App() {
  return (
    <div className="App">
      {/* <ComponentError> */}
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Component1 />
        </section>
      </Suspense>
      {/* </ComponentError> */}
    </div>
  );
}

export default App;
