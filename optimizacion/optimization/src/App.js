/* // 001.usando Lazy
import React, { Lazy } from "react";
// app.js

const FooComponent = Lazy(() => import("./Foocomponent.js"));
function App() {
  return (
    <div>
      <FooComponent />
    </div>
  );
}

export default App;
 */
// ------------------------------------------------------------
/// 002.usando Lazy con suspense y fallback
/* import React, { Lazy, Suspense } from "react";
// app.js

const FooComponent = Lazy(() => import("./Foocomponent.js"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <FooComponent />
      </div>
    </Suspense>
  );
}

export default App;
 */

// 003 useMemo
/* const Mycomponent = ({ foo, bar }) => {
  function DoHeavyWork(count) {
    // Algún calculo pesado
    return value;
  }

  const value = DoHeavyWork(foo);

  return (
    <>
      <div>value:{value}</div>
      <div>Bar:{bar}</div>
    </>
  );
};
 */

// 004 useMemo

/* import React, { useMemo } from "react";
const Mycomponent = ({ foo, bar }) => {
  function DoHeavyWork(count) {
    // Algún calculo pesado
    return value;
  }

  const value = useMemo(() => DoHeavyWork(foo), [foo]);

  return (
    <>
      <div>value:{value}</div>
      <div>Bar:{bar}</div>
    </>
  );
}; */

// ----------------------------------------------------------
// 005 React.memo

/* const MyComponent =({value})=>(<div>{value}</div>);

const MemoMyComponent = React.memo(MyComponent);

import React,(useState) from 'react';
const App =({value})=>{
  const [count,setCount]= useState(0);


  return(
    <>
    <butoon onClick={()=>setCount(count++)}>click me</butoon>
  <div>count:{count}</div>

    <MemoMyComponent value={value}></MemoMyComponent>
    </>
  )
}
 */

//  006React.memo

/* const MyComponent = ({ onClick, value }) => (
  <>
    <div>Value:{value}</div>
    <button onClick={onClick}>click me</button>
  </>
);

const MemorizedMycomponent = React.memo(MyComponent);

const app = () => {
  const [count, setCount] = useState(0);

  return (
    <MemorizedMycomponent onClick={() => setCount(count++)} value={count} />
  );
}; */

//  007 useCallback

/* const MyComponent = ({ onClick, value }) => (
  <>
    <div>Value:{value}</div>
    <button onClick={onClick}>click me</button>
  </>
);

const MemorizedMycomponent = React.memo(MyComponent);

const app = () => {
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => setCount(count++), [count]);

  return <MemorizedMycomponent onClick={onClick} value={count} />;
};
 */
