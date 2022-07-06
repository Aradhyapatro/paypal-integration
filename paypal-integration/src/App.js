import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.clientID }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider >
  );
}

export default App;
