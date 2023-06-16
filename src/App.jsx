import RootRouters from "./components/RootRouters";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          <RootRouters />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
