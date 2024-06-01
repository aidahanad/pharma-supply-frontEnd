import "./App.css";
import Layout from "./layout/Layout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Layout />
      <div style={{ position: "fixed", top: 450 }}>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
