import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Reservation from "./page/reservation/Reservation";
import Dashboard from "./page/dashboard/Dashboard";
import "semantic-ui-css/semantic.min.css";
import GlobalProvider from "./context/Context";

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Reservation />} />
              <Route path="reservation" element={<Reservation />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
