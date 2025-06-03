import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import Layout from "./layouts/Layout";

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
