import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer/footer";
import { Spin } from "antd";
const Home = lazy(() => import("./pages/home/ui"));
const Deatils = lazy(() => import("./pages/details/ui"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backdropFilter: "blur(10px)",
              background: "#fff",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              textAlign: "center",
              zIndex: "999"
            }}
          >
            <Spin size="large" />
          </div>
        }
      >
        <HeaderComponent />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Deatils />} path="/details/:id" />
        </Routes>
        <FooterComponent />
      </Suspense>
    </>
  );
}

export default App;
