import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App/App";
import { Provider } from "react-redux";
import { store, persistor } from "./Components/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer position="top-right" pauseOnFocusLoss={false} pauseOnHover={false} draggable={true} hideProgressBar=
      {false} autoClose={2000} />
    </PersistGate>
  </Provider>
);
