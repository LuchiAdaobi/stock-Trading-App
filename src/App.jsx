import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StockDetailPage from "./pages/StockDetailPage";
import StockOverviewPage from "./pages/StockOverviewPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />}></Route>
            <Route path="/detail/:symbol" element={<StockDetailPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
