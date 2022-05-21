import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <h2>Http-request App</h2>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
