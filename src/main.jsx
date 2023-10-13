/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//react query to perform fetch api through all app
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Checkout, Signup } from "./components";
//AuthProvider to perform secure route 
import { AuthProvider } from "./context/app.context.jsx";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Signup />} index />
            <Route path="/home" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
