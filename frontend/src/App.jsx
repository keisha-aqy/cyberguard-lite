import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Overview from "./pages/Overview";
import Monitoring from "./pages/Monitoring";
import SecurityEvents from "./pages/SecurityEvents";

function Layout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-[#080d19]">

      <Sidebar />

      <main className="flex-1 min-w-0">
        <Header title={title} />
        {children}
      </main>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout title="Overview">
              <Overview />
            </Layout>
          }
        />

        <Route
          path="/monitoring"
          element={
            <Layout title="Monitoring">
              <Monitoring />
            </Layout>
          }
        />

        <Route
          path="/security"
          element={
            <Layout title="Security Events">
              <SecurityEvents />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}