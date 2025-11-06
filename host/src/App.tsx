import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store, { increment, decrement } from "./store/store";

const RemoteCounter = React.lazy(() => import("remote/Counter"));

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: 20 }}>
        <h1>Host App</h1>

        <button onClick={() => store.dispatch(increment())}>Increment (Host)</button>
        <button onClick={() => store.dispatch(decrement())} style={{ marginLeft: 10 }}>
          Decrement (Host)
        </button>

        <div style={{ marginTop: 20 }}>
          <Suspense fallback={<div>Loading Remote…</div>}>
            <RemoteCounter />
          </Suspense>
        </div>
      </div>
    </Provider>
  );
};

export default App;
